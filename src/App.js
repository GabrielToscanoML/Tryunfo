import React from 'react';
import CardPreview from './components/CardPreview';
import Form from './components/Form';
import Card from './components/Card';
import imageDefault from './assets/1517059718128.jpeg';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: imageDefault,
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
      cardImage: imageDefault,
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
    } else {
      this.setState({ hasTrunfo: false });
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

  removeCard = (name) => {
    const { savedCards } = this.state;
    this.setState({ savedCards: savedCards.filter(
      (card) => card.cardName !== name,
    ) }, this.checkTrunfo);
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
          <CardPreview
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
        {savedCards.length > 0 && <h1>Suas Cartas:</h1>}
        <section id="savedCardsSection">
          {
            savedCards.map((element) => (
              <div key={ element.cardName }>
                <Card
                  cardName={ element.cardName }
                  cardDescription={ element.cardDescription }
                  cardAttr1={ element.cardAttr1 }
                  cardAttr2={ element.cardAttr2 }
                  cardAttr3={ element.cardAttr3 }
                  cardImage={ element.cardImage }
                  cardRare={ element.cardRare }
                  cardTrunfo={ element.cardTrunfo }
                  removeCard={ () => this.removeCard(element.cardName) }
                />
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
