import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    return <header>
    <img src={props.img}/>
    <span className="welcome">{props.title}</span>
  </header>
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string
}

export default Header;