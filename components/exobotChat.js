import React,  { Component } from 'react';
import { Exobot, adapters, plugins } from '@exoplay/exobot';
import Points from '@exoplay/exobot-plugin-points';

import { Flex, Box } from 'reflexbox';
import { Card, Heading, Block, Text, Media, Divider, Input, ButtonOutline, Badge } from 'rebass';
import moment from 'moment';

import theme from '../pages/theme';

const TRY_COMMANDS = [
  '"hi"',
  '"exobot uptime"',
  '"chatbots++"',
  '"exobot help"',
  'something new!',
];

export default class ExobotChat extends Component {
  state = {
    messages: [],
    exobotDB: '',
    config: {
      name: 'Exobot',
      key: 'exobot-key',
      plugins: {
        events: [adapters.Event, {}],
        uptime: [plugins.Uptime, {}],
        greetings: [plugins.Greetings, {}],
        help: [plugins.Help, {}],
        points: [Points, {}],
      },
      requirePermissions: false,
      readFile: () => (this.state.exobotDB),
      writeFile: (f) => {
        this.setState({ exobotDB: f });
      },
      enableRouter: false,
    },
    try: TRY_COMMANDS[0],
    tryIndex: 0,
  }

  sendMessage = (e) => {
    e.preventDefault();
    this.eventAdapter.emitter.emit('message', this.input.value);
    this.input.value = '';

    this.setState({
      try: TRY_COMMANDS[Math.min(this.state.tryIndex + 1, TRY_COMMANDS.length - 1)],
      tryIndex: Math.min(this.state.tryIndex + 1, TRY_COMMANDS.length - 1)
    });
  }

  addMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, {
        ...message,
        timestamp: moment()
      }],
    });

    this.chatbox.scrollTop = this.chatbox.scrollHeight;
  }

  setErrorMessage = (error) => {
    this.setState({
      error: error,
    });
  }

  updateConfig = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    this.exobot = new Exobot(this.state.config);

    this.exobot.emitter.on('initialized', () => {
      this.eventAdapter = this.exobot.getAdapterByName('events');

      this.eventAdapter.emitter.on('send', this.addMessage);
      this.eventAdapter.emitter.on('whisper', this.addMessage);
      this.eventAdapter.emitter.on('receive', this.addMessage);
      this.eventAdapter.emitter.on('error', this.setErrorMessage);
    });
  }

  render() {
    return (
      <Card>
        <form onSubmit={ this.sendMessage }>
          <Box pb={2} pt={1}>
            <Heading level={2} size={3}>
              Chat with Exobot
            </Heading>
          </Box>

          <Divider my={0} />

          <div style={{ height: '300px', overflow: 'auto' }} ref={(chatbox) => this.chatbox = chatbox }>
            { this.state.messages.map((m, i) => (
              <Box pt={1} key={`chat-${i}`}>
                <Media align="top" img={`/static/images/${m.user.name.toLowerCase()}.png`} imgHeight={36} imgWidth={36}>
                  <Text small={true}>
                    <b>{ m.user.name }</b>
                    <span style={{ color: theme.small.color }}>{' • '}</span>
                    <small style={{ color: theme.small.color }}>{ m.timestamp.format('LTS') }</small>
                  </Text>
                  { m.text.split('\n').map((t, ti) => <Text key={`chat-${i}-text-${ti}`}>{t}</Text>) }
                </Media>
              </Box>
            )) }
          </div>

          <Box px={0} pt={2} pb={1}>
            <Flex>
              <Box auto>
                <Input
                  baseRef={(input) => this.input = input}
                  name='chat'
                  label='chat'
                  placeholder={`Try ${this.state.try}`}
                  hideLabel
                  mb={0}
                  rounded='left' />
              </Box>

              <ButtonOutline
                rounded='right'
                children='Send' />
            </Flex>
          </Box>

          { this.state.error ? (
            <Box>
              <Text bold={true} color="red">
                { this.state.error.message }
              </Text>
            </Box>
          ) : null }
        </form>
      </Card>
    );
  }
}
