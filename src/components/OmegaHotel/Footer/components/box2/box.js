import React from 'react';

// Material UI components
import ArrowRight from '@material-ui/icons/ArrowRightOutlined';

// Shared components
import { AnimateTypography, AnimateIcon } from '../index';

// Component styles
import styles from './styles';

const Box2 = props => {
  const classes = styles(props);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <AnimateTypography
          effect='slideUp'
          text='Location'
          delay={1400}
          variant='h5'
        />
      </div>

      <div className={classes.body}>
        <AnimateTypography
          effect='slideUp'
          text='Begin your journey'
          delay={1400}
          display='inline'
          variant='h4'
        />

        <AnimateIcon effect='slideRight' delay={1400}>
          <ArrowRight />
        </AnimateIcon>
      </div>
    </div>
  );
};

export default Box2;
