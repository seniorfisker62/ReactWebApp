import React from 'react';

const HelloWorld = () => {
  
  function sayHello() {
    global.task = "day";
    //alert('Hello, World!');
  }
  
  return (
    <button onClick={sayHello}>Døgn data</button>
  );
};

export default HelloWorld;