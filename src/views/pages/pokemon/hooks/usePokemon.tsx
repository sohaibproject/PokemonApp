import React, { useEffect, useState } from 'react';
import { getMinMaxPower } from '../../../../@core/utils/getMinMaxPower';
import { Pokemon } from '../../../../@core/models/pokemon.model';
import { getPower } from '../../../../@core/utils/getPower';

const usePokemon = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [displayedData, setDisplayedData] = useState<Pokemon[]>([]);
  const [searchName, setsearchName] = useState<string>('');
  const [threshold, setThreshold] = useState<string>('');
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const updateDisplayedData = (data: Pokemon[], page: number, perPage: number, searchName: string, threshold: string) => {
    const filteredData = data.filter((pokemon) => {
      return threshold ? pokemon.name.toLowerCase().includes(searchName.toLowerCase()) && getPower(pokemon) >= parseInt(threshold) : pokemon.name.toLowerCase().includes(searchName.toLowerCase());
    });

    const indexOfLastItem = page * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const itemsToDisplay = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const minMaxPower = getMinMaxPower(itemsToDisplay);
    setMin(filteredData.length !== 0 ? minMaxPower.minPower : 0);
    setMax(filteredData.length !== 0 ? minMaxPower.maxPower : 0);
    setDisplayedData(itemsToDisplay);
    setTotalItems(filteredData.length !== 0 ? filteredData.length : 0);
  };

  useEffect(() => {
    setLoading(true);
    fetch('/pokemon.json')
      .then((response) => response.json())
      .then((data: Pokemon[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
        setHasError(true);
      });
  }, []);

  useEffect(() => {
    updateDisplayedData(data, currentPage, itemsPerPage, searchName, threshold);
  }, [data, currentPage, itemsPerPage, searchName, threshold]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchName(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };
  const handleThreshold = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThreshold(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };
  const handelItemPerpage = (perPage: number) => {
    setItemsPerPage(perPage);
  };
  return { handelItemPerpage, searchName, handleSearch, threshold, handleThreshold, paginate, itemsPerPage, setItemsPerPage, totalItems, hasError, min, max, loading, displayedData, currentPage };
};

export default usePokemon;
