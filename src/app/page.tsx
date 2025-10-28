"use client";

import styles from "@/app/page.module.css"

import { useState } from "react";

import { LoadingStage } from "@/components/Stages/LoadingStage";
import { ChatStage } from "@/components/Stages/ChatStage";

export default function Home() {
  const [stage, setStage] = useState<"loading" | "chat" | "size">("loading");

  return (
   <div className={styles.wrapper}>
      {stage === "loading" && <LoadingStage onFinish={()=>{}} />}
      {stage === "chat" && <ChatStage />}
    </div>
  );
}
