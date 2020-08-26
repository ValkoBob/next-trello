import React, { FC } from 'react';
import Board from '../src/core/features/board/components/board';
import Layout from '../src/layouts/layout/components/layout';

const Home: FC = () => (
  <Layout title={'Next Trello'}>
    <Board/>
  </Layout>
);

export default Home;
