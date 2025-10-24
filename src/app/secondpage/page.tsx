"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "@/hooks/useSession/useSession";
import { LanguageSwitch } from "@/components/common/UI/select/languageSwitch/LanguageSwitch";
import { Button } from "@/components/ui/button";  
import styles from "./auth.module.css";

export default function Auth() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { session } = useSession();

  const goToLogin = () => {
    router.push("/auth/login");
  };
 console.log(session)
  useEffect(() => {
    if (session) {
      router.refresh();
      
    }
  }, [session, router]);

 
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authWrapper_top}>
        <div className={styles.authWrapper_top_title}>Welcome to Langocat</div>
        <div className={styles.authWrapper_top_subtitle}>
          Learn languages with fun and ease
        </div>
      </div>

      <div className={styles.authWrapper_actions}>
        <Button onClick={goToLogin} className={styles.loginButton}>
          Sign In
        </Button>
      </div>

      {/* <div className={styles.authWrapper_language}>
        <LanguageSwitch />
      </div> */}
    </div>
  );
}
