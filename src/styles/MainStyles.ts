import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
  .first {
    background: red;
    overflow: hidden;
  
    .offset {
      width: 100%;
      height: 100%;
    }
  
    .a {
      background: #F5F1EA;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7DBB91;
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #7DBB91; 
          width: 100%;
          height: 100%;
        }
      }
    }
    .b {
      background: #582534;
      width: 100%;
      height: 100%;
    }
    .c {
      background: #0E7397;
      width: 100%;
      height: 100%;
    }
  }

  .second {
    background: green;
  }

  .third {
    background: yellow;
  }
  
  .fourth {
    background: blue;
  }
`;

export const Section = styled.section`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;