import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../store/news';
import { fetchFilteredNews } from '../store/filteredNews';
import { useHistory } from 'react-router';

export const SearchNews = (props) => {
  const { loadFilteredNews } = props;
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    loadFilteredNews(search);
    history.push('/news');
  };
  return (
    <div id="search-container">
      <h4 className="secondary-header">
        Aggregating the top stories from around the nation
      </h4>
      <form className="field">
        <input
          className="input-field"
          type="text"
          placeholder="Search for headlines"
          value={search}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="hidden-submit"
          onClick={handleSubmit}
        ></button>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    news: state.news,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadNews: () => dispatch(fetchNews()),
    loadFilteredNews: (search) => dispatch(fetchFilteredNews(search)),
  };
};

export default connect(mapState, mapDispatch)(SearchNews);
