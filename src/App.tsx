import { Component } from "react";
import HeartViewer from './components/heart-viewer.component'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <HeartViewer/>
      </div>
    );
  }
}

export default App;
