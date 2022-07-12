import React from 'react'
import 

import { connect } from 'react-redux'

const TextField = (props) => {
    const {theme, field, form, type = 'default'} = props

    return (
        <div>TextField</div>
    )
}

const mapStateToProps = state => state.theme
const connectedTextField = connect(mapStateToProps)(TextField)
export { connectedTextField as TextField }
