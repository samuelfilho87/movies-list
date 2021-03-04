import React from 'react';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

import { Table, BoxActions } from './styles';

function MoviesList({ movies, handleDelete, handleEdit }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th className="td-min">Título</th>
          <th className="td-min">Título original</th>
          <th className="td-min">Categoria</th>
          <th>Ano</th>
          <th>Sinopse</th>
          <th>Diretores</th>
          <th>Escritores</th>
          <th>Estrelas</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {movies ? movies.map(movie => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td >{movie.title_br}</td>
            <td>{movie.original_title}</td>
            <td>{movie.category}</td>
            <td>{movie.year}</td>
            <td>{movie.resume}</td>
            <td>{movie.directors}</td>
            <td>{movie.writers}</td>
            <td>{movie.stars}</td>
            <td>
              <BoxActions>
                <MdModeEdit size={24} className="edit" onClick={() => handleEdit(movie)} />
                <MdDeleteForever size={24} className="delete" onClick={() => handleDelete(movie.id)} />
              </BoxActions>
            </td>
          </tr>
        )) : (
            <tr>
              <td colSpan="10">Não há filmes cadastrados.</td>
            </tr>
          )}
      </tbody>
    </Table>
  );
}

export default MoviesList;