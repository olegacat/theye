"use client";

import React, { useRef } from "react";
import styles from "./ChatInputArea.module.css";
import Btn from "@/components/Btns/Btn/Btn";
import Icon from "@/icons/Icon";
import { IconButton } from "../Btns/IconButton/IconButton";

export const ChatInputArea: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto"; 
    const newHeight = Math.min(el.scrollHeight, 190); 
    el.style.height = `${newHeight}px`;

    
    el.style.overflowY = el.scrollHeight > 190 ? "auto" : "hidden";
  };

  return (
    <div className={styles.inputArea}>
      <textarea
        ref={textareaRef}
        className={styles.input}
        placeholder="Ask Theye..."
        onInput={handleInput}
      />

      <div className={styles.inputArea_actions}>
        <div className={styles.buttons}>
          <Btn className={styles.addResize}><Icon name="ResizeIcon"/> Add Resize</Btn>
          <Btn className={styles.animate}><Icon name="AnimateIcon"/> Animate</Btn>
        </div>
               <IconButton name="SendIcon" /> 
      </div>
    </div>
  );
}; 