import React, { PureComponent } from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'

export function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

// class ScrollToTop extends PureComponent {
//   componentDidMount = () => window.scrollTo(0, 0)
//   componentDidUpdate = prevProps => {
//     if (this.props.location !== prevProps.location) window.scrollTo(0, 0)
//   }
//   render = () => this.props.children
// }

// export default withRouter(ScrollToTop)
