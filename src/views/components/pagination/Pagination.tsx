import React from 'react';
import { PaginationProps } from './type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, paginate, parPage, handelItemPerpage, total }: PaginationProps) => {
  const pageNumbers = [];
  let test: number | string = '';

  for (let i = 1; i <= Math.ceil(total / parPage); i++) {
    pageNumbers.push(i);
  }
  test = pageNumbers.indexOf(currentPage);

  if (test === -1) {
    paginate(pageNumbers[0]);
  }
  const decrement = () => {
    paginate(currentPage - 1);
    // GoTop();
  };
  const increment = () => {
    paginate(currentPage + 1);
    // GoTop();
  };
  return (
    <div className='flex justify-end items-center'>
      <div className='mx-3'>
        <span className='mx-3'>Rows Per Page</span>
        <select value={parPage} className='border-transparent outline-none' onChange={(e) => handelItemPerpage(parseInt(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}> 10</option>
          <option value={15}> 15</option>
        </select>
      </div>

      <span>
        {currentPage} - {pageNumbers.length} of {parPage}{' '}
      </span>
      <div className='flex space-x-5 ml-2'>
        <button className='disabled:cursor-not-allowed cursor-pointer' onClick={() => decrement()} disabled={currentPage === 1}>
          {' '}
          <FontAwesomeIcon icon={faChevronLeft} className='text-gray-500' />
        </button>
        <button className='disabled:cursor-not-allowed cursor-pointer' onClick={() => increment()} disabled={currentPage === pageNumbers.length}>
          {' '}
          <FontAwesomeIcon icon={faChevronRight} className='text-gray-500' />{' '}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
