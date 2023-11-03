import { Pokemon } from '../../../../@core/models/pokemon.model';
import { getPower } from '../../../../@core/utils/getPower';

interface CostumTbodyProps {
  Tdata: Pokemon[];
}
const CustomTbody = ({ Tdata }: CostumTbodyProps) => {
  return (
    <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
      {Tdata.length === 0 ? (
        <div className='text-center'> Empty Data</div>
      ) : (
        Tdata.map((data, i) => (
          <tr key={i}>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.id}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.name}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.type.join(', ')}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.hp}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.attack}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.defense}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.special_attack}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.special_defense}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{data.speed}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>{getPower(data)}</td>
          </tr>
        ))
      )}
      {/* </Container> */}
    </tbody>
  );
};

export default CustomTbody;
