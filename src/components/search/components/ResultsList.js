import React from 'react';
import Bookmark from '../../Icons/favorite_white';
import UnBookmark from '../../Icons/favorite_black';
import Loader from '../../cssloader/loader';


const formatDate = (timestamp) => {
  const time = new Date(timestamp);
  return time.toDateString().slice(4);
};

// The results views of the image search api
const ResultsList = (props) => {
  const {
    results,
    noResults,
    saved,
    handleSave,
    handleDelete,
    isFetching,
  } = props;

  return (
    <div className="w-100 mw8 center pa4">
      <article className="pa3 pa5-ns">

        {isFetching && <div className="tc"><Loader/></div>}
        {results && results.map(result => {

          const alreadyAdded = saved.find(item => item.data[0].nasa_id === result.data[0].nasa_id);

          return (
            <div key={result.data[0].nasa_id}>
              <h2 class="f2 fw1 ph3 ph0-l">{result.data[0].title}</h2>

              {result.links[0].href.includes('jpg') ?
                <img className="w-100" src={result.links[0].href} alt={result.data[0].nasa_id} /> :
                <span>No image</span>
              }

              <h4>{formatDate(result.data[0].date_created)}</h4>
              <p>{result.data[0].description}</p>

              <br />
              {alreadyAdded ?
                <div className="tc"><button onClick={() => handleDelete(result)}><UnBookmark />Delete </button></div> :
                <div className="tc"><button onClick={() => handleSave(result)}><Bookmark />Save</button></div>
              }
              <hr />
            </div>
          );
        })
        }
        {noResults && <div>{noResults}</div>}
      </article>
    </div>
  );
};

export default ResultsList;