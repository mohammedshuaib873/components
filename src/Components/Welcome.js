import React, { Component } from 'react' 

class Welcome extends Component{
    render() {
        const {name,heroName} = this.props
        const {children} = this.props
        return (
        <div>
            <h1>Hello Im {name} a.k.a {heroName}</h1>
            {children}
        </div> 
        )
    }
}

export default Welcome