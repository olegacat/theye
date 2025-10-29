import { useState } from "react";

import Icon from "@/icons/Icon";
import Btn from "../Btns/Btn/Btn";
import { IconButton } from "../Btns/IconButton/IconButton";
import { ChatInputArea } from "../ChatInputArea/ChatInputArea";
import styles from "./Chat.module.css";
import Image from "next/image";
import airpods from "@/assets/airpods.svg";
import { useChatSteps } from "./useChatSteps";
import { ModalResize } from "./ModalResize/ModalResize";


export const Chat = () => {
  
  const [isModalResizeOpen, setIsModalResizeOpen] = useState<boolean>(false); 
  
  // хук для получения результатов шагов
  const { messages } = useChatSteps();

  const toggleModalResizeOpen = () => {
    setIsModalResizeOpen(prev => !prev)
  }

  return (
    <div className={styles.wrapper}>
      {/* левая панель */}
      <div className={styles.sidebar}>
        <div className={styles.sidebar_top}>
          <div className={styles.header}>
            <div className={styles.header_title}>
              <IconButton name={"MenuBtn"} />
              <span className={styles.projectName}>New Project</span>
            </div>
            <IconButton name={"RightBtn"} />
          </div>

          {/* рендерим все накопленные сообщения */}
          {messages.map((msg) => msg)}
        </div>

        {/* модалка для ресайза, которы открывается по кнопке ресайз, которая в ChatInputArea*/}
        <ModalResize isModalResizeOpen = {isModalResizeOpen}/>
        {/* инпут чата*/}
        <ChatInputArea onClickResize = {toggleModalResizeOpen}/>
      </div>

      {/* правая панель */}
      <div className={styles.main}>
        <div className={styles.toolbar}>
          <Btn className={styles.toolbarBtn}>
            <Icon name="ResizeIcon" cursor={"pointer"} />
            Resizes
          </Btn>
          <div className={styles.rightBtns}>
            <Btn className={styles.toolbarBtn}>
              <Icon name="PlayIcon" cursor={"pointer"} /> Preview
            </Btn>
            <Btn className={styles.exportBtn}>
              <Icon name="ExportIcon" cursor={"pointer"} /> Export
            </Btn>
          </div>
        </div>

        {/* баннер */}
        <div className={styles.banner}>
          <Image src={airpods} alt="AirPods Max" className={styles.image} />
        </div>
      </div>
    </div>
  );
};
