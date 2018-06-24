import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NasaQuery from './containers/NasaQuery';
import ResultsList from './components/ResultsList';

import * as actions from './actions';

const NasaApp = (props) => {
  const {
    addNasaItem,
    searchNasa,
    setSavedFromStorage,
    changePage,
    deleteItem,
    results,
    noResults,
    saved,
    page,
    isFetching,
  } = props;

  const handleSavedLink = (e) => {
    e.preventDefault();
    changePage(e.target.href.replace('http://localhost:3000/', ''));
  };

  return (
    <div>
      <div> 
        { page === 'home' && 
              <div className="tc"> 
                <h1 class="fw1 ph3 ph0-l tc">Nasa Image api</h1>
                  <button class="f6 link dim ba ph3 pv2 mb2 dib near-black pointer main-bg-color black">
                    <a href='/saved' className="black" onClick={handleSavedLink}>View your bookmarks</a>
                  </button>
              </div> 
        }
        { page === 'saved' && 
                <div className="tc"> 
                  <h1 class="fw1 ph3 ph0-l tc">Bookmarks</h1>
                    <button class="f6 link dim ba ph3 pv2 mb2 dib near-black pointer main-bg-color black">
                      <a href='/home' className="black" onClick={handleSavedLink}>Go to Searchpage</a>
                    </button>
                  </div> 
        }
      </div>
      
      {page === 'home' && <NasaQuery 
        addNasaItem={addNasaItem}
        handleDelete={deleteItem}
        searchNasa={searchNasa}
        results={results}
        noResults={noResults}
        isFetching={isFetching}
        setSavedFromStorage={setSavedFromStorage}
        saved={saved}/>
      }
      { page === 'saved' && 
          <div>
            <ResultsList
              results={saved} page={page} saved={saved} handleDelete={deleteItem} handleSave={() => {console.log('save');}}
            />
          </div> }
    </div>
  );
};

const mapStateToProps = (state = {}, props) => {
  return {
    results: state.results.returnedResults,
    saved: state.saved,
    noResults: state.results.noResults,
    page: state.page,
    isFetching: state.isFetching,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addNasaItem: actions.addNasaItem,
    deleteItem: actions.deleteItem,
    searchNasa: actions.searchNASA,
    setSavedFromStorage: actions.setSavedFromStorage,
    changePage: actions.changePage
  }, dispatch);
};

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(NasaApp);

export default Search;
