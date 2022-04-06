import "./Screens.scss"
import { FC } from "react"
import cn from "classnames"

//* Components
import Item from "#components/UI/Item/Item"
import Image from "#components/UI/Image/Image"

//* Custom hooks
import { useItemSelect } from "#hooks/useItemSelect"
import { IQuiz } from "#types/index"

////////////////////////////////////////////////////////////////////////////////////////////////////
const Quiz: FC<IQuiz> = (props) => {
  const { itemSelected, handleSelected } = useItemSelect<string>([])

  return (
    <div role="screen" className="screen">
      <div className="screen__quiz quiz-content">
        <h2 className="quiz-content__title">{props.title}</h2>

        {props?.subTitle && (
          <h3 className="quiz-content__info">{props.subTitle}</h3>
        )}

        {props?.image && (
          <div className="quiz-content__img">
            <Image {...props.image} />
          </div>
        )}

        <div className="quiz-content__list">
          {props.item.map((item, key) => {
            return (
              <Item
                key={key}
                callback={
                  item?.callback
                    ? item.callback
                    : handleSelected(item.param as string)
                }
                text={item.text}
                type={props.itemType}
                image={item?.image}
                additionalText={item?.additionalText}
                isSelected={
                  itemSelected.find((x) => x === item?.param) !== undefined
                }
              />
            )
          })}
        </div>

        {props?.action && (
          <button
            className="quiz-content__button quiz-content__button_skip"
            onClick={props.action.callback}>
            {props.action.text}
          </button>
        )}

        {props?.subAction && (
          <button
            className={cn("quiz-content__button quiz-content__button_submit", {
              isDisabled: !itemSelected.length,
            })}
            onClick={() => props.subAction.callback(itemSelected.join(","))}>
            {props.subAction.text}
          </button>
        )}
      </div>
    </div>
  )
}

export default Quiz
