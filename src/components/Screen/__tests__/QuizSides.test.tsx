import { describe, expect, it } from "vitest"
import { render, fireEvent, screen } from "@testing-library/react"
import { IQuiz } from "#/types"
import QuizSides from "../QuizSides"

//* TEST ------------------------------------------------------------------------ *//

describe("Quiz sides", () => {
  it("Quiz sides is correct rendered", () => {
    const props: IQuiz = {
      title: "Test",
      type: "quiz",
      subTitle: "SubTest",
      itemType: "column",
      item: [],
      action: {
        text: "Action",
        callback: function (): void {
          throw new Error("Function not implemented.")
        },
      },
      subAction: {
        text: "SubAction",
        callback: function (param: string): void {
          throw new Error(`Function not implemented. ${param}`)
        },
      },
    }

    render(<QuizSides {...props} />)

    const quiz = screen.getByRole("screen")

    expect(quiz).toBeTruthy()
    expect(screen.getByText("Action")).toBeTruthy()
    expect(screen.getByText("Test")).toBeTruthy()
    expect(screen.getByText("SubTest")).toBeTruthy()
  })

  it("Quiz action button", () => {
    let resultHandleCallback: string | null = null
    const handleCallback = () => (resultHandleCallback = "handleCallback")
    const props: IQuiz = {
      title: "Test",
      type: "quiz",
      subTitle: "SubTest",
      itemType: "column",
      item: [],
      action: {
        text: "Action",
        callback: handleCallback,
      },
      subAction: {
        text: "SubAction",
        callback: function (param: string): void {
          throw new Error(`Function not implemented. ${param}`)
        },
      },
    }

    render(<QuizSides {...props} />)

    const button = screen.getByRole("button", { name: "Action" })

    expect(button).toBeTruthy()

    fireEvent.click(button)

    expect(resultHandleCallback).toBeTruthy()
  })

  it("Quiz action button", () => {
    const props: IQuiz = {
      title: "Test",
      type: "quiz",
      subTitle: "SubTest",
      itemType: "column",
      item: [],
      action: {
        text: "Action",
        callback: function (): void {
          throw new Error("Function not implemented.")
        },
      },
      subAction: {
        text: "SubAction",
        callback: function (param: string): void {
          throw new Error(`Function not implemented. ${param}`)
        },
      },
      footer: {
        text: "footerText",
      },
    }

    render(<QuizSides {...props} />)

    expect(screen.getByText("footerText")).toBeTruthy()
  })
})
