import React from 'react';
import propTypes from 'prop-types';
import '../styles/formAndCardPreview.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <div>
        <form className="formAndCardPreview">
          <label htmlFor="name">
            <input
              name="cardName"
              id="name"
              data-testid="name-input"
              placeholder="Nome"
              value={ cardName }
              type="text"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="descricao">
            <textarea
              placeholder="Descrição"
              data-testid="description-input"
              name="cardDescription"
              id="descricao"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo1">
            Atributo 1:
            <input
              placeholder="Atributo 1"
              data-testid="attr1-input"
              name="cardAttr1"
              id="atributo1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo2">
            Atributo 2:
            <input
              placeholder="Atributo 2"
              data-testid="attr2-input"
              name="cardAttr2"
              id="atributo2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo3">
            Atributo 3:
            <input
              data-testid="attr3-input"
              placeholder="Atributo 3"
              name="cardAttr3"
              id="atributo3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              name="cardImage"
              id="image"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="raridade">
            Raridade
            <select
              name="cardRare"
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {
            hasTrunfo ? <p id="hasTrunfop">Você já tem um Super Trunfo em seu baralho</p>
              : (
                <label htmlFor="superTryunfo">
                  Super Trybe Tryunfo
                  <input
                    id="superTryunfo"
                    data-testid="trunfo-input"
                    name="cardTrunfo"
                    type="checkbox"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )
          }

          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            onChange={ onInputChange }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
