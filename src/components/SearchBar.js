import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  onSelect = (value) => {
    this.props.handleSelectPlayer(value);
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : nba.searchPlayers(value).map(player => ({
        playerId: player.playerId,
        fullName: player.fullName,
      })),
    });
  }

  render() {
    window.nba = nba;  // only for test
    const { dataSource } = this.state;
    const options = dataSource.map(player => (
      <Option key={player.fullName} text={player.fullName} className="player-option">
        <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`} alt="Player" />
        <span className="player-option-label">{player.fullName}</span>
      </Option>
    ));

    console.log(dataSource);
    console.log(options);
    return (
      <AutoComplete
        className="search-bar"
        size="large"
        dataSource={options}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
        optionLabelProp="value"
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    );
  }
}