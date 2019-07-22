import React, { Component } from 'react'
import axios from 'axios'


state = {
    user: {}
}

componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.userId}`)
        .then((res) => {
            this.setState({ user: res.data })
        })
}

export default class SingleUser extends Component {
    render() {
        return (
            <div>
                <p>Individual User should show here:</p>
                <h5>${this.state.user.firstName} ${this.state.user.lastName}</h5>
            </div>
        )
    }
}
