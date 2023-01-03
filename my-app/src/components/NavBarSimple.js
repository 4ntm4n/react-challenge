import React from "react";
import css from './css/NavBarSimple.module.css'
class NavBarSimple extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            message: "Hello, Guest",
            btnText: "Login"
        }
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "Hello, Guest" ? "Welcome back, User!" : "Hello, Guest",
                btnText: prevState.btnText === "Login" ? "Log out" : "Login",
            }
        })
    }

    render(){
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick() }>{this.state.btnText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple