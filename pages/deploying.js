import Head from 'next/head';
import { Flex, Box } from 'reflexbox';
import { Text, Heading, Divider } from 'rebass';

import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default () => (
  <div>
    <Head>
      <title>Exobot : Deploying Exobot </title>
    </Head>

    <Navbar currentPage="/deploying" />

    <Footer />
  </div>
);
