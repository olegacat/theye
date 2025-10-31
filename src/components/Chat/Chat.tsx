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

import LargeRectangle from "@/assets/optionResizeImages/LargeRectangle300x250px.svg";
import SmallSquare from "@/assets/optionResizeImages/SmallSquare300x300px.svg";
import Skyscraper from "@/assets/optionResizeImages/Skyscraper1200x300px.svg";
import { BannerGrid } from "../BannerGrid/BannerGrid";


export type StepType = "left" | "right" | "openResizeModal" | "thinking";
export interface Step {
  type: StepType;
  message?: string;
  delay?: number;
}

export interface ISizesToShow {
  name: string;
  size: string;
  image: string;
}

export const steps: Step[] = [
  {
    type: "left",
    message: `Hi! We pulled in 1 banner from Figma. Want me to add the animation
            or bring in more resizes?`,
    delay: 0,
  },
  {
    type: "openResizeModal",
    delay: 1000,
  },
  {
    type: "left",
    message:
      "I generated the resizes you requested – check if you like everything. If there's anything you want to adjust, let me know.",
    delay: 1000,
  },
];

const options = [
  {
    title: "Squares",
    items: [
      {
        name: "Large Rectangle",
        size: "427 x 317",
        image: LargeRectangle,
      },
      {
        name: "Small Square",
        size: "312 x 312",
        image: SmallSquare,
      },
    ],
  },
  {
    title: "Verticals",
    items: [
      {
        name: "Skyscraper",
        size: "768 x 202",
        image: Skyscraper,
      },
    ],
  },
];
export const Chat = () => {
  // стейты модалки выбора размеров
  const [isModalResizeOpen, setIsModalResizeOpen] = useState<boolean>(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  // стейты результатов модалки выбора размеров в чате
  const [selectedSizesChat, setSelectedSizesChat] = useState<string[]>([]);

  // стейты результатов модалки выбора размеров в чате
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [sizesToShow, setSizesToShow] = useState<ISizesToShow[]>([]);

  // хук для получения результатов шагов
  const { messages, resumeSteps, currentStepIndex } = useChatSteps({
    setIsModalResizeOpen,
    steps,
  });

  const toggleModalResizeOpen = () => {
    setIsModalResizeOpen((prev) => !prev);
  };

  const chooseResizeOptions = () => {
    if (
      steps[currentStepIndex]?.type === "openResizeModal" &&
      selectedSizes.length > 0
    ) {
      setIsModalResizeOpen(false);

      setSelectedSizesChat([...selectedSizes]);
    }
  };

  const sendResizeOptionsToRender = () => {
    if (
      steps[currentStepIndex]?.type === "openResizeModal" &&
      selectedSizesChat.length > 0
    ) {
      const message = selectedSizesChat
        .map((name) => {
          for (const section of options) {
            const item = section.items.find((i) => i.name === name);
            if (item) return `${item.name} ${item.size}`;
          }
          return name;
        })
        .join(", ");

      const dynamicStep: Step = {
        type: "right",
        message: `Add Resizes: ${message}`,
        delay: 1000,
      };

      steps.splice(currentStepIndex + 1, 0, dynamicStep);

      const thinkingStep: Step = {
        type: "thinking",
        message: message,
        delay: 3000,
      };

      steps.splice(currentStepIndex + 2, 0, thinkingStep);

      setIsModalResizeOpen(false);
      const sizesToShow = selectedSizes.map((name) => {
        for (const section of options) {
          const item = section.items.find((i) => i.name === name);
          if (item) return { ...item }; // возвращаем объект с name, size, image
        }
        return { name, size: "Unknown", image: "" }; // fallback, если не нашли
      });

      setSizesToShow(sizesToShow);
      setSelectedSizesChat([]);
      setSelectedSizes([]);

      resumeSteps(steps[currentStepIndex].delay ?? 0);

      setIsGenerating(true);
    }
  };

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
          <div className={styles.messages}>{messages.map((msg) => msg)}</div>
        </div>

        {/* модалка для ресайза, которы открывается по кнопке ресайз, которая в ChatInputArea*/}
        <ModalResize
          isModalResizeOpen={isModalResizeOpen}
          setSelectedSizes={setSelectedSizes}
          selectedSizes={selectedSizes}
          chooseResizeOptions={chooseResizeOptions}
          options={options}
        />
        {/* инпут чата*/}
        <ChatInputArea
          onClickResize={
            steps[currentStepIndex]?.type === "openResizeModal"
              ? toggleModalResizeOpen
              : undefined
          }
          sendResizeOptionsToRender={
            steps[currentStepIndex]?.type === "openResizeModal" &&
            selectedSizesChat.length > 0
              ? sendResizeOptionsToRender
              : undefined
          }
          selectedSizesChat={selectedSizesChat}
          setSelectedSizesChat={setSelectedSizesChat}
        />
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

        {/* поле для баннеров */}
        {isGenerating ? (     <div className={styles.generatedGrid_wrapper}>
 
            {/* {sizesToShow.map((banner, idx) => (
              <div key={idx} className={styles.gridItem}>
                    <div className={styles.gridItem_title}>
                     { banner.name} {banner.size}
                          </div>
                <Image
                  src={banner.image}
                  alt={banner.name} 
                  className={styles.gridImage}
                />
              </div>
            ))} */}

            <BannerGrid/> 
          </div>
        ) : (
          <div className={styles.banner}>
            <Image src={airpods} alt="AirPods Max" className={styles.image} />
          </div>
        )}
      </div>
    </div>
  );
};
