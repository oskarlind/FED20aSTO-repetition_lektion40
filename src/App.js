import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { fetchSMHI } from './API'
import Weather from './Weather'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      themeColor: "#ffffff"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetchSMHI(97400).then(res => this.setState({
      weather: res
    }))
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Router>
        <div className="App" style={{ backgroundColor: this.state.themeColor }}>
          <Header title="Welcome to React" img="cme_logo.png" />
          {this.state.weather && <Weather location={this.state.weather.station.name} temp={this.state.weather.value[0].value} />}
          <Route exact path="/">
            <main>Some content
            <div><Link to="/contact">Contact us</Link></div>
            </main>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Footer handleChange={this.handleChange} themeColor={this.state.themeColor} text="Address: Vasagatan 1, 12112 Stockholm" />
        </div>
      </Router>
    );
  }
}

export default App;
