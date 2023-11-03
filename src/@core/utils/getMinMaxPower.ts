import { Pokemon } from '../models/pokemon.model';
import { getPower } from './getPower';

export const getMinMaxPower = (listPokemon: Pokemon[]) => {
  let Listpower = listPokemon.map((pokemon) => {
    return getPower(pokemon);
  });

  return { minPower: Math.min(...Listpower), maxPower: Math.max(...Listpower) };
};
