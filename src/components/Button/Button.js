import { Component } from 'react';
import { Button } from './Button.styled';
export class LoadMore extends Component {
  state = { isLoading: false };

  render() {
    const { onClick } = this.props;
    return (
      <div onClick={onClick}>
        <Button type="button">Load more</Button>
      </div>
    );
  }
}
