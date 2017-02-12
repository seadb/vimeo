import React from 'react'
const Header = (props) => (
  <header className="header">
    <h1 className="header__title">
      {props.channel.title}
    </h1>
    <p>
      {props.channel.description}
    </p>
  </header>
)
export default Header
