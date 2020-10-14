import React, { Component } from 'react';
import './projects.css';


class Index extends Component {
  constructor() {
    super();
    this.state = {
      }
  }

  render() {
    return (
        <div className="your-class" style={{ opacity: `${this.props.opacity}`}}
        onScroll = {this.props.handleScroll()}
        >
         Please note: Long initial project load time due to Heroku free hosting.
        </div>
    )
  }
}


export default Index;