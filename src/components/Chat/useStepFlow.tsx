import { useState, useRef } from "react";

export const useStepFlow = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const pausedRef = useRef(false);

  const triggerStep = () => {
    if (pausedRef.current) return;

    setCurrentStepIndex((prev) => prev + 1);
  };

  const stop = () => {
    pausedRef.current = true;
  };

  const start = () => { 
    pausedRef.current = false;
  };

  return {
    currentStepIndex,
    triggerStep,
    stop,
    start,
  };
};
