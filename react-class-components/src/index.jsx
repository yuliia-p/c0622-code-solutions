import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  render() {
    return <button style={{
      fontSize: this.props.fontSize,
      color: this.props.color,
      backgroundColor: this.props.backgroundColor,
      width: this.props.width,
      height: this.props.height,
      margin: this.props.margin,
      borderRadius: this.props.borderRadius
    }}>
      {this.props.text}</button>;
  }
}

const element = (
  <div>
    <CustomButton
      text="I"
      color="white"
      backgroundColor='cadetblue'
      width='100px'
      height='100px'
      margin='30px'
      borderRadius='50%'
      fontSize='1.5rem'/>
    <CustomButton
      text="I"
      color="white"
      backgroundColor='cadetblue'
      width='100px'
      height='100px'
      margin='30px'
      borderRadius='50%'
      fontSize='1.5rem' />
    <CustomButton
      text="I"
      color="white"
      backgroundColor='cadetblue'
      width='100px'
      height='100px'
      margin='30px'
      borderRadius='50%'
      fontSize='1.5rem' />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
