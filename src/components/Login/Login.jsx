import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios';
export default class Login extends Component {
    state={
        successMessage:"",
        errorMessage:""
    }
    user={
        email:"",
        password:""
    }

    getFormData=(e)=>{
        this.user[e.target.name] = e.target.value;
        console.log(this.user);
    }
    sendData= async (e)=>{
        e.preventDefault();
        console.log("done");
        let {data} = await axios.post("https://route-egypt-api.herokuapp.com/signin", this.user) ;
        console.log(data);
        
        if (data.message === "success") {
            e.target.reset()
            localStorage.setItem("token",data.token);
            this.setState({
                successMessage:data.message,
                errorMessage:""
            })
            this.props.history.replace("/home");
        }else{
            this.setState({
                successMessage:"",
                errorMessage:data.message
            })
        }
        
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <form onSubmit={this.sendData} className="mt-5 mx-auto w-75 d-flex flex-column align-items-center justify-content-center">
                        <input onChange={this.getFormData} className="form-control w-100 mt-4" name="email" type="email" placeholder="enter your email"/>
                        <input onChange={this.getFormData} className="form-control w-100 mt-4" name="password" type="password" placeholder="enter your password"/>
                        <div className="w-100 mt-2 text-center bg-success">{this.state.successMessage}</div>
                        <div className="w-100 mt-2 text-center bg-danger">{this.state.errorMessage}</div>
                        <button className="btn btn-info mt-3 w-50">Login</button>

                        <NavLink className="nav-link text-white" to="/register">you don't have acount ?</NavLink>
                    </form>
                </div>
            </div>
        )
    }
}
