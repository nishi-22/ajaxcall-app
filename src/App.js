import React, { Component } from 'react';
import axios from 'axios';
import Posts from './components/posts';
import './App.css';


class App extends Component {
  state={
    posts:[]
  }


  componentDidMount(){

     axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response => {
             console.log(response);
             this.setState({
                 posts: response.data
             })
         })
  }

  render()
      {
          return (
              <Posts post={this.state.posts}></Posts>
          );
      }
}

export default App;