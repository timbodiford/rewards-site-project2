/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import ShopView from './ShopView';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import SingleUser from './SingleUser';
import Button from '@material-ui/core/Button';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Avatar from '@material-ui/core/Avatar';





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
            isAdmin: false,
            pointsBalance: '',
            userName: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        },
        currentUser: {
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
        isCreateFormDisplayed: false,

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
    // getUser() {
    //     axios.get(`/api/users/${this.props.match.params.userId}`)
    //         .then((res) => {
    //             this.setState({ user: res.data })
    //         })
    //     console.log(this.state.user)
    // }

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

        const copiedUser = { ...this.state.newUser }
        copiedUser[event.target.name] = event.target.value

        this.setState({ newUser: copiedUser })
    }

    handleSelectUser = (event) => {
        console.log(event.target.value)
        axios.get(`/api/users/${event.target.value}`)
            .then((res) => {
                this.setState({ currentUser: res.data })
                console.log(this.state.currentUser)
            })

    }




    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        // let SingleUserComponent = () => <SingleUser currentUser={this.state.users} />

        let usersList = this.state.users.map((user) => {
            return (
                <div>
                    <Link key={user._id} to={`/users/${user._id}`}> {`${user.firstName} ${user.lastName}`}</Link>
                    <p>{user.pointsBalance} Available Points</p>
                </div>
            )
        })

        let users = this.state.users.map((user) => {
            return (

                <option key={user._id} value={user._id}>{user.firstName} {user.lastName} {user.pointsBalance} points</option>

            )
        })
        return (

            this.state.isCreateFormDisplayed
                ?
                <div>
                    <form id="adduser" onSubmit={this.handleCreate}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.firstName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.lastName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.email}
                            margin="normal"
                            variant="outlined"
                        />

                        {/* <TextField
                            id="isAdmin"
                            label="Admin User?"
                            name="isAdmin"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.isAdmin}
                            margin="normal"
                            variant="outlined"
                        /> */}
                        <FormControl >
                            <InputLabel htmlFor="isAdmin" className="isadmin">Is Admin?</InputLabel>
                            <Select
                                value={this.state.newUser.isAdmin || false}
                                onChange={this.handleInputCreate}
                                inputProps={{
                                    name: 'isAdmin',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="pointsBalance"
                            label="Points Balance"
                            name="pointsBalance"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.pointsBalance}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="userName"
                            label="User Name"
                            name="userName"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.userName}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="address"
                            label="Address"
                            name="address"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.address}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="city"
                            label="City"
                            name="city"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.city}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="state"
                            label="State"
                            name="state"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.state}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="zip"
                            label="Zip Code"
                            name="zip"
                            onChange={this.handleInputCreate}
                            value={this.state.newUser.zip}
                            margin="normal"
                            variant="outlined"
                        />

                    </form>
                    <div className="form-buttons">
                        {/* <input type="button" value="Add User"
                        onClick="document.adduser.submit();"
                    /> */}
                        <Button type="submit" form="adduser">Add User</Button>
                        <Button onClick={this.handleToggleCreateForm}>Cancel</Button>
                    </div>
                </div>
                :
                <div>
                    <Button onClick={this.handleToggleCreateForm}>Add New User</Button>
                    {/* <button onClick={this.handleToggleCreateForm}>Add User</button> */}
                    <p>Welcome: {this.state.currentUser.firstName}!</p>
                    <p>You have {this.state.currentUser.pointsBalance} points.</p>
                    <h4>Select an existing user below</h4>


                    <form>
                        <select value={this.state.value} onChange={this.handleSelectUser}>
                            {users}
                        </select>
                        {/* <button onClick={this.currentUser}>View User</button> */}

                    </form>
                    <Button key={this.state.currentUser._id} to={`/users/${this.state.currentUser._id}`}>Edit User</Button>
                    {usersList}

                </div>
        )
    }
}