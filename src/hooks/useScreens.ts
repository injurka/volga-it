//! Welcome to hell
//& Honestly this is a bad implementation, however, thanks to this bundle will weigh less )0))
//& It would be better to implement separate components for each type...but who cares about )0

//? 0 QuizSides
import First from "#assets/image/First.png"

//? 1 Quiz
import Women from "#assets/icon/Women.svg"
import Men from "#assets/icon/Men.svg"

//? 2 Quiz
import EyeglassesMen from "#assets/icon/EyeglassesMen.svg"
import SunglassesMen from "#assets/icon/SunglassesMen.svg"
import EyeglassesWomen from "#assets/icon/EyeglassesWomen.svg"
import SunglassesWomen from "#assets/icon/SunglassesWomen.svg"

//? 4 Quiz
import Sizes from "#assets/icon/Sizes.svg"

//? 5 Quiz
import DarkShade from "#assets/icon/DarkShade.svg"
import LightShade from "#assets/icon/LightShade.svg"
import Transition from "#assets/icon/Transition.svg"

//? 8 Quiz
import Aviator from "#assets/image/Aviator.png"
import Browline from "#assets/image/Browline.png"
import CatEye from "#assets/image/CatEye.png"
import Geometric from "#assets/image/Geometric.png"
import Oval from "#assets/image/Oval.png"
import Oversized from "#assets/image/Oversized.png"
import Rectangle from "#assets/image/Rectangle.png"
import Rimless from "#assets/image/Rimless.png"
import Round from "#assets/image/Round.png"
import Square from "#assets/image/Square.png"

//? 10 Quiz
import ArmaniExchange from "#assets/image/ArmaniExchange.png"
import Burberry from "#assets/image/Burberry.png"
import Coach from "#assets/image/Coach.png"
import Gucci from "#assets/image/Gucci.png"
import HilaryDuff from "#assets/image/HilaryDuff.png"
import MichaelKors from "#assets/image/MichaelKors.png"
import Oakley from "#assets/image/Oakley.png"
import Prada from "#assets/image/Prada.png"
import RayBan from "#assets/image/RayBan.png"
import ToryBurch from "#assets/image/ToryBurch.png"
import Versace from "#assets/image/Versace.png"
import Vogue from "#assets/image/Vogue.png"

//? 11 QuizSides
import Last from "#assets/icon/Present.svg"

//? ~ QuizLike
import Like from "#assets/icon/Like.svg"

//? ~ FaceList
import FaceBothBetween from "#assets/icon/FaceBothBetween.svg"
import FaceBothLong from "#assets/icon/FaceBothLong.svg"
import FaceBothRound from "#assets/icon/FaceBothRound.svg"
import FaceMenBetween from "#assets/icon/FaceMenBetween.svg"
import FaceMenLong from "#assets/icon/FaceMenLong.svg"
import FaceMenRound from "#assets/icon/FaceMenRound.svg"
import FaceWomenBetween from "#assets/icon/FaceWomenBetween.svg"
import FaceWomenLong from "#assets/icon/FaceWomenLong.svg"
import FaceWomenRound from "#assets/icon/FaceWomenRound.svg"

import { createElement, FC, useMemo } from "react"

//* Types
import { IParams, IQuiz } from "../types"
import Quiz from "#components/Screen/Quiz"
import QuizLike from "#components/Screen/QuizLike"
import QuizSides from "#components/Screen/QuizSides"

//* Face list
const faceList: Record<number, Record<string, string>> = {
  4: {
    long: FaceMenLong,
    round: FaceMenRound,
    between: FaceMenBetween,
  },
  5: {
    long: FaceWomenLong,
    round: FaceWomenRound,
    between: FaceWomenBetween,
  },
  0: {
    long: FaceBothLong,
    round: FaceBothRound,
    between: FaceBothBetween,
  },
}

//* Screens components
const screensComponents: Record<string, FC<IQuiz>> = {
  sides: QuizSides,
  quiz: Quiz,
  like: QuizLike,
}

//& Screens Hook
////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const useScreens = (
  curParams: IParams,
  curScreen: [number, number],
  handleSwitchScreen: (
    [screen, subScreen]: number[],
    param: Partial<IParams> | null,
  ) => void,
  handleSend: () => void,
) => {
  const screens: IQuiz[][] = useMemo(
    () => [
      //? 0 Quiz
      [
        {
          type: "sides",
          image: {
            src: First,
            alt: "welcome",
            width: 1248,
            height: 612,
          },
          title: "Let’s find your perfect pair!",
          subTitle:
            "Take the quiz to easily discover your perfect fit from thousands of styles",
          action: {
            text: "Start now",
            callback: () => handleSwitchScreen([1, 0], null),
          },
        } as IQuiz,
      ],
      //? 1 Quiz
      [
        {
          type: "quiz",
          title: "You are looking for",
          itemType: "column",
          item: [
            {
              image: {
                src: Women,
                width: 48,
                height: 50,
                alt: "women",
              },
              text: "Women's styles",
              callback: () => handleSwitchScreen([2, 0], { gender: 5 }),
            },
            {
              image: {
                src: Men,
                width: 48,
                height: 50,
                alt: "men",
              },
              text: "Men's styles",
              callback: () => handleSwitchScreen([2, 0], { gender: 4 }),
            },
          ],
          action: {
            text: "I'd like to see both",
            callback: () => handleSwitchScreen([2, 0], null),
          },
        } as IQuiz,
      ],
      //? 2 Quiz
      [
        {
          type: "quiz",
          title: "What type of glasses are you looking for?",
          itemType: "column",
          item: [
            {
              image: {
                src: curParams?.gender === 4 ? EyeglassesMen : EyeglassesWomen,
                width: 150,
                height: 50,
                alt:
                  curParams?.gender === 4 ? "EyeglassesMen" : "EyeglassesWomen",
              },
              text: "Eyeglasses",
              callback: () => handleSwitchScreen([2, 1], { eyewear_type: 210 }),
            },
            {
              image: {
                src: curParams?.gender === 4 ? SunglassesMen : SunglassesWomen,
                width: 150,
                height: 50,
                alt:
                  curParams?.gender === 4 ? "SunglassesMen" : "SunglassesWomen",
              },
              text: "Sunglasses",
              callback: () => handleSwitchScreen([2, 1], { eyewear_type: 211 }),
            },
          ],
          action: {
            text: "I want to see both",
            callback: () => handleSwitchScreen([3, 1], null),
          },
        } as IQuiz,
        {
          type: "like",
          timeout: 2000,
          image: {
            src: Like,
            alt: "like",
            width: 340,
            height: 340,
          },
          title: "Let's get to know you!",
          action: {
            callback: () => handleSwitchScreen([3, 0], null),
          },
        } as IQuiz,
      ],
      //? 3 Quiz
      [
        {
          type: "quiz",
          title: "Do you need vision correction?",
          itemType: "column",
          item: [
            {
              text: "Yes",
              callback: () => handleSwitchScreen([3, 1], null),
            },
            {
              text: "No",
              callback: () => handleSwitchScreen([4, 0], null),
            },
          ],
          action: {
            text: "Skip",
            callback: () => handleSwitchScreen([4, 0], null),
          },
        } as IQuiz,
        {
          type: "quiz",
          title: "What do you need your glasses for?",
          itemType: "inline",
          item: [
            {
              text: "Near Vision",
              callback: () => handleSwitchScreen([4, 0], { lenstype: 6 }),
            },
            {
              text: "Distance Vision",
              callback: () => handleSwitchScreen([4, 0], { lenstype: 6 }),
            },
            {
              text: "Multifocal / Progressive",
              callback: () => handleSwitchScreen([4, 0], { lenstype: 7 }),
            },
          ],
          action: {
            text: "Skip",
            callback: () => handleSwitchScreen([4, 0], null),
          },
        } as IQuiz,
      ],
      //? 4 Quiz
      [
        {
          type: "quiz",
          title: "What's your current frame size?",
          image: {
            src: Sizes,
            alt: "sizes",
            width: 636,
            height: 236,
          },
          itemType: "inline",
          item: [
            {
              text: "Small",
              additionalText: "42-48 mm",
              callback: () => handleSwitchScreen([5, 0], { frame_size: 68 }),
            },
            {
              text: "Medium",
              additionalText: "49-53 mm",
              callback: () => handleSwitchScreen([5, 0], { frame_size: 67 }),
            },
            {
              text: "Large",
              additionalText: "54-58 mm",
              callback: () => handleSwitchScreen([5, 0], { frame_size: 66 }),
            },
          ],
          action: {
            text: "I don't know",
            callback: () => handleSwitchScreen([4, 1], null),
          },
        } as IQuiz,
        {
          type: "like",
          image: {
            src: Like,
            alt: "like",
            width: 200,
            height: 200,
          },
          title: "No worries, we’ve got you!",
          timeout: 2000,
          action: {
            callback: () => handleSwitchScreen([4, 2], null),
          },
        } as IQuiz,
        {
          type: "quiz",
          title: "How wide would you say your face is?",
          itemType: "inline",
          item: [
            {
              text: "Wider than average",
              callback: () => handleSwitchScreen([5, 0], { frame_size: 66 }),
            },
            {
              text: "Average",
              callback: () => handleSwitchScreen([5, 0], { frame_size: 67 }),
            },
            {
              text: "Narrower than average",
              callback: () => handleSwitchScreen([5, 0], { frame_size: 68 }),
            },
          ],
          action: {
            text: "I'm not sure",
            callback: () => handleSwitchScreen([5, 0], null),
          },
        } as IQuiz,
      ],
      //? 5 Quiz
      [
        curParams?.eyewear_type === 210
          ? ({
              type: "quiz",
              title:
                "Would you like to protect your eyes from light emanating from screens?",
              itemType: "column",
              item: [
                {
                  text: "Yes",
                  callback: () =>
                    handleSwitchScreen([6, 0], { blue_light: true }),
                },
                {
                  text: "No",
                  callback: () =>
                    handleSwitchScreen([6, 0], { blue_light: false }),
                },
              ],
            } as IQuiz)
          : ({
              type: "quiz",
              title:
                "Would you like to protect your eyes from light emanating from screens?",
              itemType: "inline",
              item: [
                {
                  text: "Dark Shade",
                  image: {
                    src: DarkShade,
                    width: 52,
                    height: 43,
                    alt: "DarkShade",
                  },
                  callback: () => handleSwitchScreen([6, 0], { shade: "dark" }),
                },
                {
                  text: "Light Shade",
                  image: {
                    src: LightShade,
                    width: 52,
                    height: 43,
                    alt: "LightShade",
                  },
                  callback: () =>
                    handleSwitchScreen([6, 0], { shade: "light" }),
                },
                {
                  text: "Transitioning Shade",
                  image: {
                    src: Transition,
                    width: 52,
                    height: 43,
                    alt: "Transition",
                  },
                  callback: () =>
                    handleSwitchScreen([6, 0], { shade: "transition" }),
                },
              ],
            } as IQuiz),
      ],
      //? 6 Quiz
      [
        {
          type: "quiz",
          title: "Every face shape has a perfect fit. What's yours?",
          itemType: "inline",
          item: [
            {
              text: "I have a long face",
              image: {
                src: faceList[curParams?.gender || 0]["long"],
                width: 48,
                height: 53,
                alt: "long",
              },
              callback: () =>
                handleSwitchScreen([7, 0], { face_shape: "long" }),
            },
            {
              text: "I have a round face",
              image: {
                src: faceList[curParams?.gender || 0]["round"],
                width: 48,
                height: 53,
                alt: "round",
              },
              callback: () =>
                handleSwitchScreen([7, 0], { face_shape: "round" }),
            },
            {
              text: "In between",
              image: {
                src: faceList[curParams?.gender || 0]["between"],
                width: 48,
                height: 53,
                alt: "between",
              },
              callback: () =>
                handleSwitchScreen([7, 0], { face_shape: "between" }),
            },
          ],
          action: {
            text: "I don't know",
            callback: () => handleSwitchScreen([7, 0], null),
          },
        } as IQuiz,
      ],
      //? 7 Quiz
      [
        {
          type: "quiz",
          title: "How would you define your facial features?",
          itemType: "inline",
          item: [
            {
              text: "Sharp",
              callback: () =>
                handleSwitchScreen([8, 0], { facial_features: "sharp" }),
            },
            {
              text: "Rounded",
              callback: () =>
                handleSwitchScreen([8, 0], { facial_features: "rounded" }),
            },
            {
              text: "In between",
              callback: () =>
                handleSwitchScreen([8, 0], { facial_features: "between" }),
            },
          ],
          action: {
            text: "I don't know",
            callback: () => handleSwitchScreen([8, 0], null),
          },
        } as IQuiz,
      ],
      //? 8 Quiz
      [
        {
          type: "quiz",
          title: "Which frame style are you looking for?",
          subTitle: "You can pick more than one.",
          itemType: "selectable",
          item: [
            {
              text: "Aviator",
              param: "aviator",
              image: {
                src: Aviator,
                width: 124,
                height: 62,
                alt: "Aviator",
              },
            },
            {
              text: "Browline",
              param: "browline",
              image: {
                src: Browline,
                width: 124,
                height: 62,
                alt: "Browline",
              },
            },
            {
              text: "CatEye",
              param: "cat_eye",
              image: {
                src: CatEye,
                width: 124,
                height: 62,
                alt: "CatEye",
              },
            },
            {
              text: "Geometric",
              param: "geometric",
              image: {
                src: Geometric,
                width: 124,
                height: 62,
                alt: "Geometric",
              },
            },
            {
              text: "Oval",
              param: "oval",
              image: {
                src: Oval,
                width: 124,
                height: 62,
                alt: "Oval",
              },
            },
            {
              text: "Oversized",
              param: "oversized",
              image: {
                src: Oversized,
                width: 124,
                height: 62,
                alt: "Oversized",
              },
            },
            {
              text: "Rectangle",
              param: "rectangle",
              image: {
                src: Rectangle,
                width: 124,
                height: 62,
                alt: "Rectangle",
              },
            },
            {
              text: "Rimless",
              param: "rimless",
              image: {
                src: Rimless,
                width: 124,
                height: 62,
                alt: "Rimless",
              },
            },
            {
              text: "Round",
              param: "round",
              image: {
                src: Round,
                width: 124,
                height: 62,
                alt: "Round",
              },
            },
            {
              text: "Square",
              param: "square",
              image: {
                src: Square,
                width: 124,
                height: 62,
                alt: "Square",
              },
            },
          ],
          subAction: {
            text: "Continue",
            callback: (param) => handleSwitchScreen([9, 0], { shape: param }),
          },
        } as IQuiz,
      ],
      //? 9 Quiz
      [
        {
          type: "quiz",
          title: "Are you looking for any particular eyewear brands?",
          itemType: "column",
          item: [
            {
              text: "Yes, I have some in mind",
              callback: () => handleSwitchScreen([10, 0], null),
            },
            {
              text: "No, brand isn't important",
              callback: () => handleSwitchScreen([11, 0], null),
            },
          ],
        } as IQuiz,
      ],
      //? 10 Quiz
      [
        {
          type: "quiz",
          title: "Choose your favorite brands",
          subTitle: "You can pick more than one.",
          itemType: "selectable",
          item: [
            {
              param: "armani_exchange",
              image: {
                src: ArmaniExchange,
                width: 124,
                height: 92,
                alt: "ArmaniExchange",
              },
            },
            {
              param: "burberry",
              image: {
                src: Burberry,
                width: 124,
                height: 92,
                alt: "Burberry",
              },
            },
            {
              param: "coach",
              image: {
                src: Coach,
                width: 124,
                height: 92,
                alt: "Coach",
              },
            },
            {
              param: "gucci",
              image: {
                src: Gucci,
                width: 124,
                height: 92,
                alt: "Gucci",
              },
            },
            {
              param: "hilary_duff",
              image: {
                src: HilaryDuff,
                width: 124,
                height: 92,
                alt: "HilaryDuff",
              },
            },
            {
              param: "michael_kors",
              image: {
                src: MichaelKors,
                width: 124,
                height: 92,
                alt: "MichaelKors",
              },
            },
            {
              param: "oakley",
              image: {
                src: Oakley,
                width: 124,
                height: 92,
                alt: "Oakley",
              },
            },
            {
              param: "prada",
              image: {
                src: Prada,
                width: 124,
                height: 92,
                alt: "Prada",
              },
            },
            {
              param: "ray_ban",
              image: {
                src: RayBan,
                width: 124,
                height: 92,
                alt: "RayBan",
              },
            },
            {
              param: "tory_burch",
              image: {
                src: ToryBurch,
                width: 124,
                height: 92,
                alt: "ToryBurch",
              },
            },
            {
              param: "versace",
              image: {
                src: Versace,
                width: 124,
                height: 92,
                alt: "Versace",
              },
            },
            {
              param: "vogue",
              image: {
                src: Vogue,
                width: 124,
                height: 92,
                alt: "Vogue",
              },
            },
          ],
          subAction: {
            text: "Continue",
            callback: (param) => handleSwitchScreen([11, 0], { brand: param }),
          },
        } as IQuiz,
      ],
      //? 11 Quiz
      [
        {
          type: "sides",
          image: {
            src: Last,
            alt: "last",
            width: 300,
            height: 300,
          },
          title: "We've found some awesome frames for you!",
          subTitle:
            "Send the results to your email to receive special discounts.",
          action: {
            text: "Send",
            callback: handleSend,
          },
          footer: {
            text: "By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails",
          },
        } as IQuiz,
      ],
    ],
    [
      curParams?.eyewear_type,
      curParams?.gender,
      handleSend,
      handleSwitchScreen,
    ],
  )

  const Screen = useMemo(() => {
    const quiz = screens[curScreen[0]][curScreen[1]]
    const screenQuiz = screensComponents[quiz.type]

    return createElement(screenQuiz, quiz)
  }, [curScreen, screens])

  return { Screen }
}
//& /////////////////////////////////////////////////////////////////////////////////////////////////// &//
