import React from 'react';

const ListItem = (props) => {
  const {Itemdata} = props;

  return (

    <div className="mt-4 card">
      <div className="card-body">
        <img className="card-img-top" src={Itemdata.artworkUrl100} alt="Art-Work"/>
        <div className="card-body">
          <h5 className="card-title">Artist Name: {Itemdata.artistName}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Track: {Itemdata.trackName}</li>
          <li className="list-group-item">Album: {Itemdata.collectionName}</li>
          <li className="list-group-item">Price: ${Itemdata.trackPrice} </li>
          <li className="list-group-item">
            <a href={Itemdata.trackViewUrl}>
              <button type="button" className="w-100 p-3 btn btn-outline-info">
                Buy
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListItem;