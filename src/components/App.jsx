// import PropTypes from 'prop-types';
import { Component } from "react";

import { Searchbar } from "./Searchbar";

export class App extends Component {
  state = { searchValue: '', }
  
  handleFormSubmit = searchValue => {
    this.setState({ searchValue: searchValue });
      console.log(this.setState({ searchValue: searchValue }));
  }

  render() {
    return (
    <div>
        <Searchbar onSubmit={ this.handleFormSubmit} />
    </div>
  );
  }
  
};
