import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loading from './widgets/loading';

import { fetchRappler } from '../store/rappler';

export const Rappler = (props) => {
  const { rappler, loadRappler } = props;

  useEffect(() => {
    loadRappler();
  }, []);

  return (
    <div>
      <div className="news-container">
        <h3 className="secondary-header">Rappler</h3>
        {!rappler.length ? (
          <Loading />
        ) : (
          <div className="card-list">
            {rappler.map((headline) => {
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
