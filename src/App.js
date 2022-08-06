import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import ResultContainer from './components/ResultContainer';

function App() {
  const [searchData, setSearchData] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if(searchKey.length !== 0) {
      const url = `http://content.guardianapis.com/search?api-key=test&q=${searchKey}&show-fields=thumbnail,headline&show-tags=keyword&page=${page.toString()}&page-size=10`;
      axios.get(url)
      .then(res => setSearchData(res.data.response.results))
      .catch(err => console.log(err))
    }
  },[searchKey, page])


  return (
    <div className="App">
      {
        searchData.length === 0 ? <Search setSearchData={setSearchData} setSearchKey={setSearchKey} /> : 
        <ResultContainer searchData={searchData} page={page} searchKey={searchKey}  setPage={setPage} setSearchKey={setSearchKey}/>
      }
    </div>
  );
}

export default App;
