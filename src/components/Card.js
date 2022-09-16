import * as React from "https://cdn.skypack.dev/react@17.0.1";

import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <div className="title__body">
        <h2 className="card__title">{props.title}</h2></div>
        <div className="description__body"> 
        <p className="card__description">{props.body}</p></div>
        {/* <small>{props.userId}</small> */}
      </div>
      
    </div>
  );
}
export default Card
