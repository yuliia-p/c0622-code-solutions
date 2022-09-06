// import React from 'react';

// export default class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       intervalId: null,
//       imgIndex: 0
//     };
//     this.clickOn = this.clickOn.bind(this);
//     this.next = this.next.bind(this);

//   }

//   clickOn(e, imgIndex) {
//     if (e.target.dataset.icon === this.props.images) {
//       console.log('e.target.dataset.icon', e.target.dataset.icon);
//       this.setState({ imgIndex: imgIndex - 1 });
//     }
//     if (e.target.dataset.rigth) {
//       this.next();
//     }
//   }

//   next() {
//     if (this.state.imgIndex === this.props.images.length - 1) {
//       console.log('this.props.images.length', this.props.images.length);
//       console.log('this.props.images', this.props.images);
//       this.setState({ imgIndex: 0 });

//     }
//   }

//   render() {
//     const images = this.props.images.map(image => {
//       return <img key={image.id} src={`../images/${this.props.images.url}`}></img>;
//     });
//     if (images.id - 1 === this.state.imgIndex) {
//       return;
//     }
//     return (
//       <div className="container">
//         <div className="flex">
//           <i data-left="left" className="fa-solid fa-chevron-left"></i>
//           <div className="image-holder">
//             <img src='../images/001.png' alt="pic"></img>
//           </div>
//           <i data-right="right" className="fa-solid fa-chevron-right"></i>
//         </div>
//         <div className="dot-holder">
//           <i onClick={this.clickOn} data-icon="1" className="fa-solid fa-circle"></i>
//           <i onClick={this.clickOn} data-icon="2" className="fa-regular fa-circle"></i>
//           <i onClick={this.clickOn} data-icon="3" className="fa-regular fa-circle"></i>
//           <i onClick={this.clickOn} data-icon="4" className="fa-regular fa-circle"></i>
//           <i onClick={this.clickOn} data-icon="5" className="fa-regular fa-circle"></i>
//         </div>
//       </div>
//     );
//   }
// }
