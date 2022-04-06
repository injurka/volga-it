import { describe, expect, it } from "vitest"

// import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { act, renderHook } from "@testing-library/react-hooks"

import { useWidget } from "#hooks/useWidget"

//* TEST ------------------------------------------------------------------------ *//

describe("useWidget hook", () => {
  it("Handle prev screen", () => {
    const { result } = renderHook(() => useWidget())

    act(() => {
      result.current.handleSwitchScreen([1, 0], null)
    })

    expect(
      result.current.prevScreen[result.current.prevScreen.length - 1].screen[0],
    ).toBe(0)

    act(() => {
      result.current.handleSwitchScreen([3, 1], { gender: 5 })
    })

    expect(
      result.current.prevScreen[result.current.prevScreen.length - 1].screen[0],
    ).toBe(1)

    act(() => {
      result.current.handlePrevScreen()
    })

    expect(
      result.current.prevScreen[result.current.prevScreen.length - 1].screen[0],
    ).toBe(0)

    expect(result.current.curScreen[0]).toBe(1)
  })

  it("Handle send", () => {
    const { result } = renderHook(() => useWidget())

    act(() => {
      result.current.handleSwitchScreen([2, 0], { gender: 5 })
    })
    act(() => {
      result.current.handleSwitchScreen([2, 1], { eyewear_type: 210 })
    })

    expect(result.current.curParams.gender).toBe(5)
    expect(result.current.curParams.eyewear_type).toBe(210)
    expect(result.current.handleSend()).toBe(
      "https://example.com/?gender=5&eyewear_type=210",
    )
  })

  it("Handle reset", () => {
    const { result } = renderHook(() => useWidget())

    act(() => {
      result.current.handleSwitchScreen([2, 0], { gender: 5 })
    })

    expect(result.current.curParams.gender).toBe(5)
    expect(result.current.curScreen[0]).toBe(2)

    act(() => {
      result.current.handleReset()
    })

    expect(result.current.curParams?.gender).toBeFalsy()
    expect(result.current.curScreen[0]).toBe(0)
  })
})
