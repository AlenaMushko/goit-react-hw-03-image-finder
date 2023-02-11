// import PropTypes from 'prop-types';
import { Component } from 'react';

import { Searchbar } from './Searchbar';
import { fetchSearchImg } from './api';
import { ImageGallery } from './ImageGallery';
import { Container } from '../components/App.styled';
import { LoadMore } from './Button';

export class App extends Component {
  state = { searchValue: '', imgs: [], pageNumber: 1, status: 'idle' };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, pageNumber } = this.state;
    if (prevState.searchValue !== this.state.searchValue) {
      // this.setState({ status: "pending" });
      const imgs = await fetchSearchImg(searchValue, pageNumber);
      this.setState({ imgs: imgs });
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue: searchValue });
    this.setState({ pageNumber: 1 });
  };

  onLoadMoreClick = pageNumber => {
    this.setState({ pageNumber: pageNumber });
    console.log(this.state.pageNumber);
    console.log(this.state.searchValue);
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={this.state.imgs} />
        <LoadMore
          onClick={this.onLoadMoreClick}
        />
      </Container>
    );
  }
}
