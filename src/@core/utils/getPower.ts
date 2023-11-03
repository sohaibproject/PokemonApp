import { Pokemon } from '../models/pokemon.model';

export const getPower = (pokemon: Pokemon): number => {
  const { id, name, type, ...rest } = pokemon;
  return Object.values(rest).reduce((total, num) => total + num, 0);
};
