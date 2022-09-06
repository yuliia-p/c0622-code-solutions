import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenOn: null
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    if (e.target.dataset.name !== this.state.isOpenOn) {
      this.setState({ isOpenOn: e.target.dataset.name });
    } else {
      this.setState({ isOpenOn: null });
    }
  }

  render() {
    let classToHide;
    const listOfTopics = this.props.topics.map(oneTopic => {
      if (this.state.isOpenOn === oneTopic.name) {
        classToHide = '';
      } else {
        classToHide = 'hidden';
      }
      return (
        <li key={this.props.topics.indexOf(oneTopic)}>
          <h3 data-name={oneTopic.name}
          onClick={this.handleClick}>{oneTopic.name}</h3>
          <p className={classToHide}>{oneTopic.description}</p>
        </li >
      );
    });
    return (
      <div className='container'>
        <ul>{listOfTopics}</ul>
      </div>
    );
  }
}
