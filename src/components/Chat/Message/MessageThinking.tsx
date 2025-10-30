import styles from "./MessageThinking.module.css";
import React, { useEffect, useState } from "react";
import { IconButton } from "@/components/Btns/IconButton/IconButton";
import Icon from "@/icons/Icon";

interface MessageLeftProps {
  message: string;
  onFinished?: () => void;
  delayAfter?: number;  
}

export const MessageThinking: React.FC<MessageLeftProps> = ({ message, onFinished, delayAfter = 500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    let animationFrame: number;
    let finishTimeout: NodeJS.Timeout;

    setDisplayedText("");
    setIsFinished(false);

    const len = message.length;
    if (len === 0) {
      setIsFinished(true);
      finishTimeout = setTimeout(() => onFinished?.(), delayAfter);
      return;
    }

    const coef = 1 + len / 150;
    const totalDuration = coef * 500;
    const intervalTime = totalDuration / len;

    const draw = () => {
      index++;
      setDisplayedText(message.slice(0, index));

      if (index < len) {
        animationFrame = window.setTimeout(draw, intervalTime);
      } else {
        setIsFinished(true);
  
     
        finishTimeout = setTimeout(() => onFinished?.(), delayAfter);
      }
    };

    draw();

    return () => {
      if (animationFrame) clearTimeout(animationFrame);
      if (finishTimeout) clearTimeout(finishTimeout);
    };
  }, [message, onFinished, delayAfter]);

  return (
    <div className={styles.message_thinking_wrapper}>
     <Icon name={"TwoStartsIcon"}/> <div className={styles.message}>Resizing {displayedText}...</div> 
    </div>
  );
};
