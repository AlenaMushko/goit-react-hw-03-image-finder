import { Component } from 'react';
import { Button } from './Button.styled';
export class LoadMore extends Component {
  state = { pageNumber: 1 };

  loadMore = () => {
    console.log('loadMore', this.state.pageNumber);
    
    this.setState(prevState => ({pageNumber: prevState.pageNumber +1}))
  }

  onClickButton = () => {
    this.props.onClick(this.state.pageNumber);
     console.log(this.state.pageNumber);
  }

  render() {
    return (
      <div onClick={this.onClickButton}>
        <Button type='button' onClick={this.loadMore}>Load more</Button>
      </div>
    )
  }   
};

// LoadMore.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
