import "./Header.scss"

import { FC, Fragment } from "react"

//* Icons
import { ReactComponent as ArrowRight } from "#assets/icon/ArrowRight.svg"
import { ReactComponent as ArrowLeft } from "#assets/icon/ArrowLeft.svg"
import { ReactComponent as Exit } from "#assets/icon/Exit.svg"
import Logo from "#assets/image/Logo.png"

//* Types
import { HandleSwitchScreen } from "#types/index"

//* Component
import ProgressBar from "#/components/UI/ProgressBar/ProgressBar"

interface Props {
  handlePrevScreen: () => void
  handleSwitchScreen: HandleSwitchScreen
  handleReset: () => void
  curScreen: [number, number]
}

////////////////////////////////////////////////////////////////////////////////////////////////////
const Header: FC<Props> = (props) => {
  return (
    <header className="my-header">
      <div className="my-header-content">
        <nav className="my-header-nav">
          {props.curScreen[0] > 0 && props.curScreen[0] < 11 ? (
            <Fragment>
              <button
                className="my-header-nav__control"
                onClick={props.handlePrevScreen}>
                <ArrowLeft />
              </button>
              <span className="my-header-nav__progress">
                {props.curScreen[0] + " / " + 10}
              </span>
              <button
                className="my-header-nav__control"
                onClick={props.handleReset}>
                <Exit />
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <img className="my-header-nav__logo" src={Logo} alt="Logo" />
              {props.curScreen[0] === 11 ? (
                <button
                  className="my-header-nav__control"
                  onClick={props.handleReset}>
                  <Exit />
                </button>
              ) : (
                <button
                  className="my-header-nav__control"
                  onClick={() => props.handleSwitchScreen([1, 0], null)}>
                  <ArrowRight />
                </button>
              )}
            </Fragment>
          )}
        </nav>
      </div>
      <ProgressBar
        isShow={props.curScreen[0] > 0 && props.curScreen[0] < 11}
        current={props.curScreen[0]}
        max={11}
      />
    </header>
  )
}

export default Header
