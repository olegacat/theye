import Icon from "@/icons/Icon"
import Btn from "../Btns/Btn/Btn"
import { IconButton } from "../Btns/IconButton/IconButton"
import { ChatInputArea } from "../ChatInputArea/ChatInputArea"
import styles from "./ChatStage.module.css"
import Image from "next/image";
import airpods from "@/assets/airpods.svg";

export const ChatStage = () => {

return (
     <div className={styles.wrapper}>
      {/* Левая панель */}
      <div className={styles.sidebar}>
        <div className={styles.sidebar_top}>
          <div className={styles.header}>
            <div className={styles.header_title}>
              <IconButton name={"MenuBtn"}/>
              <span className={styles.projectName}>New Project</span>
            </div>
            <IconButton name={"RightBtn"}/>
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
          <Btn className={styles.toolbarBtn}><Icon name="ResizeIcon" cursor={"pointer"}/>Resizes</Btn>
          <div className={styles.rightBtns}>
            <Btn className={styles.toolbarBtn}><Icon name="PlayIcon" cursor={"pointer"} /> Preview</Btn>
            <Btn className={styles.exportBtn}><Icon name="ExportIcon" cursor={"pointer"}/> Export</Btn>
          </div>
        </div>

        {/* Баннер */}
        <div className={styles.banner}>
          <Image src={airpods} alt="AirPods Max" className={styles.image} />
        </div>
      </main>
    </div>
)

}