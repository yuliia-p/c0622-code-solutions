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
    if (e.target.dataset.icon === this.props.images) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    } else if (e.target.dataset.rigth) {
      this.next();
    } else if (e.target.dataset.left) {
      this.prevImg();
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.next, 3000);

  }

  render() {

    // const images = this.props.images;
    // use map method to link img and dots ?
    // return icon / img element???
    // images.map(id => { ???
    //   this.state.currentIndex === images.id;
    //   return (
    //  classNameIcon = 'fa-solid';
    //   <img src={image[id - 1]} alt="pic"></img>

    //   );

    // });

    return (
      <div className="container">
        <div className="flex">
          <i data-left="left" className="fa-solid fa-chevron-left"></i>
          <div className="image-holder">
            <img src='../images/001.png' alt="pic"></img>
          </div>
          <i data-right="right" className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="dot-holder">
          <i onClick={this.clickOn} data-icon="1" className="fa-solid fa-circle"></i>
          <i onClick={this.clickOn} data-icon="2" className="fa-regular fa-circle"></i>
          <i onClick={this.clickOn} data-icon="3" className="fa-regular fa-circle"></i>
          <i onClick={this.clickOn} data-icon="4" className="fa-regular fa-circle"></i>
          <i onClick={this.clickOn} data-icon="5" className="fa-regular fa-circle"></i>
        </div>
      </div>
    );
  }
}
