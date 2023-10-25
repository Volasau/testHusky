import './card.css';

interface CardProps {
  title: string;
  description: string;
  text: string;
  imageUrl: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card__container">
      <div className="card__title">{props.title}</div>
      <div className="card__description">{props.description}</div>
      <div className="card__text">{props.text}</div>
      <img src={props.imageUrl} className="card__img" alt="Card Image" />
    </div>
  );
};

export default Card;
