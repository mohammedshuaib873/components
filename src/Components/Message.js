import React from 'react'
import { Component } from 'react/cjs/react.production.min';

class Message extends Component{
    constructor()
    {
        super();
        this.state = {
            message : "Welcome To My WebSite"
        }
    }

    changeMessage()
    {
        this.setState(
            {
                message : "Thank You For Subscribing"
            }
        )
    }

    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
