"use client";

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  loop?: boolean;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export function TypeWriter({
  words,
  loop = true,
  cursor = true,
  cursorStyle = '|',
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1000,
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delaySpeed);
      return () => clearTimeout(waitTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setIsWaiting(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) =>
            loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isWaiting, currentWordIndex, words, loop, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <span className="inline-block">
      {currentText}
      {cursor && (
        <span className="animate-pulse ml-1 text-black dark:text-white">
          {cursorStyle}
        </span>
      )}
    </span>
  );
}