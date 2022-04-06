import { describe, expect, it } from "vitest"

import { render, screen } from "@testing-library/react"
import Header from "#components/UI/Header/Header"
import { IParams } from "#/types"

//* TEST ------------------------------------------------------------------------ *//

describe("Header component", () => {
  it("Corrected switch mode side => quiz", () => {
    const props = {
      handlePrevScreen: (): void => {
        throw new Error("Function not implemented.")
      },
      handleSwitchScreen: (
        [screen, subScreen]: number[],
        param: Partial<IParams> | null,
      ): void => {
        throw new Error("Function not implemented.")
      },

      handleReset: (): void => {
        throw new Error("Function not implemented.")
      },
      curScreen: [0, 0] as [number, number],
    }

    const { rerender } = render(<Header {...props} />)

    expect(screen.getByAltText("Logo")).toBeTruthy()

    rerender(<Header {...props} curScreen={[1, 0]} />)

    expect(screen.getAllByText(1 + " / " + 10)).toBeTruthy()
  })
})
