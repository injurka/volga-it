import "./Screens.scss"
import { FC } from "react"
import { IQuiz } from "#types/index"
import cn from "classnames"

import Image from "#components/UI/Image/Image"

////////////////////////////////////////////////////////////////////////////////////////////////////
const QuizSides: FC<IQuiz> = (props) => {
  return (
    <div role="screen" className="screen">
      <div
        className={cn("screen__sides sides-content", {
          isFirst: !props?.footer,
        })}>
        {props?.image && (
          <div className="sides-content__img">
            <Image {...props.image} />
          </div>
        )}

        <h1 className="sides-content__text">{props.title}</h1>
        <h2 className="sides-content__text_sub">{props.subTitle}</h2>

        <button
          className="sides-content__button"
          onClick={props.action.callback}>
          {props.action.text}
        </button>

        {props?.footer && (
          <p className="sides-content__footer">{props.footer.text}</p>
        )}
      </div>
    </div>
  )
}

export default QuizSides
