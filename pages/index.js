import Head from 'next/head';
import { Flex, Box } from 'reflexbox';
import { Text, Heading, Divider, Pre } from 'rebass';

import ExobotChat from '../components/exobotChat';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default () => (
  <div>
    <Head>
      <title>Exobot: An elegant chatbot, for a more civilized age</title>
    </Head>

    <Navbar currentPage="/" />

    <Flex align="baseline" justify="space-between">
      <Box col={6} p={3}>
        <Heading level={1}>
          Exobot
        </Heading>

        <Heading level={2}>
          An elegant chatbot, for a more civilized age.
        </Heading>

        <Text mt={2}>
          Exobot is a useful chatbot that can do all kinds of things - schedule
          events, take polls, give out points, and far more. It connects to all
          kinds of chat services - Slack, Discord, and Twitch, just to name a
          few.
        </Text>

        <Text mt={2}>
          Exobot is <b>open source{' '}</b> and written in <b>ES7{' '}</b> using the
          latest Javascript has to offer. Decorators (maybe not technically ES7)
          and async/await provide for easy-to-write plugin and chat service
          adapter structures. It has a robust, <b>webpack-based build system{' '}</b>
          that generates a single file that you can deploy easily to any
          host, such as <a href="https://now.sh">now.sh</a>.
        </Text>

        <Text mt={2}>
          Try out the demo on the right: it's a live Exobot instance, running
          100% client-side. (That's right - you can run it without requiring a
          server at all. Check out your network tab. For this docs site, it's
          embedded into a static React website.)
        </Text>

        <Heading level={2} mt={2}>
          Get Started
        </Heading>

        <Text mt={2}>
          The easiest way to set up is with the build tools. With node 6+ installed, run:
        </Text>

        <Pre>
{`npm install -g @exoplay/exobot-build
mkdir exobot
cd exobot
exobot new bot
npm start`}
        </Pre>

        <Text>
          Check out the docs for more information on configuration, deployment,
          and writing our own plugins and chat service adapters.
        </Text>
      </Box>

      <Box col={6} p={3}>
        <ExobotChat />
      </Box>
    </Flex>

    <Footer />
  </div>
);
