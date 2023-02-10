// import PropTypes from 'prop-types';
import { Component } from 'react';

import { Searchbar } from './Searchbar';
import { fetchSearchImg } from './api';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = { searchValue: '', imgs: [], pageNumber: 1 };

  async componentDidUpdate(prevProps, prevState) {
    const imgs = await fetchSearchImg(
      this.state.searchValue,
      this.state.pageNumber
    );
    this.setState({ imgs: imgs });
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue: searchValue });
    console.log(this.state.searchValue);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={this.state.imgs} />
      </div>
    );
  }
}
