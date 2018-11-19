import React from 'react';

const Card =(props) => {
  const cardImg = props.cardImg;
  const cardTitle = props.cardTitle;
  const cardText = props.cardText;
  const cardAlt = props.cardAlt;

  return(
    <div className="card">
      <img className="card-img-top img-responsive" height="200" src={cardImg} alt={cardAlt}/>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
      </div>
    </div>
  )
}

export default Card;
