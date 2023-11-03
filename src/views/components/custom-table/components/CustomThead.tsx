interface CostumTheadProps {
  Thead: string[];
}
const CustomThead = ({ Thead }: CostumTheadProps) => {
  return (
    <thead className='bg-gray-50 dark:bg-gray-800'>
      <tr>
        {Thead.map((th, i) => (
          <th key={i} scope='col' className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            {th}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default CustomThead;
