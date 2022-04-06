import "./ProgressBar.scss"

import { FC } from "react"

import cn from "classnames"

interface Props {
  current: number
  max: number
  isShow: boolean
}

////////////////////////////////////////////////////////////////////////////////////////////////////
const ProgressBar: FC<Props> = (props) => {
  return (
    <div className={cn("progress-bar", { isShow: props.isShow })}>
      <span
        style={{ width: (100 / props.max) * props.current + "%" }}
        className={cn("progress-bar__inner", {
          isEnd: props.current === props.max,
        })}></span>
    </div>
  )
}

export default ProgressBar
