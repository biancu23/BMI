import './index.scss';

import React from 'react';

import { loadIcons } from '../utils/IconLoader';


loadIcons();

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  export default MyApp
