import { useState, useEffect, useRef } from 'react';

export function useTypewriter(text: string, speed = 45, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;

    const delayTimer = setTimeout(() => {
      const tick = () => {
        if (i < text.length) {
          i++;
          setDisplayed(text.slice(0, i));
          frameRef.current = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export function useWordReveal(words: string[], msPerWord = 100, startDelay = 0) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setVisibleCount(0);
    setDone(false);
    let i = 0;

    const delayTimer = setTimeout(() => {
      const tick = () => {
        if (i < words.length) {
          i++;
          setVisibleCount(i);
          setTimeout(tick, msPerWord);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => clearTimeout(delayTimer);
  }, [words.join(''), msPerWord, startDelay]);

  return { visibleCount, done };
}
