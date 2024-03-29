import React from 'react';

// Shared component
import Left from './components/Left';
import Right from './components/Right';

// Component styles
import styles from './styles';

const Body = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Left />
      <Right />
    </div>
  );
};

export default Body;
