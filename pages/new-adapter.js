import Head from 'next/head';
import { Flex, Box } from 'reflexbox';
import { Text, Heading, Divider, Pre, Section, SectionHeader } from 'rebass';

import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default () => (
  <div>
    <Head>
      <title>Exobot : Building a New Adapter</title>
    </Head>

    <Navbar currentPage="/new-plugin" />

    <Box p={3} col={8}>
      <Heading level={1}>
        Building Adapters
      </Heading>

      <Text mt={2}>
        Adapters allow your bot to connect to a chat service, such as
        Slack or Discord. exobot comes with a shell adapter by default, but you
        could also build your own for your chat service of choice. Some examples:
      </Text>

      <ul>
        <li><a href="https://github.com/exoplay/exobot-adapter-slack">@exoplay/exobot-plugin-slack</a></li>
        <li><a href="https://github.com/exoplay/exobot-adapter-discord">@exoplay/exobot-plugin-discord</a></li>
        <li><a href="https://github.com/exoplay/exobot-adapter-twitch">@exoplay/exobot-plugin-twitch</a></li>
      </ul>

      <Section>
        <SectionHeader
          heading="An Example Adapter"
        />

      </Section>

      <Section>
        <SectionHeader
          heading="A Detailed Anatomy of an Adapter "
        />
      </Section>
    </Box>

    <Footer />
  </div>
);
