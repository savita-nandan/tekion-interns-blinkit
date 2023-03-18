import { useState, useEffect } from 'react';

function useFetchData(type) {
  const baseURL = `http://localhost:3004/${type}`;
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
      fetch(baseURL)
        .then(res => res.json())
        .then((res) => {console.log(res); setCategories([...res[type]])})
    }
     
    useEffect(() => {
      fetchCategories()
    }, []);
    
  return categories;
}

export default useFetchData;