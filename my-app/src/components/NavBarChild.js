import React, { Component } from 'react'

export class NavBarChild extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false,
        }
    }

    toggleLogIn = () => {
        this.setState((prevState) => ({
            loggedIn: !prevState.loggedIn
        }));
    }

    render() {
        return (
            <div>
                {this.state.loggedIn ? (
                    <form>
                        <label for="username" >Username</label>
                        <input id="username" type="text" />
                        <label for="password">Password</label>
                        <input id="password" type="password" />
                        <input onClick={() => this.toggleLogIn()} type="submit" />
                    </form>
                ) : (
                    <button onClick={() => this.toggleLogIn()}>Log in</button>
                )}
            </div>
        )
    }
}

export default NavBarChild