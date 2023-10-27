import './card.css';

export interface CardProps {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card__container">
      <div className="card__title text">
        🌌
        <span className="card__span-title">{props.name}</span>
      </div>
      <div className="card__description text">
        <span className="card__span">climate: </span> {props.climate}
      </div>
      <div className="card__text text">
        <span className="card__span">terrain: </span>
        {props.terrain}
      </div>
      <div className="card__population text">
        <span className="card__span">population: </span>
        {props.population}
      </div>
      {/* <img src={props.imageUrl} className="card__img" alt="Card Image" /> */}
    </div>
  );
};

export default Card;
