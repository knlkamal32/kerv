import './Resultbox.css';

function ResultBox(props) {

    return(
        <div className='result-box'>
            <div className="thumb">
                <img src={props.data.fields.thumbnail} height='120px' width='120px' alt='thumb' />
            </div>
            <div className="data">
                <div className="headline">{props.data.fields.headline}</div>
                <div className="keywords">
                    {
                        props.data.tags.map((tag, index) => <div key={index} onClick={() => {props.setSearchKey(tag.webTitle); props.setPage(1)}} >{tag.webTitle}</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ResultBox;