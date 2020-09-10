import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
    return <footer>
        <div>{props.text}</div>
        <label htmlFor="themeColor">Theme color: </label>
        <input type="color" name="themeColor" onChange={props.handleChange} value={props.themeColor}></input>
    </footer>
}

Footer.propTypes = {
    text: PropTypes.string,
    themeColor: PropTypes.string,
    handleChange: PropTypes.func,
}

export default Footer;