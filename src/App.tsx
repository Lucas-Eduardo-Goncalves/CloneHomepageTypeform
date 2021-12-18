import React, { useEffect } from 'react';

import { FirstAndSecond } from './components/FirstAndSecond';
import { Header } from './components/Header';

import { GlobalStyles } from './styles/GlobalStyles';
import { Main, Section, Sticky } from './styles/MainStyles';

export const App: React.FC = () => {

  useEffect(() => {
    window.scroll({top: 0})
  }, [])

  return (
    <>
      <GlobalStyles />

      <Header /> 

      <Main style={{ height: '1610vh'}}>
        <Section style={{ height: '72.7%'}}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%'}}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%'}}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
};