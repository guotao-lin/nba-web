import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

export class DataViewContainer extends React.Component {
  state = {
    minCount: 2,
  }

  onCountSliderChange = (value) => {
    this.setState({
      minCount: value,
    });
  }

  render() {
    return (
      <div className="data-view">
        <ShotChart minCount={this.state.minCount} playerId={this.props.playerId}/>
        <div className="filters">
          <CountSlider
            onCountSliderChange={this.onCountSliderChange}/>
        </div>
      </div>
    );
  }
}