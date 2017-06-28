import React, { Component } from 'react';
import ImageWestSwimClub1 from './WestSwimClub1.jpg';
import ImageWestSwimClub2 from './WestSwimClub2.jpg';
import ImageWestSwimClub3 from './WestSwimClub3.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <div id="cont">
                <div id="navM">
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#swimt">SWIM TEAM</a></li>
                        <li><a href="#swiml">SWIM LESSONS</a></li>
                        <li><a href="#oop">HOURS OF OPERATION</a></li>
                        <li><a href="#au">ABOUT US</a></li>
                    </ul>
                </div>
            </div>
            <img src={ImageWestSwimClub1} style={{verticalAlign: 'middle-right'}} alt=" Swim Club 1" width={250} height={225} />
            <img src={ImageWestSwimClub2} style={{verticalAlign: 'middle-left'}} alt=" Swim Club 2" width={250} height={225} />
            <img src={ImageWestSwimClub3} style={{verticalAlign: 'middle-middle'}} alt=" Swim Club 3" width={250} height={225} />
        </div>

    );
  }
}

export default App;
