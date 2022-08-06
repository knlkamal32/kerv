import ResultBox from './ResultBox';
import './Resultcontainer.css';

function ResultContainer(props) {


    return(
        <div className='result-cont'>
            <div>Search results for {props.searchKey}</div>
          {props.searchData.map((data, index) => <ResultBox key={index} data={data} setSearchKey={props.setSearchKey} setPage={props.setPage} />)}
          <div className='nav-btn' >
            <button onClick={() => props.page > 1 ? props.setPage(props.page - 1) : null}>Prev</button>
            <button onClick={() => props.setPage(props.page + 1)} >Next</button>
          </div>
        </div>
    )
}

export default ResultContainer;