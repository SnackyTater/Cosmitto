import React from 'react'
import { connect, useDispatch } from 'react-redux'

import { increment, decrement } from '../../../redux'
import { get } from '../../../api/api'
import { saveToken, getToken } from '../../../utils/auth'

const HomePage = props => {
  const dispatch = useDispatch()

  const {value} = props

  return (
    <React.Fragment>
      <p>{value}</p>
      <button
        onClick={() => dispatch(increment())}
      >increase</button>
      <button
        onClick={() => dispatch(decrement())}
      >decrease</button>
      <button
        onClick={() => get({url: '', config: {}})}
      >
        press
      </button>
      <button
        onClick={() => saveToken('aaaaa')}
      >cookie</button>
      <button
        onClick={() => console.log(getToken())}
      >
        cookie get
      </button>
    </React.Fragment>
  )
}

const mapStateToProps = state => state.counter
const connectedPage = connect(mapStateToProps)(HomePage)
export { connectedPage as HomePage }