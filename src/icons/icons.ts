import { AnimateIcon } from "./svg/AnimateIcon"
import { CheckIcon } from "./svg/CheckIcon"
import { CrossIcon8px } from "./svg/CrossIcon8px"
import { ExportIcon } from "./svg/ExportIcon"
import { MenuBtn } from "./svg/MenuBtn"
import { PlayIcon } from "./svg/PlayIcon"
import { PlusIcon } from "./svg/PlusIcon"
import { RefreshIcon } from "./svg/RefreshIcon"
import { ResizeIcon } from "./svg/ResizeIcon"
import { RightBtn } from "./svg/RightBtn"
import { Search } from "./svg/Search"
import { SendIcon } from "./svg/SendIcon"
import { ThumbDown } from "./svg/ThumbDown"
import { ThumbUp } from "./svg/ThumbUp"
import { TwoStartsIcon } from "./svg/TwoStartsIcon"

 
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
CheckIcon,
PlusIcon,
CrossIcon8px,
TwoStartsIcon
}



export type TypeIcon = keyof typeof icons