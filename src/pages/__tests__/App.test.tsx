import { render, screen } from "@testing-library/react"
import { act, renderHook } from "@testing-library/react-hooks"
import { describe, expect, it } from "vitest"

import App from "../App"

import { useWidget } from "#hooks/useWidget"

//* TEST ------------------------------------------------------------------------ *//

describe("App page", () => {
  it("App is correct rendered", () => {
    render(<App />)

    const main = screen.getByRole("main")

    expect(main).toBeTruthy()
  })

  it("Correct render first screen", () => {
    render(<App />)

    const { result } = renderHook(useWidget)

    expect(screen.getByText(result.current.Screen.props.title)).toBeTruthy()
  })

  it("Corrected swapped screens", () => {
    render(<App />)

    const { result } = renderHook(useWidget)

    act(() => {
      result.current.handleSwitchScreen([0, 0], {})
    })

    expect(screen.getByText(result.current.Screen.props.title)).toBeTruthy()
  })
})
