import React from 'react';
import propTypes from 'prop-types';
import '../styles/card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, removeCard } = this.props;

    return (
      <div>
        <p>{ cardName }</p>
        <img src={ cardImage } alt={ cardName } />
        <p>{ cardDescription }</p>
        <p>{ cardAttr1 }</p>
        <p>{ cardAttr2 }</p>
        <p>{ cardAttr3 }</p>
        <p>{ cardRare }</p>
        {cardTrunfo && <p>Tryunfo!</p>}
        <button
          data-testid="delete-button"
          type="button"
          id="deleteItemButton"
          onClick={ removeCard }
        >
          Excluir
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  removeCard: propTypes.func.isRequired,
};

export default Card;
