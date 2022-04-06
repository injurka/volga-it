import "./Image.scss"
import { FC, useEffect, useState } from "react"
import cn from "classnames"

import { Image as ImageProps } from "#types/index"

////////////////////////////////////////////////////////////////////////////////////////////////////
const MyImage: FC<ImageProps> = (props) => {
  const [isLoad, setIsLoad] = useState<boolean>(false)

  useEffect(() => {
    const image = new Image()
    image.src = props.src
    image.onload = () => {
      setIsLoad(true)
    }
    return setIsLoad(false)
  }, [])

  return (
    <div className={cn("image", { isLoading: !isLoad })}>
      <img
        className="image__img"
        src={props?.src}
        width={props?.width}
        height={props?.height}
        alt={props?.alt}
      />
    </div>
  )
}

export default MyImage
