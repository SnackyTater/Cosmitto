import React from 'react'
import { connect } from 'react-redux'

import { INCREMENT, DECREMENT } from '../../../redux/action'

const HomePage = props => {
  const {counter, dispatch} = props

  const handleIncrease = () => dispatch({type: INCREMENT, action: {}})
  const handleDecrease = () => dispatch({type: DECREMENT, action: {}})

  return (
    <React.Fragment>
      {counter}
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>increase</button>
    </React.Fragment>
  )
}

const mapStateToProps = state => state.counter
const connectedPage = connect(mapStateToProps)(HomePage)
export { connectedPage as HomePage }