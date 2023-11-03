import React from 'react';

import PokemonImg from '../../../assets/images/svgs/pokemon.svg';
const Loading = () => {
  return (
    <div className='w-full h-full grow flex pt-14 justify-center items-center'>
      <div className='animate-bounce flex flex-row gap-2'>
        <img src={PokemonImg} alt='pokemon Loading' />
        <h1>Loading</h1>
      </div>
    </div>
  );
};

export default Loading;
