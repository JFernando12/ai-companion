import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 500 || delay);
    console.log('timer: ', timer)

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return debouncedValue;
}