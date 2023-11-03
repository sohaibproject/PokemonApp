import Pagination from '../../components/pagination/Pagination';
import Loading from '../../components/loading/Loading';
import Search from '../../components/search/Search';
import Container from '../../components/container/Container';
import usePokemon from './hooks/usePokemon';
import CustomTable from '../../components/custom-table/CustomTable';
const PokemonPage = () => {
  const { handelItemPerpage, handleSearch, handleThreshold, searchName, threshold, currentPage, displayedData, hasError, itemsPerPage, loading, max, min, paginate, setItemsPerPage, totalItems } =
    usePokemon();
  return (
    <div className='flex flex-col items-center '>
      <Container hasError={hasError} loading={loading}>
        <header className='shadow-md p-4 mt-3 rounded-lg '>
          <div className='flex justify-between items-center  space-x-3 '>
            <Search searchFor='search' placeholder='Search...' value={searchName} onChange={handleSearch} />
            <Search searchFor='threshold' placeholder='Power threshold' value={threshold} onChange={handleThreshold} />
          </div>
          <div className='flex flex-col mt-4'>
            <div className='mb-2'>
              <span> Min Power :</span>
              <span>{min}</span>
            </div>
            <div>
              <span> Max Power:</span>
              <span>{max}</span>
            </div>
          </div>
        </header>

        <div className='flex flex-col '>
          <div className=' my-5 overflow-x-auto '>
            <div className='inline-block min-w-full py-2 align-middle '>
              <div className='overflow-hidden border border-gray-200 rounded-lg shadow-lg ani  '>
                {loading ? <Loading /> : <CustomTable Tdata={displayedData} Thead={['ID', 'name', 'type', 'health', 'attack', 'defence', 'special_attack', 'special_defence', 'speed', 'Power']} />}
              </div>
              <div className='mb-5 mt-4'>
                {!loading && <Pagination currentPage={currentPage} paginate={paginate} parPage={itemsPerPage} handelItemPerpage={handelItemPerpage} total={totalItems} />}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PokemonPage;
