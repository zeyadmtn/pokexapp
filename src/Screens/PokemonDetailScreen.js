import React from 'react';
import PokemonDetailDisplay from '../PokemonDetailPage/PokemonDetailDisplay';

const PokemonDetailScreen = ({pokemon, bgColor}) => {
  return (
    <PokemonDetailDisplay pokemon={pokemon} bgColor={bgColor} />
  );
};

export default PokemonDetailScreen;
