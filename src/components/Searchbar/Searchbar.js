import React, { Comment, Component } from 'react';
// import PropTypes from 'prop-types';
export class Searchbar extends Component {
  state = { searchValue: '' };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchValue);
    console.log(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  handleNameChange = e => {
    this.setState({ searchValue: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            value={this.state.searchValue}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
