import React from 'react'

const Greet = (props) => {
      const {name,heroName} = props
      const{children} = props
      return (
        <div>
            <h1>Hello Im {name} a.k.a {heroName}</h1>
            {children}
        </div>
      )
}

export default Greet