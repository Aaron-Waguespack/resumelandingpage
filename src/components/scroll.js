import React, { Component } from 'react';
import './projects.css';


class Index extends Component {
  state = {
    opacity: '1'
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
          this.setState({ opacity: "0" })
          // console.log(currentScrollPos)
        } else {
          this.setState({ opacity: "1" })
        }
      }
    }
  }

  render() {
    return (
        <div className="your-class" style={{ opacity: `${this.state.opacity}`}} >
         {/* additonal content */} Hello World
        </div>
    )
  }
}


export default Index;