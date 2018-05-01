import React, { Component } from 'react';
import Image from './Image';
import Profile from './Profile';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        person: {
          name: 'Edyta Wrobel',
          about: 'Developer living in London. An advocate of positive social change through the smart and responsible use of technology.',
        },
        image: 'https://pbs.twimg.com/profile_images/976980966085406726/xOgbPzAj_400x400.jpg',
        quote: {
          content: 'Be brave. Take risks. Nothing can substitute experience.',
          origin: 'Paulo Coelho'
        }
      }
  }

  render() {
    return (
      <div className="App">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
