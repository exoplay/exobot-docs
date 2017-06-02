import Head from 'next/head';
import { Flex, Box } from 'reflexbox';
import { Text, Heading, Divider, Pre, Section, SectionHeader } from 'rebass';

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import ascetic from 'react-syntax-highlighter/dist/styles/ascetic';


import Footer from '../components/footer';
import Navbar from '../components/navbar';

registerLanguage('javascript', js);

export default () => (
  <div>
    <Head>
      <title>Exobot : Building a New Plugin</title>
    </Head>

    <Navbar currentPage="/new-plugin" />

    <Box p={3} col={8}>
      <Heading level={1}>
        Building Plugins
      </Heading>

      <Text mt={2}>
        Building custom plugins is the way to make your bot truly yours, whether
        simple keyword triggers like responding with a gif or YouTube video when
        it hears a word, or something more complex, the strength of Exobot is
        in its flexibility.
      </Text>

      <Section>
        <SectionHeader
          heading="An Example Plugin"
        />

        <SyntaxHighlighter language='javascript' style={ascetic}>
  {`import { ChatPlugin, respond, help, permissionGroup } from '@exoplay/exobot';

  export default class Ping extends ChatPlugin {
    static name = 'ping';

    @help('Says "pong" when you send it "ping"');
    @permissionGroup('ping');
    @respond(/^ping$/);
    pong (match, message) {
      return 'pong';
    }
  }`}
        </SyntaxHighlighter>

        <Text mt={2}>
          In this plugin, we have extended exobot's ChatPlugin class-
          this gives it functionality to respond to chat messages. We've then
          told it to respond to the regex /ping/ by firing a function, called
          pong. The return value of the function is then sent back to the chat
          channel.
        </Text>
      </Section>

      <Section>
        <SectionHeader
          heading="A Detailed Anatomy of a Chat Plugin"
        />

        <Text mt={2}>
          Chat plugins follow the following lifecycle:
        </Text>

        <Text mt={2}>
          First, The constructor is called with options sent in. As the bot
          is initialized with instances of plugins, this is where you would pass in
          configuration options, such as:
        </Text>

        <SyntaxHighlighter language='javascript' style={ascetic}>
{`import { ChatPlugin, respond, help, permissionGroup } from '@exoplay/exobot';

class StatusPlugin extends ChatPlugin {
  constructor (options) {
    super(options);
    this.endpoint = options.endpoint;
  }

  //...

  @help('Gets the status of the configured endpoint.');
  @permissionGroup('get');
  @respond(m => m.text === 'status');
  async getStatus () {
    const res = await this.http.get(this.endpoint);
    return res.statusCode;
  }
}`}
        </SyntaxHighlighter>

        <Text mt={2}>
          In the above example, we'd initialize the exobot instance
          with plugins: <code>{`{ status: [StatusPlugin, { endpoint: 'https://github.com' }] } `}</code>
          to pass in the options we need later on.
        </Text>


        <Text mt={2}>
          You'll want to give the plugin a static name property - this
          is used if you use the permissions plugin to restrict access to
          commands.
        </Text>

        <Text mt={2}>
          <code>listen</code> and <code>respond</code> are decorators that take a function and
          fire the method when a match is found. <code>listen</code> and <code>respond</code> are the most
          important parts of your chat plugin - these allow the bot to interact
          with chat. Each can take either a regex or a function, and if a match
          is found (or, if a function, if it is truthy), it will fire the
          function passed in. Functions for responding can be promises (or ES7
          async functions) and will resolve when the promises do. This makes it
          easy to write asynchronous code, such as firing http requests.
        </Text>

        <Text mt={2}>
          The responding function gets two arguments: a match object,
          which is either the regex's exec response or the function return value,
          and a Message object, which contains the original message, user, and
          whether the message is a whisper.
        </Text>

        <Text mt={2}>
          You can optionally add a <code>help</code> decorator, which exobot's help
          plugin uses to explain to useres how the plugin works.
        </Text>

        <Text mt={2}>
          You should also add a <code>permissionsGrou</code>p, which you can then
          use with exobot's Permissions plugin to restrict access to certain
          commands. In the following case, you can give access to <code>status.get</code> to
          groups, and if you deny access by default in configuration, only users
          in the group with access to <code>status.get</code> can use the command. (The bot
          will ignore the command from everyone else.)
        </Text>

        <Text mt={2}>
          Finally, the bot also exposes <code>bot.http</code>, which is a
          promise-ified superagent wrapper, to make http calls easy to make.
        </Text>


        <SyntaxHighlighter language='javascript' style={ascetic}>
{`import { ChatPlugin, respond, listen, permissionsGroup, help } from '@exoplay/exobot';

class StatusPlugin extends ChatPlugin {

  static name = 'Status';

  help = [
    'Get the status of an http endpoint. Responds to \`status\` or listens to',
    'status <http://whatever.com>.'
  ].join('\\n');

  constructor (options) {
    super(options);
    this.endpoint = options.endpoint;
  }

  register (bot) {
    super.register(bot);

    if (!this.endpoint) {
      bot.log.warn('No endpoint passed in to StatusPlugin.');
    }

    this.respond(/status/, this.getStatus);
    this.listen(/^status (http:\\/\\/\\S+)/, this.getStatus);
    this.listen(m => m.text === 'status', this.getStatus);
  }


  @help('use status or status <http> to get http status codes.');
  @permissionsGroup('get');
  @respond(/^status$/);
  @listen(/^status (http:\\/\\/\\S+)/);
  @listen(m => m.text === 'status');
  async getStatus (match, message) {
    let endpoint = this.endpoint;

    // if the regex succeeded, match[1] should be an http endpoint
    if (match && match.length) {
      endpoint = match[1];
    }

    const res = await this.http.get(this.endpoint);
    return res.statusCode;
  }
}`}
        </SyntaxHighlighter>
      </Section>
    </Box>

    <Footer />
  </div>
);
