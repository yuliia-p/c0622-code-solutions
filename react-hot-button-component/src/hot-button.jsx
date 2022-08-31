import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementClick = this.incrementClick.bind(this);
  }

  incrementClick() {
    this.setState({ count: this.state.count + 1 });
    // console.log('this.state.count', this.state.count);

  }

  render() {
    if (this.state.count === 0) {
      return (
          <div>
            <button
              onClick={this.incrementClick}
            className="button">Hot Button</button>
          </div>
      );
    } else if (this.state.count <= 3) {
      return (
      <div>
        <button onClick={this.incrementClick}
            className="button three-clicks">Hot Button</button>
      </div>);
    } else if (this.state.count <= 6) {
      return (
        <div>
          <button onClick={this.incrementClick}
            className="button six-clicks">Hot Button</button>
        </div>);
    } else if (this.state.count <= 9) {
      return (
        <div>
          <button onClick={this.incrementClick}
            className="button nine-clicks">Hot Button</button>
        </div>);
    } else if (this.state.count <= 12) {
      return (
        <div>
          <button onClick={this.incrementClick}
            className="button twelve-clicks">Hot Button</button>
        </div>);
    } else if (this.state.count <= 15) {
      return (
        <div>
          <button onClick={this.incrementClick}
            className="button fifteen-clicks">Hot Button</button>
        </div>);
    } else if (this.state.count <= 18) {
      return (
        <div>
          <button onClick={this.incrementClick}
            className="button eighteen-clicks">Hot Button</button>
        </div>);
    }
    return (
      <div>
        <button onClick={this.incrementClick}
          className="button eighteen-clicks">Hot Button</button>
      </div>);
  }
}
