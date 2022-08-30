import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return (
  <div>
      <button
      style={{
        color: 'white',
        backgroundColor: 'darkorchid',
        width: '100px',
        height: '40px',
        marginTop: '30px'
      }}> {props.text}</button >
  </div>
  );
}
const element = (
  <div>
    <CustomButton text="Not" color="red" />
    <CustomButton text="so" />
    <CustomButton text="Pretty" />
    <CustomButton text="Buttons" />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
