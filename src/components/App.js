// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';

import { Searchbar } from './Searchbar';
import { fetchSearchImg } from './api';
import { ImageGallery } from './ImageGallery';
import { Container } from '../components/App.styled';
import { LoadMore } from './Button';

export class App extends Component {
  state = {
    searchValue: '',
    imgs: [],
    pageNumber: 1,
    isError: 'idle',
    isLoading: false,
    imgsOnPage:0,
  };

  async componentDidUpdate(_, prevState) {
    const { searchValue, pageNumber } = this.state;
    try {
      if (prevState.searchValue !== this.state.searchValue) {
        this.setState({ isLoading: true });
        const imgs = await fetchSearchImg(searchValue, pageNumber);
        this.setState({ imgs: imgs });
        this.setState({ isLoading: false });
        this.setState({ imgsOnPage: imgs.length });
      }
    } catch (error) {
      this.setState({ isError: true, isLoading: false });
      console.log(error);
    }
    try {
      if (prevState.pageNumber !== this.state.pageNumber) {
        this.setState({ isLoading: true });
        const imgs = await fetchSearchImg(searchValue, pageNumber);
        this.setState(state => ({ imgs: [...state.imgs, ...imgs] }));
        this.setState({ isLoading: false });
          this.setState({ imgsOnPage: imgs.length });
      }
    } catch (error) {
      this.setState({ isError: true, isLoading: false });
      console.log(error);
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue: searchValue });
    this.setState({ pageNumber: 1 });
  };

  onLoadMoreClick = async () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  render() {
    const { imgs, isLoading, imgsOnPage } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <ColorRing />}
        {imgs.length > 1 && <ImageGallery items={this.state.imgs} />}
        {imgsOnPage >= 12 && <LoadMore onClick={this.onLoadMoreClick} />}
      </Container>
    );
  }
}
