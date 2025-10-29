"use client";

import styles from "@/app/page.module.css"
import { Chat } from "@/components/Chat/Chat";

import { useState } from "react";
  

export default function Home() {
  const [stage, setStage] = useState<"loading" | "chat" | "size">("loading");

  return (
   <div className={styles.wrapper}> 
      <Chat />
    </div>
  );
}
