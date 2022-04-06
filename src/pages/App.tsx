import "./App.scss"

import { SwitchTransition, CSSTransition } from "react-transition-group"
import { FC, Fragment } from "react"

//* Components
import Header from "#components/UI/Header/Header"

//* Custom hook
import { useWidget } from "#hooks/useWidget"

////////////////////////////////////////////////////////////////////////////////////////////////////
const App: FC = () => {
  const {
    curScreen,
    Screen,
    handleReset,
    handlePrevScreen,
    handleSwitchScreen,
  } = useWidget()

  return (
    <Fragment>
      <Header
        curScreen={curScreen}
        handleSwitchScreen={handleSwitchScreen}
        handlePrevScreen={handlePrevScreen}
        handleReset={handleReset}
      />
      <main role={"main"} className="main">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={Screen.props.title}
            timeout={250}
            classNames="main"
            unmountOnExit
            mountOnEnter>
            {Screen}
          </CSSTransition>
        </SwitchTransition>
      </main>
    </Fragment>
  )
}

export default App
