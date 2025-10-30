import { useState, useEffect, JSX, useCallback } from "react"; 
import { MessageLeft } from "./Message/MessageLeft";
import { MessageRight } from "./Message/MessageRight";
import { Step } from "./Chat";
import { MessageThinking } from "./Message/MessageThinking";


interface IuseChatSteps {
  setIsModalResizeOpen: (value: boolean) => void;
  steps: Step[];
}

interface UseChatStepsReturn {
  messages: JSX.Element[];
  resumeSteps: (number?:number) => void;  
  currentStepIndex: number;
  
}

export const useChatSteps = ({ setIsModalResizeOpen, steps}: IuseChatSteps): UseChatStepsReturn => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [messages, setMessages] = useState<JSX.Element[]>([]);
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);  


const resumeSteps = useCallback((delay?: number) => {
  const proceed = () => {
    setCurrentStepIndex((i) => i + 1);
    setIsPaused(false);
  };

  if (typeof delay === "number" && delay > 0) {
    setTimeout(proceed, delay);
  } else {
    proceed();
  }
}, [setCurrentStepIndex, setIsPaused]);



  useEffect(() => {
    setStart(true);
  }, []);

  useEffect(() => {
    if (!start || isPaused) return; 

    const step = steps[currentStepIndex];
    if (!step) return;

    let timeout: NodeJS.Timeout;

    if (step.type === "left") {
      const msg = (
        <MessageLeft
          key={currentStepIndex}
          message={step.message ?? " "}
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
    } else if (step.type === "right") {
      const msg = <MessageRight key={currentStepIndex} message={step.message ?? " "} />;
      setMessages(prev => [...prev, msg]);

      if (step.delay) {
        timeout = setTimeout(() => setCurrentStepIndex(i => i + 1), step.delay);
      } else {
        setCurrentStepIndex(i => i + 1);
      }
    } else if (step.type === "openResizeModal") {
      setIsModalResizeOpen(true);
      setIsPaused(true); //   ставим паузу
    }

 else if (step.type === "thinking") {
  const msgId = `thinking-${currentStepIndex}`;

 
  setMessages(prev => [...prev, <MessageThinking key={msgId} message={step.message ?? " "}  />]);

  const removeThinking = () => {
    setMessages(prev => prev.filter(m => (m.key as string) !== msgId));
    setCurrentStepIndex(i => i + 1);
  };

  if (step.delay) {
    timeout = setTimeout(removeThinking, step.delay);
  } else {
    removeThinking();
  }
}



    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentStepIndex, start, isPaused]);

  return { messages, resumeSteps, currentStepIndex };
};
