// withTheme.js
import React from 'react';
import ThemeProvider from './ThemeProvider';

const withTheme = (WrappedComponent) => {
  return (props) => (
    <ThemeProvider>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );
};

export default withTheme;
