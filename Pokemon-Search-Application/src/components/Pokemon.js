import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Pokemon.css';

const Pokemon = ({ pokemon }) => (
  <div className="card m-2 d-inline-flex text-center pokemon-card" style={{ width: '20rem' }}>
    <Link to={`/${pokemon.id}`}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} className="card-img-top" alt="images" />
      <p>
        #
        {pokemon.id}
      </p>
      <h5 className="name">{pokemon.name}</h5>
    </Link>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Pokemon;