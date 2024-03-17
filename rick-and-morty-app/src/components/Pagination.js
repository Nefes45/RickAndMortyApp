import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [ setData] = useState([]);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line no-use-before-define
  }, [fetchData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.example.com/data?page=${currentPage}`);
      setData(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Render your data here */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default MyComponent;
