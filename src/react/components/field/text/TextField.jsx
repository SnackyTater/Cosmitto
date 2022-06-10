import React from 'react'
import { connect } from 'react-redux'

const TextField = (props) => {
    const {theme, field, form} = props
    return (
        <div>TextField</div>
    )
}

const mapStateToProps = state => state.theme
const connectedTextField = connect(mapStateToProps)(TextField)
export { connectedTextField as TextField }
