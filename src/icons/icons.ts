import { AnimateIcon } from "./svg/AnimateIcon"
import { CheckIcon } from "./svg/CheckIcon"
import { ExportIcon } from "./svg/ExportIcon"
import { MenuBtn } from "./svg/MenuBtn"
import { PlayIcon } from "./svg/PlayIcon"
import { RefreshIcon } from "./svg/RefreshIcon"
import { ResizeIcon } from "./svg/ResizeIcon"
import { RightBtn } from "./svg/RightBtn"
import { Search } from "./svg/Search"
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
PlayIcon,
Search,
CheckIcon
}



export type TypeIcon = keyof typeof icons