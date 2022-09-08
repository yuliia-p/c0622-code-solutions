import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      intervalId: null
    };
    this.clickOn = this.clickOn.bind(this);
    this.next = this.next.bind(this);
    this.prevImg = this.prevImg.bind(this);
  }

  next() {
    if (this.state.currentIndex === this.props.images.length - 1) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }

  prevImg() {
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: this.props.images.length - 1
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  }

  clickOn(e) {
    clearInterval(this.intervalId);
    if (e.target.dataset.right) {
      this.next();
    } else if (e.target.dataset.left) {
      this.prevImg();
    } else if (e.target.classList.contains('fa-circle')) { // i want to use data-icon
      const index = Number(e.target.dataset.icon);
      this.setState({ currentIndex: index });
    }
    this.intervalId = setInterval(this.next, 3000);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.next, 3000);
  }

  render() {
    const images = this.props.images;
    const imgEl = images.map((image, index) => {
      return (
      <img key={index} src={images[index].url} alt="pic" />
      );
    });
    const dotEl = images.map((i, index) => { // ???
      if (index === this.state.currentIndex) {
        return <i data-icon={index} onClick={e => this.clickOn(e)} key={index} className="fa-solid fa-circle"></i>;
      } else {
        return <i data-icon={index} onClick={e => this.clickOn(e)} key={index} className="fa-regular fa-circle"></i>;
      }
    });

    return (
      <div className="container">
        <div className="flex">
          <i data-left="left" onClick={e => this.clickOn(e)}
          className="fa-solid fa-chevron-left"></i>
          <div className="image-holder">
            {imgEl[this.state.currentIndex]}
          </div>
          <i data-right="right" onClick={e => this.clickOn(e)}
          className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="dot-holder">
          {dotEl}
        </div>
      </div>
    );
  }
}
