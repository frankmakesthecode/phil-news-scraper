import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Loading from './widgets/loading';

import { fetchRappler } from '../store/rappler';

export const Rappler = (props) => {
  const { rappler, loadRappler } = props;
  const [search, setsearch] = useState('');

  useEffect(() => {
    loadRappler();
  }, []);

  const handleChange = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div>
      <div className="news-container">
        <h3 className="secondary-header">Rappler</h3>
        <form className="filter-search">
          <input
            className="rappler-search"
            type="text"
            placeholder="Search Headlines"
            value={search}
            onChange={handleChange}
          />
        </form>
        {!rappler.length ? (
          <Loading />
        ) : (
          <div className="card-list">
            {rappler
              .filter((headline) => {
                if (search === '') {
                  return headline;
                } else {
                  if (
                    headline.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return headline;
                  }
                }
              })
              .map((headline) => {
                return (
                  <a
                    className="card"
                    key={headline.id}
                    href={headline.link}
                    target="_blank"
                  >
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
    rappler: state.rappler,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadRappler: () => dispatch(fetchRappler()),
  };
};

export default connect(mapState, mapDispatch)(Rappler);
