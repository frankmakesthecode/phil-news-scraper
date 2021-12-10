import React from 'react';
import { connect } from 'react-redux';
import AllNews from './AllNews';
import SearchNews from './SearchNews';
import ScrollToTop from 'react-scroll-to-top';

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div>
      <SearchNews />
      <ScrollToTop color="#141418" smooth={true} />
    </div>
  );
};

export default connect(null)(Home);
