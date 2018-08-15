import React, {Component} from 'react';
import ListItem from './listItem';

class ListContainer extends Component {

  render() {
    const {data} = this.props;
    return (
      <div className="container-fluid ">
        <div className="col-6">
          {data.map((e, index) => <ListItem Itemdata={e} key={index}/>)}
        </div>
      </div>
    )
  }
};

export default ListContainer; 