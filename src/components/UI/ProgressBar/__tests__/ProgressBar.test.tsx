import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"
import ProgressBar from "#/components/UI/ProgressBar/ProgressBar"

//* TEST ------------------------------------------------------------------------ *//

describe("Header component", () => {
  it("Correct width", () => {
    const props = {
      current: 0,
      max: 10,
      isShow: true,
    }

    const { rerender, container } = render(<ProgressBar {...props} />)

    expect(
      window.getComputedStyle(
        container.getElementsByClassName("progress-bar__inner")[0],
      ).width,
    ).toBe("0%")

    rerender(<ProgressBar {...props} current={4} />)

    expect(
      window.getComputedStyle(
        container.getElementsByClassName("progress-bar__inner")[0],
      ).width,
    ).toBe("40%")

    rerender(<ProgressBar {...props} current={10} />)

    expect(
      window.getComputedStyle(
        container.getElementsByClassName("progress-bar__inner")[0],
      ).width,
    ).toBe("100%")

    expect(
      container.getElementsByClassName("progress-bar__inner isEnd").length,
    ).toBeTruthy()
  })

  it("Is showed", () => {
    const props = {
      current: 0,
      max: 10,
      isShow: true,
    }

    const { container } = render(<ProgressBar {...props} />)

    expect(container.getElementsByClassName("progress-bar isShow").length).toBe(
      1,
    )
  })

  it("Is hidden", () => {
    const props = {
      current: 0,
      max: 10,
      isShow: false,
    }

    const { container } = render(<ProgressBar {...props} />)

    expect(container.getElementsByClassName("progress-bar").length).toBeTruthy()
  })
})
