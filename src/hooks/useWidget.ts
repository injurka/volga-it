import { useCallback, useState } from "react"
import { useScreens } from "#hooks/useScreens"
import { IParams, IPrevScreen } from "#types/index"

//& Widget Hook
////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const useWidget = () => {
  const [prevScreen, setPrevScreen] = useState<IPrevScreen[]>([])
  const [curScreen, setCurScreen] = useState<[number, number]>([0, 0])
  const [curParams, setCurParams] = useState({} as IParams)

  const handleSwitchScreen = useCallback(
    ([screen, subScreen]: number[], param: Partial<IParams> | null) => {
      const key =
        param !== null ? (Object.keys(param)[0] as keyof IParams) : null
      if (key && param) setCurParams({ ...curParams, [key]: param[key] })
      if (Screen.props.type !== "like")
        setPrevScreen([...prevScreen, { screen: curScreen, params: curParams }])

      setCurScreen([screen, subScreen])
    },
    [curParams, curScreen, prevScreen],
  )

  const handlePrevScreen = useCallback(() => {
    const prev = prevScreen.pop()
    if (!prev?.screen) return
    setCurScreen(prev.screen)
    setCurParams(prev.params)
    setPrevScreen(prevScreen.slice(0, prevScreen.length))
  }, [prevScreen])

  const handleSend = useCallback((): string => {
    const domen = "https://example.com/?"
    const url = Object.keys(curParams).reduce(
      (p, x, i, a) =>
        (p +=
          x +
          "=" +
          curParams[x as keyof IParams] +
          (a.length - 1 !== i ? "&" : "")),
      "",
    )
    console.log(domen + url)
    return domen + url
  }, [curParams])

  const handleReset = () => {
    setPrevScreen([])
    setCurScreen([0, 0])
    setCurParams({} as IParams)
  }

  const { Screen } = useScreens(
    curParams,
    curScreen,
    handleSwitchScreen,
    handleSend,
  )

  return {
    prevScreen,
    curScreen,
    curParams,
    handleReset,
    handleSwitchScreen,
    handlePrevScreen,
    handleSend,
    Screen,
  }
}
