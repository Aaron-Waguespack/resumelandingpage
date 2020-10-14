
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Navbar2 from './components/cnavbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
        route: 'home',
        opacity: '1',
        backgroundColor: 'rgba(120,0,0,.3)',
        color: 'black'
      }
    this.handleClick = this.handleClick.bind(this)
    // this.handleScroll = this.handleScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }


  handleClick = (e, data) => {
    console.log(data)
    this.setState({route: data})
  }

   handleScroll() {
    console.log("scroll2", this.state.color, this.state.backgroundColor)
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        // console.log(maxScroll)
        if (currentScrollPos > 0) {
          this.setState({ backgroundColor: "rgba(44, 25, 25)" },);
          this.setState({ color: "white" },)
          this.setState({ opacity: "0" })
          // console.log(currentScrollPos)
        } else {
          this.setState({ backgroundColor: "rgba(120,0,0,.3)" });
          this.setState({ color: "black" },)
          this.setState({ opacity: "1" })
        }
      }
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar2
            handleClick = {this.handleClick}
            handleScroll= {this.handleScroll}
            backgroundColor = {this.state.backgroundColor}
            color = {this.state.color}
           />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={()=>
            <Projects
            handleScroll= {this.handleScroll}
               opacity = {this.state.opacity}
            />
          }/>
        </div>
      </Router>
    );
  }
}

export default App;