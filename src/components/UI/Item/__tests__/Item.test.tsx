import { describe, expect, it } from "vitest"

import { render, fireEvent, screen } from "@testing-library/react"

import Item from "#components/UI/Item/Item"
import { QuizItemType } from "#/types"

//* TEST ------------------------------------------------------------------------ *//

describe("Item component", () => {
  it("Quiz item is corrected works", () => {
    let resultHandleCallback: string | null = null
    const handleCallback = () => (resultHandleCallback = "handleCallback")

    const props = {
      callback: handleCallback,
      type: "column" as QuizItemType,
      text: "text",
      image: {
        src: "",
        alt: "alt",
        width: 100,
        height: 200,
      },
      additionalText: "additionalText",
      isSelected: false,
    }

    render(<Item {...props} />)

    expect(screen.getByText("additionalText")).toBeTruthy()
    expect(screen.getByText("text")).toBeTruthy()

    const button = screen.getByRole("quiz-item")
    fireEvent.click(button)
    expect(resultHandleCallback).toBeTruthy()
  })

  it("Quiz item is corrected works in inline mode", () => {
    const props = {
      callback: function (): void {
        throw new Error("Function not implemented.")
      },
      type: "inline" as QuizItemType,
      text: "text",
      image: {
        src: "",
        alt: "alt",
        width: 100,
        height: 200,
      },
      additionalText: "additionalText",
      isSelected: false,
    }

    const { container } = render(<Item {...props} />)

    expect(container.getElementsByClassName("item__vhr").length).toBe(1)
  })
})
