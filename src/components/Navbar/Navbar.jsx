import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Navbar.module.css'



export default class Navbar extends Component {

    state = {
        login:"",
        register:"",
        logout:""
    }
    token = localStorage.getItem("token");
    
    componentDidMount(){
        if ( this.token ) {
            this.setState({
                login:'',
                register:'',
                logout:<NavLink onClick={this.logout} className="nav-link" to="/">Logout</NavLink>
                
            })
        }else{
            this.setState({
                login:<NavLink className="nav-link" to="/register">register</NavLink>,
                register:<NavLink className="nav-link" to="/login">Login</NavLink>,
                logout:''
            })
        }
    }

    logout=()=>{
        localStorage.removeItem("token");
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <NavLink className="navbar-brand" to="/">Movies</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tv">TV Shows</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/people">People</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">About</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        </form>
                            <i className={Styles.icon+" fab fa-facebook"}></i>
                            <i className={Styles.icon+" fab fa-instagram"}></i>
                            <i className={Styles.icon+" fab fa-spotify"}></i>
                            <i className={Styles.icon+" fab fa-soundcloud"}></i>
                            <i className={Styles.icon+" fab fa-twitter"}></i>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {this.state.register}
                            </li>
                            <li className="nav-item">
                                {this.state.login}
                            </li>
                            <li className="nav-item">
                                {this.state.logout}
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </div>
        )
    }
}
