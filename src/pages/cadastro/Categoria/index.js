import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handlerSubmit(InfosEvent) {
          InfosEvent.preventDefault();
          setCategorias([...categorias]);
          console.log('form enviando...');
        }}
      >
        <div>
          <div>
            <label>
              Nome da Categoria:
              <input
                type="text"
                value={values.nome}
                onChange={function functionHandler(infos) {
                  setValue(infos.target.value);
                }}
              />
            </label>
          </div>

          <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.descricao}
                onChange={function functionHandler(infos) {
                  setValues(infos.target.value);
                }}
              />
            </label>
          </div>

          <div>
            <label>
              Cor
              <input
                type="color"
                value={values.cor}
                onChange={function functionHandler(infos) {
                  setValues(infos.target.value);
                }}
              />
            </label>
          </div>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria}</li>;
        })}
      </ul>
      <Link to="/">Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
