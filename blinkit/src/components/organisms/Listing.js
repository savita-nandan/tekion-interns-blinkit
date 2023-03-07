import { useState} from 'react';
import Sidebar from './Sidebar';
import Grid from './Grid';
import useFetchData from '../useFetchData';

function fetchProducts(category, items) {
    if (category === '')
        return items;
    return items?.filter(({ categories }) => categories.includes(category));
}

function Listing() {
    const [category, setCategory] = useState('');

    const items = useFetchData('items');

    const products = fetchProducts(category, items);

    const handleChange = (id) => {
        setCategory(id);
    };

    return (
        <main className="flex">
            <Sidebar handleChange={handleChange} />
            <Grid products={products} />
        </main>
    );
}

export default Listing;