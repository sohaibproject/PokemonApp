import React from 'react';
import { CostumTableProps } from './type';
import { Pokemon } from '../../../@core/models/pokemon.model';
import CustomThead from './components/CustomThead';
import CustomTbody from './components/CustomTbody';

const CustomTable = ({ Tdata, Thead }: CostumTableProps<Pokemon>) => {
  return (
    <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700  '>
      <CustomThead Thead={Thead} />
      <CustomTbody Tdata={Tdata} />
    </table>
  );
};

export default CustomTable;
