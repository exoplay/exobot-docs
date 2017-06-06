import Head from 'next/head';
import { Box } from 'reflexbox';
import { Text, Heading, Divider, Pre, Section, SectionHeader } from 'rebass';

import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default () => (
  <div>
    <Head>
      <title>Exobot : Setting Up a New Bot</title>
    </Head>

    <Navbar currentPage="/setup" />

    <Box p={3} col={8}>
      <Heading level={1}>
        Bot Setup
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

      <Text mt={2}>
        This will set you up with an npm package with the basics installed,
        create a git repo, generate a sample configuration file, and pre-build
        a bot.
      </Text>

      <Section>
        <SectionHeader
          heading="Configuration Basics"
        />

        <Text>
          There are two primary ways to configure Exobot: you can either use
          a static configuration file with configuration built-in, or you can
          lean on automatically-loaded environment variables to configure your
          bot.
        </Text>

        <Heading level={3} mt={2}>
          The Environmental Way
        </Heading>

        <Text mt={1}>
          Environment-based setup automatically parses environment variables
          based on plugin name. For example, if in your configuration file, you
          have a plugin named <code>giphy</code> and it has a configuration
          parameter called <code>token</code>, you would set an environment
          variable called <code>GIPHY_TOKEN</code> to the proper value.
        </Text>

        <Heading level={3} mt={2}>
          The Explicit Way
        </Heading>

        <Text mt={1}>
          Exobot is configured in its constructor, which takes two arguments - a
          bot name (a required string), and an options object.
        </Text>

        <Text mt={1}>
          The bot name is used for commands - if your bot's name is 'exobot', it
          will respond to commands beginning with 'exobot'. You'll want this to
          match the name used in your chat service (so if its name is actually
          'DEATHBOT_9000' in Slack, you should call it that here too, or people
          may be confused.)
        </Text>

        <Text mt={1}>
          The options object contains all other configuration - such as a list
          of plugins and chat service adapters, log levels, and data encryption
          keys.
        </Text>

        <ul>
          <li><b>alias</b> - an additional way to trigger exobot commands. '/', ';', or 'hey bot', for example.</li>
          <li><b>adapters</b> - an array of initialized chat adapters, such as slack, discord, or twitch. exobot also comes with a shell adapter for playing around in your terminal.</li>
          <li><b>plugins</b> - an array of initialized plugins, such as giphy or points. exobot also comes with help and greetings plugins as examples.</li>
          <li><b>readFile</b> and <b>writeFile</b> - functions called when the in-memory json db is saved. By default, this writes a json file to cwd/data/botname.json, but you could also override the default local file storage to use s3 with <code>@exoplay/exobot-db-s3</code>.</li>
          <li><b>dbPath</b> - if you're using local file storage, you can set where to save. Defaults to cwd/data/botname.json.</li>
        </ul>
      </Section>

      <Section>
        <SectionHeader
          heading="Permissions Management"
        />

        <Text>
          Exobot has a robust group-based permissions model. By default anybody
          can access commands, but you can use the built-in
          <code>{' '}Permissions{' '}</code> plugin to lock down the bot and
          whitelist commands to users in specific groups.
        </Text>

        <Text>
          Running <code>exobot plugin help permission</code> will explain the
          commands used to manage permissions. The general idea is that each
          command in exobot will have a category, such as
          <code>uptime.uptime</code>, and you can whitelist commands for each
          group, and add people to one or more groups. This keeps commands safe
          in public channels, such as locking down the ability to schedule
          events to moderators.
        </Text>
      </Section>

      <Section>
        <SectionHeader
          heading="Webhooks"
        />

        <Text>
          Building on top of the permissions sytem, you can also attach the
          <code>{' '}HTTP{' '}</code> adapter to exobot to allow it to receive
          messages over HTTP. Run <code>exobot plugin help webhook</code> to
          find out about the specific commands. You'll basically create new
          "users" for each webhook, and give each usr a group - so that each
          webhook only has access to the commands you explicitly give it.
        </Text>

        <Text>
          Configure the HTTP adapter for Exobot (done by default when using
          the build tools) to use webhooks, and call it by accessing the server
          exobot is running at, at the port specified, with ?token, ?userid, and
          ?message passed in. This will run the contents of ?message through
          plugins and possibly respond in configured channels.
        </Text>
      </Section>
    </Box>

    <Footer />
  </div>
);
