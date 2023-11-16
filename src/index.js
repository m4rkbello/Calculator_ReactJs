import React from "react";
import { render } from "react-dom"; // Fix: Import the render method from react-dom
import App from "./App"; // Assuming App is your main component

render(<App />, document.getElementById('root'));
