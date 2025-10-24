import { AnimateIcon } from "./svg/AnimateIcon"
import { MenuBtn } from "./svg/MenuBtn"
import { RefreshIcon } from "./svg/RefreshIcon"
import { ResizeIcon } from "./svg/ResizeIcon"
import { RightBtn } from "./svg/RightBtn"
import { SendIcon } from "./svg/SendIcon"
import { ThumbDown } from "./svg/ThumbDown"
import { ThumbUp } from "./svg/ThumbUp"

 
export const icons = {
 MenuBtn,
 RightBtn,
 ThumbUp,
ThumbDown,
RefreshIcon,
ResizeIcon,
AnimateIcon,
SendIcon
}



export type TypeIcon = keyof typeof icons