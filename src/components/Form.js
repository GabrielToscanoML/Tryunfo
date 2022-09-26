import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form">

          <label htmlFor="name">
            Nome
            <input data-testid="name-input" name="name" type="text" />
          </label>

          <label htmlFor="descricao">
            Descrição
            <textarea data-testid="description-input" name="descricao" />
          </label>

          <label htmlFor="atributo1">
            Attr01
            <input data-testid="attr1-input" name="atributo1" type="number" />
          </label>

          <label htmlFor="atributo2">
            Attr02
            <input data-testid="attr2-input" name="atributo2" type="number" />
          </label>

          <label htmlFor="atributo3">
            Attr03
            <input data-testid="attr3-input" name="atributo3" type="number" />
          </label>

          <label htmlFor="image">
            Imagem
            <input data-testid="image-input" name="image" type="text" />
          </label>

          <label htmlFor="raridade">
            Raridade
            <select name="raridade" data-testid="rare-input">
              <option value="Normal">Normal</option>
              <option value="Raro">Raro</option>
              <option value="Muito Raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="superTryunfo">
            Super Trybe Tryunfo
            <input data-testid="trunfo-input" name="superTryunfo" type="checkbox" />
          </label>

          <button data-testid="save-button" name="salvar" type="button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
