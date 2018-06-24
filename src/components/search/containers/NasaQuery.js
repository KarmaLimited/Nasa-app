import React, { Component } from 'react';

import ResultsList from '../components/ResultsList';
import SearchField from '../components/SearchField';

class NasaQuery extends Component {  
  state = {
    query: '',
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      query: ''
    });
    this.props.searchNasa(this.state.query);
  }
  
  handleSave = (item) => {
    this.props.addNasaItem(item);
  }
  
  render() {
    const {
      handleDelete,
      saved,
      results,
      noResults,
      isFetching,
    } = this.props; 

    return (
      <div>
        <SearchField handleChange={this.handleChange} handleSubmit={this.handleSubmit} query={this.state.query}/>
        <div className="tc">
        {saved && <div>{saved.length} items saved</div>}
        </div>
        <ResultsList results={results} noResults={noResults} saved={saved} handleDelete={handleDelete} handleSave={this.handleSave} isFetching={isFetching} />
      </div>
    );
  }
}

export default NasaQuery;
