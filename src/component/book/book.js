import React from 'react';
import { Link } from 'react-router-dom';


export function BookCard(props) {
  const book = props.book;

  return (
    <div className={props.colNum}>
      <Link className='rental-detail-link' to={`/listbook/${book.id}`}>
        <div className='card bwm-card'>
          <img className='card-img-top' src={book.image} alt={book.name}></img>
          <div className='card-block'>
            <h4 className='card-title'>{book.name}</h4>
            <h6 className='card-title'>{book.description}</h6>
            <p className='card-text'>Quantity {book.quantity} </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
