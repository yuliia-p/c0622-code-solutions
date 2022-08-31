import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  const style = { color: props.color, backgroundColor: props.backgroundColor, width: props.width, height: props.height, marginTop: props.marginTop };
  return (
  <div>
      <button
        style={style} >
      {props.text}</button>
  </div>
  );
}
const element = (
  <div>
    <CustomButton text="Not" color="white" backgroundColor='darkorchid' width='100px' height='40px' marginTop='30px'/>
    <CustomButton text="so" color="white" backgroundColor='darkorchid' width='100px' height='40px' marginTop='30px'/>
    <CustomButton text="Pretty" color="white" backgroundColor='darkorchid' width='100px' height='40px' marginTop='30px'/>
    <CustomButton text="Buttons" color="white" backgroundColor='darkorchid' width='100px' height='40px' marginTop='30px'/>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
