import { Component } from 'react';
import { Button } from './Button.styled';
export class LoadMore extends Component {
  state = {isLoading: false, };

    render() {
    return (
      <div
        // onClick={onLoadMoreClick}
      >
        <Button type='button' >Load more</Button>
      </div>
    )
  }   
};

// LoadMore.propTypes = {
//   onLoadMoreClick: PropTypes.func.isRequired,
// };
