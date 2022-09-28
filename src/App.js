import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
    };
  }

  handleOnInputChange = (event) => {
    const { name, checked, type } = event.target;
    const result = type === 'checkbox' ? checked : event.target.value;

    this.setState({
      [name]: result,
    }, this.isValid);
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
            onSaveButtonClick={ this.handleOnInputChange }
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
      </div>
    );
  }
}

export default App;
