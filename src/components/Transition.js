import React from "react"
import {
  Transition as ReactTransition,
  TransitionGroup,
} from "react-transition-group"

// The duration for each phase of the transition
// So the total duration will be _twice_ this
const timeout = 1000

const styles = {
  entering: {
    position: "absolute",
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms linear`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms linear`,
    opacity: 0,
  },
}

const Transition = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition key={location.pathname} timeout={timeout}>
      {status => <div style={styles[status]}>{children}</div>}
    </ReactTransition>
  </TransitionGroup>
)

export default Transition
