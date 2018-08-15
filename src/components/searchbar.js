import React, {Component} from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: ''
    };
  }

  render() {
    return (

      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
        </div>
        <input
          value={this.state.searchTxt}
          onChange={e => this.setState({searchTxt: e.target.value})}
        />
        <button
          className="btn btn-info"
          onClick={() => this.props.search(this.state.searchTxt)}
        > Submit
        </button>
      </div>
    );
  }
}

export default SearchBar;