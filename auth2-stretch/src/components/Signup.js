import React from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {Link} from "react-router-dom"

class Signup extends React.Component{
    state = {
        credentials: {
            username: "",
            password: "",
            department: ""
        }
    }

    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    signup = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/users/register', this.state.credentials)
            .then(res => {
                console.log({res})
                // localStorage.setItem('token', JSON.stringify(res.data.token))
                // this.props.history.push('/login')
            })
            .catch(err => {
                console.log({err})
            })
    }

    render(){
        return(
            <>
            <form onSubmit={this.signup}>
                <h2>Let's get Started!</h2>
                <p>Create your account</p>
                <div>
                    <label htmlFor="username">Username: 
                        <input 
                        id="username" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                    /></label><br />
                    <label htmlFor="password">Password:
                        <input 
                        id="password" 
                        type="password"
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    /></label><br />
                     <label htmlFor="department">Department:
                        <input 
                        id="department" 
                        name="department" 
                        value={this.state.department} 
                        onChange={this.handleChange}
                    /></label> <br />
                    <button>Sign up!</button>
                    <p>Already have an Account? <Link to='/login'>Log in!</Link></p>
                </div>
            </form>
            </>
        )
    }
}

export default Signup