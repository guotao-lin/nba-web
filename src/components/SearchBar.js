import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';

export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  onSelect = (value) => {
    this.props.handleSelectPlayer(value);
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : nba.searchPlayers(value).map(player => player.fullName),
    });
  }

  render() {
    window.nba = nba;  // only for test
    const { dataSource } = this.state;
    return (
      <AutoComplete
        className="search-bar"
        size="large"
        dataSource={dataSource}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    );
  }
}