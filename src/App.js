import React, { useCallback, useEffect, useRef, useState } from 'react';
import api from './services/api';
import { MdAddCircle } from 'react-icons/md';
import { FaSearch, FaList } from 'react-icons/fa';

import { Form } from '@unform/web'
import Input from './components/Input';
import MoviesList from './components/MoviesList';

import { Container, ToolBar, BoxLoading, ContainerForm, Fieldgroup, MessageForm, BoxNotFoundMovies } from './styles';

function App() {
  const [movies, setMovies] = useState();
  const formRef = useRef(null);
  const searchRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [movieEdit, setMovieEdit] = useState(null);
  const [atualizando, setAtualizando] = useState(false);
  const [cadastrando, setCadastrando] = useState(false);
  const [msgForm, setMsgForm] = useState('');
  const [termoBusca, setTermoBusca] = useState('');
  const [buscando, setBuscando] = useState(false);
  const [notFoundMovies, setNotFoundMovies] = useState(false);

  useEffect(() => {
    setBuscando(true);

    api.get('movies').then(response => {
      setMovies(response.data);

      setBuscando(false);
    });
  }, []);

  useEffect(() => {
    formRef.current?.setErrors({});

    if (movieEdit !== null) {
      setShowForm(true);
      formRef.current.setData(movieEdit);
    }
  }, [movieEdit, showForm]);

  const handleListAll = useCallback(() => {
    setBuscando(true);

    api.get('movies').then(response => {
      setMovies(response.data);

      setBuscando(false);
    });
  }, []);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        if (formRef.current.getFieldValue('title_br') !== '') {
          if (movieEdit) {
            setAtualizando(true);

            const response = await api.put(`movies/${movieEdit.id}`, data);

            if (response.data.data.movie) {
              setMovies(movies.map(movie => movie.id === response.data.data.movie.id ? response.data.data.movie : movie));
              setAtualizando(false);
              setMsgForm(response.data.data.message);
            }
          } else {
            setCadastrando(true);

            const response = await api.post('movies', data);

            if (response.data.data.movie) {
              setMovies([...movies, response.data.data.movie]);
              setCadastrando(false);
              setMsgForm(response.data.data.message);
              formRef.current?.reset();
            }
          }
        } else {
          formRef.current.setFieldError('title_br', 'Título é obrigatório');
        }
      } catch (err) {
        console.log(err);
      }
    }, [movies, movieEdit]);

  const handleSearch = useCallback(
    async (data) => {
      try {
        setNotFoundMovies(false);
        setBuscando(true);
        setTermoBusca(data.search);

        const response = await api.get(`movies/search/${data.search}`);

        searchRef.current.reset();
        setBuscando(false);

        if (response.data.length > 0) {
          setMovies(response.data);
        } else {
          setNotFoundMovies(true);
        }

      } catch (err) {
        console.log(err);
      }
    }, []);

  const deleteMovie = useCallback((id) => {
    api.delete(`movies/${id}`).then(response => {
      setMovies(movies.filter(movie => movie.id !== response.data.data.movie.id));
    });
  }, [movies]);

  const handleCloseForm = useCallback(() => {
    setMovieEdit(null);
    formRef.current?.reset();
    setShowForm(false);
    setMsgForm('');
  }, []);

  return (
    <Container>
      <ToolBar>
        <button onClick={() => setShowForm(true)}>Adicionar filme <MdAddCircle /></button>

        <Form onSubmit={handleSearch} ref={searchRef}>
          <Input type="search" name="search" placeholder="Buscar" />
          <button type="submit"><FaSearch /></button>
          <button title="Listar todos filmes" onClick={handleListAll}><FaList /></button>
        </Form>
      </ToolBar>

      <ContainerForm show={showForm}>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h2>Ficha do filme</h2>

          <Fieldgroup>
            <label htmlFor="title_br">Título: </label>
            <Input type="text" name="title_br" id="title_br" />
          </Fieldgroup>

          <Fieldgroup>
            <label htmlFor="original_title">Título original: </label>
            <Input type="text" name="original_title" id="original_title" />
          </Fieldgroup>

          <Fieldgroup>
            <label htmlFor="category">Categoria: </label>
            <Input type="text" name="category" id="category" />
          </Fieldgroup>

          <Fieldgroup>
            <label htmlFor="year">Ano: </label>
            <Input type="text" name="year" id="year" />
          </Fieldgroup>

          <Fieldgroup>
            <label htmlFor="resume">Sinopse: </label>
            <Input type="text" name="resume" id="resume" />
          </Fieldgroup>

          <Fieldgroup>
            <label htmlFor="directors">Diretores: </label>
            <Input type="text" name="directors" id="directors" />
          </Fieldgroup>

          <Fieldgroup>
            <label htmlFor="writers">Escritores: </label>
            <Input type="text" name="writers" id="writers" />
          </Fieldgroup>

          <Fieldgroup>
            <label htmlFor="stars">Estrelas: </label>
            <Input type="text" name="stars" id="stars" />
          </Fieldgroup>

          <button type="submit">
            {movieEdit ?
              atualizando ? 'Atualizando...' : 'Atualizar' :
              cadastrando ? 'Cadastrando...' : 'Cadastrar'
            }
          </button>
          <button type="button" onClick={handleCloseForm}>Fechar</button>

          {msgForm !== '' && (<MessageForm>{msgForm}</MessageForm>)}
        </Form>
      </ContainerForm>

      {buscando ? (
        <BoxLoading>
          {searchRef.current.getFieldValue('search') !== '' ?
            <h1>Carregando lista de filmes com "{searchRef.current.getFieldValue('search')}"...</h1>
            :
            <h1>Carregando lista de filmes...</h1>
          }
        </BoxLoading>
      ) : (
          <>
            {notFoundMovies && (
              <BoxNotFoundMovies>
                <h1>Não foi encontrado filmes com o termo "{termoBusca}".</h1>
              </BoxNotFoundMovies>
            )}

            <h1>
              Filmes
              {termoBusca !== '' && !notFoundMovies && (
                <>
                  : <span>"{termoBusca}"</span>
                </>
              )}
            </h1>

            <MoviesList movies={movies} handleDelete={deleteMovie} handleEdit={setMovieEdit} />
          </>
        )
      }
    </Container >
  );
}

export default App;
