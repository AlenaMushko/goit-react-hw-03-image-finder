import { Component } from 'react';

export class EndImg extends Component {
  render() {
    const { searchValue } = this.props;
    return (
      <p style={{ textAlign: 'center', color: 'blue', fontSize: '24px' }}>
        Images is end
      </p>
    );
  }
}
