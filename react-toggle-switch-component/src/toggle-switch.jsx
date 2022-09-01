import React from 'react';

export default class ToogleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.switchOn) {
      this.setState({ switchOn: true });
    } else if (this.state.switchOn) {
      this.setState({ switchOn: false });
    }
  }

  render() {
    if (!this.state.switchOn) {
      return (
        <div onClick={this.handleClick}
          className="container">
          <div className='switch-div switch-div-off'></div>
          <div className='switch switch-off'></div>
        </div>
      );
    } else {
      return (
        <div onClick={this.handleClick}
          className="container">
           <div className='switch-div switch-div-on'></div>
        <div className='switch switch-on'></div>
        </div >
      );
    }
  }
}
