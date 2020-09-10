import PropTypes from 'prop-types'
import React from 'react'

const Weather = (props) => {
    return <section>
    The temperature in {props.location} is {props.temp} degrees celcius.
  </section>
}

Weather.propTypes = {
    location: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
}

export default Weather;