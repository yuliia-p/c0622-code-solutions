import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    // console.log('this.props.images', this.props.images);
    this.state = {
      intervalId: null,
      currentIndex: 0
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
  // when currentIndex becomes 0, jump back to finish
  // clear interval
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
    const index = e.target.dataset.icon;
    // console.log('index', index);
    if (e.target.classList.contains('fa-circle')) { // i want to use id
      this.setState({ currentIndex: index }); // ?
      // console.log(this.state);
      // console.log('e.target', e.target);
    } else
    if (e.target.dataset.right) {
      this.next();
    } else if (e.target.dataset.left) {
      this.prevImg();
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
    const dotEl = images.map((i, index) => {
      // console.log('i', i);
      // console.log('index', index);
      if (index === this.state.currentIndex) {
        return <i data-icon={index} onClick={this.clickOn} key={index} className="fa-solid fa-circle"></i>;
      } else {
        return <i data-icon={index} onClick={this.clickOn} key={index} className="fa-regular fa-circle"></i>;
      }
    });

    return (

      <div className="container">
        <div className="flex">
          <i data-left="left" onClick={this.clickOn}
          className="fa-solid fa-chevron-left"></i>
          <div className="image-holder">
            {imgEl}
          </div>
          <i data-right="right" onClick={this.clickOn}
          className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="dot-holder">
          {dotEl}
        </div>
      </div>
    );
  }
}
