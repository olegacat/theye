import styles from "./MessageRight.module.css";
import React from "react";

interface MessageRightProps {
  message: string;
}

export const MessageRight: React.FC<MessageRightProps> = ({ message }) => {
  return (
    <div className={styles.message_right_wrapper}>
      <div className={styles.message_right}>
        <div className={styles.message}>{message}</div>
      </div>
    </div>
  );
};
