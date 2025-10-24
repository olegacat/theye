import styles from "./btn.module.css";

type TypeBtn = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Btn: React.FC<TypeBtn> = ({
  children,
  onClick,
  width,
  style,
  disabled,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      name={typeof children === "string" ? children : undefined}
      className={styles.btn + (className ? ` ${className}` : "")}
      onClick={onClick}
      style={{ ...(width ? { width } : {}), ...style }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Btn;
