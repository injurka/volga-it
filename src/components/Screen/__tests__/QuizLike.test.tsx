import { describe, expect, it } from "vitest"
import { render, waitFor, screen } from "@testing-library/react"
import { IQuiz } from "#/types"
import QuizLike from "../QuizLike"

//* TEST ------------------------------------------------------------------------ *//

describe("Quiz like", () => {
  it("Quiz like is correct rendered", () => {
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

    render(<QuizLike {...props} />)

    const quiz = screen.getByRole("screen")

    expect(quiz).toBeTruthy()
    expect(screen.getByText("Test")).toBeTruthy()
  })

  it("Quiz like corrected action timeout", async () => {
    let resultHandleCallback: string | null = null
    const handleCallback = () => (resultHandleCallback = "handleCallback")

    const timeout = 1000

    const props: IQuiz = {
      title: "Test",
      type: "quiz",
      subTitle: "SubTest",
      itemType: "column",
      timeout,
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

    render(<QuizLike {...props} />)

    await waitFor(() => expect(resultHandleCallback).toBeTruthy(), {
      timeout: timeout * 2,
    })

    expect(screen.getByText("Test")).toBeTruthy()
  })
})
