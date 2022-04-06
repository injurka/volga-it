import "./Item.scss"

import { FC } from "react"
import cn from "classnames"

import { ReactComponent as SelectedIcon } from "#assets/icon/Selected.svg"
import { QuizItemType, Image as ImageProps } from "#/types"

import Image from "#components/UI/Image/Image"

interface Props {
  callback: (e: unknown) => void
  type: QuizItemType
  text: string
  image?: ImageProps
  additionalText?: string
  isSelected?: boolean
}

////////////////////////////////////////////////////////////////////////////////////////////////////
const Item: FC<Props> = (props) => {
  return (
    <div
      role="quiz-item"
      onClick={props.callback}
      className={cn("item", props.type)}>
      <button className={cn("item__button", { isSelected: props.isSelected })}>
        {props?.isSelected && <SelectedIcon className="item__selected-icon" />}

        <div className="item__inner">
          {props?.image && (
            <div className="item__img">
              <Image {...props.image} />
            </div>
          )}

          {props?.image && props.type === "inline" && (
            <span className="item__vhr" />
          )}
          {props?.text && (
            <p
              className="item__text"
              style={{ textAlign: props?.additionalText ? "left" : "center" }}>
              {props.text}
            </p>
          )}
          {props?.additionalText && (
            <p className="item__text item__text_additional">
              {props.additionalText}
            </p>
          )}
        </div>
      </button>
    </div>
  )
}

export default Item
