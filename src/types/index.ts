export type HandleSwitchScreen = (
  [screen, subScreen]: number[],
  param: Partial<IParams> | null,
) => void

export interface IPrevScreen {
  screen: [number, number]
  params: IParams
}

export interface IParams {
  gender: number
  eyewear_type: number
  lenstype: number
  frame_size: number
  blue_light: boolean
  shade: "dark" | "light" | "transition"
  face_shape: "long" | "round" | "between"
  facial_features: "sharp" | "rounded" | "between"
  shape: string
  brand: string
}

export type QuizType = "quiz" | "like" | "sides"
export type QuizItemType = "column" | "inline" | "selectable"

interface IQuizItem {
  text: string
  image?: Image
  param?: string
  callback?: () => void
  additionalText?: string
}

export interface IQuiz {
  type: QuizType
  image?: Image
  title: string
  subTitle: string
  itemType: QuizItemType
  timeout?: number
  item: IQuizItem[]
  action: {
    text: string
    callback: () => void
  }
  subAction: {
    text: string
    callback: (param: string) => void
  }
  footer?: {
    text: string
  }
}

export interface Image {
  src: string
  alt: string
  width: number
  height: number
}
