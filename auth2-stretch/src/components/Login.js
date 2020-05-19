import React from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {Link} from "react-router-dom"

class Login extends React.Component{
    state = {
        credentials: {
            username: "",
            password: ""
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

    login = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/users/login', this.state.credentials)
            .then(res => {
                console.log({res})
                // localStorage.setItem('token', JSON.stringify(res.data.token))
                // this.props.history.push('/users')
            })
            .catch(err => {
                console.log({err})
            })
    }

    render(){
        return(
            <>
            <form onSubmit={this.login}>
                <h2>Welcome Back!</h2>
                <p>Login to your account</p>
                <div>
                    <label htmlFor="username">Username:
                        <input 
                        id="username" 
                        type="password"
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                    /></label><br />
                    <label htmlFor="password">Password:
                        <input 
                        id="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    /></label><br />
                    <button>Login</button>
                    <p>Dont have an Account? <Link to='/'>Sign up!</Link></p>
                </div>
            </form>
            </>
        )
    }
}

export default Login