import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';
import _ from 'lodash';
import { Radio, Row, Col, Switch } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
  state = {
    minCount: 2,
    chartType: 'hexbin',
    displayToolTips: true,
  }

  onCountSliderChange = (value) => {
    this.setState({
      minCount: value,
    });
  }

  onChartTypeChange = (e) => {
     this.setState({ chartType: e.target.value });
   }

  onTooltipChange = (checked) => {
    this.setState({ displayToolTips: checked });
  }
  render() {
    return (
      <div className="data-view">
        <ShotChart
          minCount={this.state.minCount}
          playerId={this.props.playerId}
          chartType={this.state.chartType}
          displayToolTips={this.state.displayToolTips}
        />
        <div className="filters">
          {this.state.chartType === 'hexbin'?
             <CountSlider
               minCount={this.state.minCount}
               onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}
             /> : null
           }
           <Row className="chart-type-radio">
             <Col span={12} offset={3}>
               <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                 <Radio value="hexbin">Hexbin</Radio>
                 <Radio value="scatter">Scatter</Radio>
               </RadioGroup>
             </Col>
             <Col span={6}>
               Tooltip:{' '}
               <Switch
                 checkedChildren="On"
                 unCheckedChildren="Off"
                 defaultChecked
                 onChange={this.onTooltipChange}
               />
             </Col>
           </Row>
        </div>
      </div>
    );
  }
}