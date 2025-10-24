import React, { ReactNode, MouseEventHandler } from "react";
import styles from "./IconButton.module.css"; 
import Icon  from "@/icons/Icon";
import { TypeIcon } from "@/icons/icons";

interface IconButtonProps {
  name: TypeIcon;  
  children?: ReactNode;  
  onClick?: MouseEventHandler<HTMLButtonElement>;  
}

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  children,
  onClick,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Icon name={name} className={styles.button} cursor={"pointer"}/>
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};