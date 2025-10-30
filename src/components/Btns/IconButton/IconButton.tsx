import React, { ReactNode, MouseEventHandler } from "react";
import styles from "./IconButton.module.css"; 
import Icon  from "@/icons/Icon";
import { TypeIcon } from "@/icons/icons";

interface IconButtonProps {
  name: TypeIcon;  
  children?: ReactNode;  
  onClick?:  (value?:any) => void;  
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  children,
  onClick,
  className
}) => {
  return (
    <button className={`${styles.button} ${className ? className : null}`} onClick={onClick}>
      <Icon name={name} className={styles.button} cursor={"pointer"}/>
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};