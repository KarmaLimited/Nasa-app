import React from 'react';

const SearchField = (props) => {
  const {
    query,
    handleChange,
    handleSubmit
  } = props;
  return (
    <div className='pa4 black tc'>
      <form onSubmit={handleSubmit} className="ba b--transparent ph0 mh0 fw6 tc">
        <input value={query} placeholder='Search' className="b w-80 tc pa2 input-reset ba mt2 bg-transparent w-100" onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchField;