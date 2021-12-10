import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from './widgets/loading';

import { fetchNews } from '../store/news';

export const AllNews = (props) => {
  const { filteredNews, loadNews } = props;

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div>
      <div id="news-container">
        {!filteredNews.length ? (
          <Loading />
        ) : (
          <div className="card-list">
            {filteredNews.map((headline) => {
              return (
                <a
                  className="card"
                  key={headline.id}
                  href={headline.link}
                  target="_blank"
                >
                  <h4 className="card-source">{headline.source}</h4>
                  <p className="card-title">{headline.title}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    filteredNews: state.filteredNews,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadNews: () => dispatch(fetchNews()),
  };
};

export default connect(mapState, mapDispatch)(AllNews);
