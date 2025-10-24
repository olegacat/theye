import { AnimateIcon } from "./svg/AnimateIcon"
import { ExportIcon } from "./svg/ExportIcon"
import { MenuBtn } from "./svg/MenuBtn"
import { PlayIcon } from "./svg/PlayIcon"
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
SendIcon,
ExportIcon,
PlayIcon
}



export type TypeIcon = keyof typeof icons