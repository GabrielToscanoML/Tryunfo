import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  handleOnInputChange = (event) => {
    const { name, checked, type } = event.target;
    const result = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: result,
    }, this.isValid);
  };

  clearCard = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  checkTrunfo = () => {
    const { savedCards } = this.state;
    const existsTrunfo = (element) => element.cardTrunfo === true;
    if (savedCards.some(existsTrunfo)) {
      this.setState({ hasTrunfo: true });
    }
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
    }), this.checkTrunfo);
    this.clearCard();
  };

  removeCard = ({ target }) => {
    const { cardName } = target;
    const { savedCards } = this.state;
    const index = savedCards.indexOf(cardName);
    const min = -1;
    if (index >= min) {
      savedCards.splice(index, 1);
      this.setState({ savedCards }, this.checkTrunfo);
    }
  };

  isValid() {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const valorAtributoMaximo = 90;
    const somaMax = 210;
    if (soma > somaMax
      || cardAttr1 > valorAtributoMaximo
      || cardAttr2 > valorAtributoMaximo
      || cardAttr3 > valorAtributoMaximo
      || cardAttr1 < 0 || cardAttr2 < 0
      || cardAttr3 < 0
      || cardAttr1 === '' || cardAttr2 === '' || cardAttr3 === ''
      || cardName === '' || cardDescription === ''
      || cardImage === '') {
      return this.setState({ isSaveButtonDisabled: true }); // desabilitado ate que tudo esteja certo
    }
    return this.setState({ isSaveButtonDisabled: false });
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled } = this.state;
    const { savedCards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.handleOnInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
        <section id="savedCardsSection">
          {
            savedCards.map((element) => (
              <div key={ savedCards } id="showCard">
                <p>{ element.cardName }</p>
                <img src={ element.cardImage } alt={ element.cardName } />
                <p>{ element.cardDescription }</p>
                <p>{ element.cardAttr1 }</p>
                <p>{ element.cardAttr2 }</p>
                <p>{ element.cardAttr3 }</p>
                <p>{ element.cardRare }</p>
                <button
                  data-testid="delete-button"
                  type="button"
                  id="deleteItemButton"
                  onClick={ this.removeCard }
                  // onChange={ onInputChange }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </section>
        {/* <div className="json">
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div> */}
      </div>
    );
  }
}

export default App;
