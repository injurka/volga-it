import { describe, expect, it } from "vitest"

// import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { act, renderHook } from "@testing-library/react-hooks"

import { useScreens } from "#hooks/useScreens"
import { IParams } from "#/types"

//* TEST ------------------------------------------------------------------------ *//

describe("useScreens hook", () => {
  it("Check correct works", () => {
    let resultHandleSwitchScreen: string | null = null
    let resulthandleSend: string | null = null

    const handleSwitchScreen = (
      [screen, subScreen]: number[],
      param: Partial<IParams> | null,
    ) => (resultHandleSwitchScreen = "resultHandleSwitchScreen")

    const handleSend = () => (resulthandleSend = "handleSend")

    const { result, rerender } = renderHook(
      ({ screen }) =>
        useScreens({} as IParams, screen, handleSwitchScreen, handleSend),
      {
        initialProps: { screen: [0, 0] as [number, number] },
      },
    )

    act(() => {
      result.current.Screen.props.action.callback()
    })

    expect(resultHandleSwitchScreen).toBeTruthy()

    rerender({ screen: [11, 0] })

    act(() => {
      result.current.Screen.props.action.callback()
    })

    expect(resulthandleSend).toBeTruthy()
  })
})
