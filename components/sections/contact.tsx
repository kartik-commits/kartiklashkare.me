"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CONTACT_EMAIL = 'kartiklashkare@email.com';
const DEFAULT_CONTACT_ENDPOINT = 'https://formspree.io/f/xkoydwpl';
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? DEFAULT_CONTACT_ENDPOINT;
const SUBMISSION_COOLDOWN_MS = 30_000;

const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters.').max(80, 'Name is too long.'),
  email: z.string().trim().email('Please enter a valid email address.').max(120, 'Email is too long.'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters.').max(120, 'Subject is too long.'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.').max(1500, 'Message is too long.'),
  website: z.string().trim().max(0, 'Invalid submission.'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type ContactPayload = Omit<ContactFormData, 'website'>;
type ContactFormErrors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }
  return 'Unable to send your message right now. Please try again or use email instead.';
};

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [lastSubmittedAt, setLastSubmittedAt] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field !== 'website') {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const submitContactForm = async (payload: ContactPayload) => {
    if (!CONTACT_ENDPOINT) {
      throw new Error(`Contact form is not configured yet. Please email ${CONTACT_EMAIL}.`);
    }

    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let message = `Request failed (${response.status}).`;
      const contentType = response.headers.get('content-type');

      if (contentType?.includes('application/json')) {
        const body = (await response.json()) as {
          error?: string;
          message?: string;
          errors?: string[];
        };
        message = body.error ?? body.message ?? body.errors?.[0] ?? message;
      } else {
        const text = (await response.text()).trim();
        if (text) {
          message = text.slice(0, 160);
        }
      }

      throw new Error(message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (lastSubmittedAt) {
      const elapsed = Date.now() - lastSubmittedAt;
      if (elapsed < SUBMISSION_COOLDOWN_MS) {
        const secondsLeft = Math.ceil((SUBMISSION_COOLDOWN_MS - elapsed) / 1000);
        toast({
          title: 'Please wait before sending again',
          description: `Try again in ${secondsLeft} seconds.`,
          variant: 'destructive',
        });
        return;
      }
    }

    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const nextErrors: ContactFormErrors = {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      };

      setErrors(nextErrors);

      const firstError =
        nextErrors.name ??
        nextErrors.email ??
        nextErrors.subject ??
        nextErrors.message ??
        'Please verify your details and try again.';

      toast({
        title: 'Please correct the form',
        description: firstError,
        variant: 'destructive',
      });
      return;
    }

    const { website, ...payload } = validationResult.data;
    if (website) {
      toast({
        title: 'Submission blocked',
        description: 'Spam protection was triggered. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitContactForm(payload);

      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I&apos;ll get back to you soon.',
      });

      setFormData(initialFormData);
      setLastSubmittedAt(Date.now());
    } catch (error) {
      toast({
        title: 'Message could not be sent',
        description: getErrorMessage(error),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9552081303',
      href: 'tel:+919552081303',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pune, Maharashtra',
      href: 'https://maps.google.com/?q=Pune,Maharashtra',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white/50 dark:bg-slate-900/50" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              id="contact-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let&apos;s discuss about my work or if I could anyhow be handy to you or just say Namaste. I&apos;m always excited to talk to like-minded folks.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  I&apos;m always open to discussing new opportunities, interesting projects,
                  or just having a chat about technology and development. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-gray-800 to-black text-white">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {info.title}
                      </h4>
                      <a
                        href={info.href}
                        className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6 relative">
                    <div className="absolute left-[-5000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        required
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 resize-none"
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </motion.div>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {!CONTACT_ENDPOINT && (
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Form endpoint is not configured yet. Please email{' '}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </p>
                    )}

                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      If this form fails, contact me directly at{' '}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="underline underline-offset-2 hover:text-black dark:hover:text-white"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
