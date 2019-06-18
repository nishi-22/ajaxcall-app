import React, { Component } from 'react';
import axios from 'axios';
import Posts from './components/posts';
import './App.css';


class App extends Component {
    state = {
        posts: []
    };

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then( response => {
            this.setState({posts: response.data});
          }).catch(function (error) {
            console.warn(error);
          });
    }

  render() {
      return (
          this.state.posts.length && <Posts post={this.state.posts}></Posts>
        )
    }
}

export default App;