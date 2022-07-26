import React from 'react';
import { Link } from 'react-router-dom';

function CardItems() {
  return (
    <>
      <li className="cards__item">
        <Link className="card__item__link">
          <figure className="cards__item__pic-wrap">
            <img src="/" alt="Travel Image" className="cards__item__img" />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItems;
