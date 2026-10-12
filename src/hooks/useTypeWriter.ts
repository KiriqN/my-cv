import { useState, useEffect } from "react";

function useTypeWriter(roles: string[]) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseSpeed = 500;
  const finishTypeSpeed = 2000;

  useEffect(() => {
    if (charCount < roles[roleIndex].length && isDeleting === false) {
      const typeTimer = setTimeout(() => {
        setCharCount((i) => i + 1);
      }, typingSpeed);

      return () => clearTimeout(typeTimer);
    }

    if (isDeleting === true && charCount > 0) {
      const deleteTimer = setTimeout(() => {
        setCharCount((i) => i - 1);
      }, deletingSpeed);
      return () => clearTimeout(deleteTimer);
    }

    if (isDeleting === true && charCount === 0) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, pauseSpeed);

      return () => clearTimeout(pauseTimer);
    }

    const timerId = setTimeout(() => {
      setIsDeleting(true);
    }, finishTypeSpeed);
    return () => {
      clearTimeout(timerId);
    };
  }, [roleIndex, roles, charCount, isDeleting]);

  return roles[roleIndex].slice(0, charCount);
}

export default useTypeWriter;
