import { useState, useEffect } from "react";

function useTypeWriter(roles: string[]) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (charCount < roles[roleIndex].length && isDeleting === false) {
      const typeTimer = setTimeout(() => {
        setCharCount((i) => i + 1);
      }, 100);

      return () => clearTimeout(typeTimer);
    }

    if (isDeleting === true && charCount > 0) {
      const deleteTimer = setTimeout(() => {
        setCharCount((i) => i - 1);
      }, 50);
      return () => clearTimeout(deleteTimer);
    }

    if (isDeleting === true && charCount === 0) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1000);

      return () => clearTimeout(pauseTimer);
    }

    const timerId = setTimeout(() => {
      setIsDeleting(true);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [roleIndex, roles, charCount, isDeleting]);

  return roles[roleIndex].slice(0, charCount);
}

export default useTypeWriter;
