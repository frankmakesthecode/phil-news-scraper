import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div id="loading-div">
      <Loader type="Rings" color="#76c893" height={100} width={100} />
      <h4 className="load-header">Grabbing Headlines</h4>
    </div>
  );
};

export default Loading;
