// const greeter = require("./Greeter.jsx");
// document.querySelector("#root").appendChild(greeter());


import React from 'react';
import ReactDom from 'react-dom';
import Greeter from './Greeter.jsx';


ReactDom.render(<Greeter />, document.getElementById('root'));
