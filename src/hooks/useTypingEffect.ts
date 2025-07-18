import { useState, useEffect } from 'react';

export const useTypingEffect = (
  roles: string[],
  typingSpeed = 150,      // per character (ms)
  deletingSpeed = 75,     // per character (ms)
  pauseDuration = 1500    // after full word (ms)
) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    }

    // When typing is done, start deleting after a pause
    if (charIndex === currentRole.length && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    }

    // When deletion is done, move to next role
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
};
