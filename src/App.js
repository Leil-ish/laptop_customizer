import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import SelectedSummary from './SelectedSummary'
import TechSpecs from './TechSpecs'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        "Processor": {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        "Display": {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {   
    return (
      <div className="App">
        <Header />
        <main>
          <TechSpecs
          features={this.props.features} 
          updateFeature={(index, item) => this.updateFeature(index, item)}
          selected={this.state.selected}
          />
          <SelectedSummary
          selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App; 