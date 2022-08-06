import './Search.css';
import { useState } from 'react';
import axios from 'axios';

function Search(props) {
    const [searchKey, setSearchKey] = useState('');

    function fetchData() {
        const url = `http://content.guardianapis.com/search?api-key=test&q=${searchKey}&show-fields=thumbnail,headline&show-tags=keyword&page=1&page-size=10`
        axios.get(url)
        .then(res => {props.setSearchData(res.data.response.results); props.setSearchKey(searchKey)})
        .catch(err => console.log(err))
    }

    return(
        <div className='search-bar'>
            <div className='srch-header' >News Lister</div>
            <div className='srch-comp'>
                <div>Enter Search Text</div>
                <input value={searchKey} onChange={e => setSearchKey(e.target.value)} />
                <button onClick={() => fetchData()}>Search</button>
            </div>
        </div>
    )
}

export default Search;