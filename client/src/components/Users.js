/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class users extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        users: [],
        newUser: {
            firstName: '',
            lastName: '',
            email: '',
            isAdmin: '',
            pointsBalance: '',
            userName: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        },
        isCreateFormDisplayed: false

    }


    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers() {
        axios.get('/api/users')
            .then((res) => {
                this.setState({ users: res.data })
            })
    }

    handleToggleCreateForm = () => {
        this.setState((state) => {
            return { isCreateFormDisplayed: !state.isCreateFormDisplayed }
        })

    }

    handleCreate = (event) => {
        event.preventDefault()

        axios.post('/api/users', this.state.newUser)
            .then((res) => {
                this.setState({ isCreateFormDisplayed: false })
                this.getAllUsers()
            })
    }

    handleInputCreate = (event) => {
        console.log(event.target.name)
        console.log(event.target.lastName)
        console.log(event.target.email)
        console.log(event.target.isAdmin)
        console.log(event.target.pointsBalance)
        console.log(event.target.userName)
        console.log(event.target.address)
        console.log(event.target.city)
        console.log(event.target.state)
        console.log(event.target.zip)
        const copiedUser = { ...this.state.newUser }
        copiedUser[event.target.name] = event.target.value

        this.setState({newUser: copiedUser })



    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        let usersList = this.state.users.map((user) => {
            return <Link key={user._id} to={`/users/${user._id}`}>{`${user.firstName} ${user.lastName}`}</Link>
        })
        return (

            this.state.isCreateFormDisplayed
                ?
                <div>
                    <form onSubmit={this.handleCreate}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.firstName}
                        />

                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.lastName}
                        />

                        <label htmlFor='email'>Email Address</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.email}
                        />

                        <label htmlFor='isAdmin'>Admin User?</label>
                        <input
                            type="text"
                            id="isAdmin"
                            name="isAdmin"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.isAdmin}
                        />

                        <label htmlFor='pointsBalance'>Points pointsBalance</label>
                        <input
                            type="text"
                            id="pointsBalance"
                            name="pointsBalance"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.pointsBalance}
                        />

                        <label htmlFor='userName'>User Name</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.userName}
                        />

                        <label htmlFor='address'>Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.address}
                        />

                        <label htmlFor='city'>City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.city}
                        />

                        <label htmlFor='state'>state</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.state}
                        />

                        <label htmlFor='zip'>Zip Code</label>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.zip}
                        />
                        <input type="submit" value="Add User" />

                    </form>
                    <p>I'll put a form here</p>
                    <button onClick={this.handleToggleCreateForm}>Cancel</button>
                </div>
                :
                <div>
                    {/* Accessing the value of message from the state object */}
                    <div>{usersList}</div>
                    Test

            <button onClick={this.handleToggleCreateForm}>Add User</button>

                </div>
        )
    }
}