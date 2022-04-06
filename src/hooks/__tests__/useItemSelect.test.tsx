import { describe, expect, it } from "vitest"

// import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { act, renderHook } from "@testing-library/react-hooks"

import { useItemSelect } from "#hooks/useItemSelect"

//* TEST ------------------------------------------------------------------------ *//

describe("useItemSelect hook", () => {
  it("Corrected works", () => {
    const { result } = renderHook(({ init }) => useItemSelect<string>(init), {
      initialProps: { init: [] as string[] },
    })

    const handleAdd = (callback: (e: unknown) => void) => callback(null)

    act(() => {
      handleAdd(result.current.handleSelected("a"))
    })

    act(() => {
      handleAdd(result.current.handleSelected("b"))
    })

    expect(result.current.itemSelected.length).toBe(2)

    // rerender({ init: ["b"] })

    act(() => {
      handleAdd(result.current.handleSelected("b"))
    })

    expect(result.current.itemSelected.length).toBe(1)
  })
})
