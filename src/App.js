import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import SearchBar from './components/searchbar';
import {actionFetchData} from './actions/index';
import ListContainer from './components/listContainer';


class App extends Component {

  onSearch = (searchText) => {
    return this.props.actionFetchData(searchText);
  };

  render() {
    return (
      <div className="container-fluid ">
        <SearchBar
          search={this.onSearch}
        />

        {this.props.data.length !== 0 &&
        <ListContainer
          data={this.props.data}
        />
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.apidata.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({actionFetchData}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
