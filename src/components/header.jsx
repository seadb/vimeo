import React from 'react'
const Header = (props) => (
  <header className="header">
    <h1 className="header__title">
      {props.channel.title}
    </h1>
    <p className="header__tagline">
      {props.channel.tagline}
    </p>
  </header>
)
export default Header
