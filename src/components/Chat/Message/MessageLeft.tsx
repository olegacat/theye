import styles from "./MessageLeft.module.css";
import React, { useEffect, useState } from "react";
import { IconButton } from "@/components/Btns/IconButton/IconButton";

interface MessageLeftProps {
  message: string;
  onFinished?: () => void;
  delayAfter?: number;  
}

export const MessageLeft: React.FC<MessageLeftProps> = ({ message, onFinished, delayAfter = 500 }) => {
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
    const totalDuration = coef * 1500;
    const intervalTime = totalDuration / len;

    const draw = () => {
      index++;
      setDisplayedText(message.slice(0, index));

      if (index < len) {
        animationFrame = window.setTimeout(draw, intervalTime);
      } else {
        setIsFinished(true);
        console.log('mess', message, 'finished');
     
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
    <div className={styles.message_left}>
      <div className={styles.message}>{displayedText}</div>
      <div className={`${styles.actions} ${isFinished ? styles.active : ""}`}>
        <IconButton name="ThumbUp" />
        <IconButton name="ThumbDown" />
        <IconButton name="RefreshIcon" />
      </div>
    </div>
  );
};
