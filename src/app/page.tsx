import Image from "next/image";
import styles from "./page.module.css";
import airpods from "@/assets/airpods.png";
import Icon from "@/icons/Icon";
import { IconButton } from "@/components/Btns/IconButton/IconButton";
import Btn from "@/components/Btns/Btn/Btn";
import { ChatInputArea } from "@/components/ChatInputArea/ChatInputArea";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* Левая панель */}
      <div className={styles.sidebar}>
        <div className={styles.sidebar_top}>
          <div className={styles.header}>
            <div className={styles.header_title}>
              <Icon name="MenuBtn" />
              <span className={styles.projectName}>New Project</span>
            </div>
            <Icon name="RightBtn" />
          </div>

          <div className={styles.message}>
            Hi! We pulled in 1 banner from Figma. Want me to add the animation
            or bring in more resizes?
          </div>

          <div className={styles.actions}>
           <IconButton name="ThumbUp" /> 
             <IconButton name="ThumbDown" /> 
              <IconButton name="RefreshIcon" /> 
          </div>
        </div>

      <ChatInputArea/>
        
      </div>

      {/* Правая панель */}
      <main className={styles.main}>
        <div className={styles.toolbar}>
          <Btn className={styles.toolbarBtn}><Icon name="ResizeIcon"/>Resizes</Btn>
          <div className={styles.rightBtns}>
            <Btn className={styles.toolbarBtn}><Icon name="ResizeIcon"/> Preview</Btn>
            <Btn className={styles.exportBtn}><Icon name="ResizeIcon"/> Export</Btn>
          </div>
        </div>

        {/* Баннер */}
        <div className={styles.banner}>
          <Image src={airpods} alt="AirPods Max" className={styles.image} />
        </div>
      </main>
    </div>
  );
}
