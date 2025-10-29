import { useState, useEffect, JSX } from "react";
import {   Step, steps } from "./steps";
import { MessageLeft } from "./Message/MessageLeft";
import { MessageRight } from "./Message/MessageRight";

export const useChatSteps = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [messages, setMessages] = useState<JSX.Element[]>([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  useEffect(() => {
    if (!start) return;

    const step: Step | undefined = steps[currentStepIndex];
    if (!step) return;

    let timeout: NodeJS.Timeout;

    if (step.type === "left") {
      const msg = (
        <MessageLeft
          key={currentStepIndex}
          message={step.message}
          onFinished={() => {
            if (step.delay) {
              timeout = setTimeout(() => setCurrentStepIndex(i => i + 1), step.delay);
            } else {
              setCurrentStepIndex(i => i + 1);
            }
          }}
        />
      );
      setMessages(prev => [...prev, msg]);
    } else {
      const msg = <MessageRight key={currentStepIndex} message={step.message} />;
      setMessages(prev => [...prev, msg]);

      if (step.delay) {
        timeout = setTimeout(() => setCurrentStepIndex(i => i + 1), step.delay);
      } else {
        setCurrentStepIndex(i => i + 1);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentStepIndex, start]);

  return { messages };
};
