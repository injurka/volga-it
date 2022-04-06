import { describe, expect, it } from "vitest"
import { render, fireEvent, screen } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"
import { IQuiz } from "#/types"
import { useWidget } from "#/hooks/useWidget"
import Quiz from "../Quiz"

//* TEST ------------------------------------------------------------------------ *//

describe("Quiz page", () => {
  it("Quiz is correct rendered", () => {
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

    render(<Quiz {...props} />)

    const quiz = screen.getByRole("screen")

    expect(quiz).toBeTruthy()
    expect(screen.getByText("Test")).toBeTruthy()
    expect(screen.getByText("SubTest")).toBeTruthy()
  })

  it("Quiz corrected action button", () => {
    const { result } = renderHook(useWidget)
    const props: IQuiz = {
      title: "Test",
      type: "quiz",
      subTitle: "SubTest",
      itemType: "column",
      item: [],
      action: {
        text: "Action",
        callback: () =>
          result.current.handleSwitchScreen([2, 0], { gender: 5 }),
      },
      subAction: {
        text: "SubAction",
        callback: function (param: string): void {
          throw new Error(`Function not implemented. ${param}`)
        },
      },
    }

    render(<Quiz {...props} />)

    const button = screen.getByRole("button", { name: "Action" })

    expect(button).toBeTruthy()

    fireEvent.click(button)

    expect(result.current.curScreen[0]).toBe(2)
    expect(result.current.curParams.gender).toBe(5)
  })

  it("Quiz corrected sub action button", async () => {
    const { result } = renderHook(useWidget)
    const props: IQuiz = {
      title: "Test",
      type: "quiz",
      subTitle: "SubTest",
      itemType: "column",
      item: [
        {
          text: "Aviator",
          param: "aviator",
        },
        {
          text: "Browline",
          param: "browline",
        },
        {
          text: "CatEye",
          param: "cat_eye",
        },
      ],
      action: {
        text: "Action",
        callback: function (): void {
          throw new Error("Function not implemented.")
        },
      },
      subAction: {
        text: "SubAction",
        callback: (param) =>
          result.current.handleSwitchScreen([9, 0], { shape: param }),
      },
    }

    render(<Quiz {...props} />)

    const buttonBrowline = screen.getByRole("button", {
      name: "Browline",
    })
    expect(buttonBrowline).toBeTruthy()
    fireEvent.click(buttonBrowline)

    const buttonCatEye = screen.getByRole("button", { name: "CatEye" })
    expect(buttonCatEye).toBeTruthy()
    fireEvent.click(buttonCatEye)

    const buttonSubAction = screen.getByRole("button", {
      name: "SubAction",
    })
    expect(buttonSubAction).toBeTruthy()
    fireEvent.click(buttonSubAction)

    expect(result.current.curParams.shape).toBe("browline,cat_eye")
  })
})
