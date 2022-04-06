import "./Screens.scss"
import { FC, useEffect } from "react"
import { IQuiz } from "#types/index"

import Image from "#components/UI/Image/Image"

////////////////////////////////////////////////////////////////////////////////////////////////////
const QuizLike: FC<IQuiz> = (props) => {
  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>
    if (props.timeout) {
      timeOut = setTimeout(() => {
        props.action.callback()
      }, props.timeout)
    }
    return () => {
      clearTimeout(timeOut)
    }
  }, [props.action, props.timeout])

  return (
    <div role="screen" className="screen">
      <div className="screen__like like-content">
        {props?.image && (
          <div className="like-content__img">
            <Image {...props.image} />
          </div>
        )}
        <h1 className="like-content__text">{props.title}</h1>
      </div>
    </div>
  )
}

export default QuizLike
