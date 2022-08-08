import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error, errorInfo);
        this.setState({ error, errorInfo })
    }

    render() {
        if (this.state.error || this.state.errorInfo) {
            return (
                <div>ErrorBoundaries</div>
            )
        }

        return this.props.children;
    }
}
