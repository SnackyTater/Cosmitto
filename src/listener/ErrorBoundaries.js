import React, {Component} from "react"
import {Error} from "~pages/error"

export class ErrorBoundaries extends Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }

    render() {
        if (this.state.hasError) return <Error />
        return this.props.children
    }
}
