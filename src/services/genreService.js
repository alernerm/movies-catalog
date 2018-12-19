import { Component } from 'react';
import http from './httpService';

class genreService extends Component {
  state = {
    genres: {}
  };

  /*async getGenres() {
    const { data: genres } = await http.get('http://localhost:3900/api/movies');

    console.log(genres);

    this.setState({ genres });
    return genres;
  }*/
}

export function getGenres() {
  return http.get('http://localhost:3900/api/movies');

  /*
    return new Promise((resolve, reject) => {
    http.get('http://localhost:3900/api/movies').then(result => {
      resolve(result.data);
    });
    });
    */
}
