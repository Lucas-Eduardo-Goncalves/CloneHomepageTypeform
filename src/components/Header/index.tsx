import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

export const Header: React.FC = () => {

  const { scrollYProgress } = useViewportScroll();
  
  const headerY = useTransform(scrollYProgress, 
    [0.038, 0.058], 
    ['0%', "-100%"]
  );

  return (
    <Container 
      style={{
        y: headerY
      }}
    />
  )
};