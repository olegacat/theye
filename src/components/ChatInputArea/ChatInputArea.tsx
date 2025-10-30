"use client";

import React, { useRef } from "react";
import styles from "./ChatInputArea.module.css";
import Btn from "@/components/Btns/Btn/Btn";
import Icon from "@/icons/Icon";
import { IconButton } from "../Btns/IconButton/IconButton";

interface IChatInputArea {
  onClickResize?: () => void;
  sendResizeOptionsToRender?: ()=> void;
  setSelectedSizesChat:(value: string[])=> void;
  selectedSizesChat: string[];
}


export const ChatInputArea: React.FC<IChatInputArea> = ({onClickResize, sendResizeOptionsToRender, setSelectedSizesChat, selectedSizesChat }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto"; 
    const newHeight = Math.min(el.scrollHeight, 190); 
    el.style.height = `${newHeight}px`;

    
    el.style.overflowY = el.scrollHeight > 190 ? "auto" : "hidden";
  };

  const deleteSelectedSize = (sizeName:string) => {
        const newSelectedSizes = selectedSizesChat.filter((el) => el !== sizeName);
        setSelectedSizesChat([...newSelectedSizes])
  }


  return (
    <div className={styles.inputArea}>

          <div className={`${styles.inputArea_selected_sizes} ${selectedSizesChat.length > 0 ? styles.active : null}`}>
             <div className={styles.selected_sizes_title}>
            <Icon name={"ResizeIcon"}/>Add Resizes:
             </div>
            <div className={styles.selected_sizes_wrapper}>
      {selectedSizesChat?.map((e)=>(

        <div className={styles.selected_sizes_option}  key={e}>
          {e}
          <IconButton name={"CrossIcon8px"} onClick={() => deleteSelectedSize(e)}/>
        </div>)
)}
</div>
</div>
{selectedSizesChat.length === 0 && 
      <textarea
        ref={textareaRef}
        className={styles.input}
        placeholder="Ask Theye..."
        onInput={handleInput}
      />}

      <div className={styles.inputArea_actions}>
        <div className={styles.buttons}>
          <Btn className={styles.addResize} onClick={onClickResize}><Icon name="ResizeIcon" cursor="pointer" /> Add Resize</Btn>
          <Btn className={styles.animate} ><Icon name="AnimateIcon" cursor="pointer"/> Animate</Btn>
        </div>
               <IconButton onClick={sendResizeOptionsToRender} name="SendIcon" className={`${sendResizeOptionsToRender? styles.sendResizeOptionsToRender: null}`}/> 
      </div>
    </div>
  );
}; 