import React from 'react'
const Header = (props) => (
  <header className="header">
    <h1 className="header__title">
      {props.channel.title}
    </h1>
    <p className="header__tagline">
      {props.channel.tagline}
    </p>
    <img src="public/img/banner.png" className="header__banner"/>
  </header>
)
export default Header
