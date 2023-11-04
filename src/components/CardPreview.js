import React from 'react';
import propTypes from 'prop-types';
import '../styles/cardPreview.css';

class CardPreview extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    const cardTrunfoIsTrue = () => {
      if (cardTrunfo) {
        return (<p data-testid="trunfo-card">Super Trunfo</p>);
      }
    };

    return (
      <div id="card-preview">
        <p data-testid="name-card">{ cardName }</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p name="cardDescription" data-testid="description-card">{ cardDescription }</p>
        <p name="cardAttr1" data-testid="attr1-card">{ cardAttr1 }</p>
        <p name="cardAttr2" data-testid="attr2-card">{ cardAttr2 }</p>
        <p name="cardAttr3" data-testid="attr3-card">{ cardAttr3 }</p>
        <p name="cardRare" data-testid="rare-card">{ cardRare }</p>
        { cardTrunfoIsTrue() }
      </div>
    );
  }
}

CardPreview.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default CardPreview;
