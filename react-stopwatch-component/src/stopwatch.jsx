import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isTicking: false, // state ?
      intervalID: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  handleClick() {
    this.setState({ isTicking: !this.state.isTicking });
    if (this.state.isTicking) {
      this.stopWatch();
    } else {
      this.startWatch();
    }
  }

  startWatch() {
    this.intervalID = setInterval(
      () => this.setState({ time: this.state.time + 1 }), 1000);
  }

  stopWatch() {
    clearInterval(this.intervalID);
  }

  resetClick() {
    if (!this.state.isTicking) {
      this.setState({ time: 0 });
    }
  }

  render() {
    const iconClassName = this.state.isTicking ? 'fa-pause' : 'fa-play';
    return (
      <div className='text-align'>
        <div>
          <button onClick={this.resetClick}
                  className='stopwatch'>
            <span>{this.state.time}</span>
          </button>
        </div>
          <div className="text-align">
          <i onClick={this.handleClick} className={`play-button fa-solid  ${iconClassName}`}></i>
        </div>
      </div>
    );
  }
}
