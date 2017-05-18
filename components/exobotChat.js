import React,  { Component } from 'react';
import { Exobot, adapters, plugins } from '@exoplay/exobot';

export default class ExobotChat extends Component {
  state = {
    messages: [],
    exobotDB: '',
  }

  sendMessage = (e) => {
    e.preventDefault();
    this.eventAdapter.emitter.emit('message', this.input.value);
    this.input.value = '';
  }

  addMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, message],
    });
  }

  componentDidMount() {
    this.exobot = new Exobot({
      name: 'Exobot',
      key: 'exobot-key',
      plugins: {
        events: [adapters.Event, {}],
        uptime: [plugins.Uptime, {}],
        greetings: [plugins.Greetings, {}],
        help: [plugins.Help, {}],
      },
      requirePermissions: false,
      readFile: () => (this.state.exobotDB),
      writeFile: (f) => {
        this.setState({ exobotDB: f });
      },
      enableRouter: false
    });

    this.exobot.emitter.on('initialized', () => {
      this.eventAdapter = this.exobot.getAdapterByName('events');

      this.eventAdapter.emitter.on('send', this.addMessage);
      this.eventAdapter.emitter.on('whisper', this.addMessage);
      this.eventAdapter.emitter.on('receive', this.addMessage);
    });
  }

  render() {
    return (
      <form onSubmit={ this.sendMessage }>
        <ul>
          { this.state.messages.map((m, i) => (
            <li key={ `msg-${i}`}><b>{ m.user.name }</b>: { m.text }</li>
          )) }
        </ul>

        <input type="text" ref={(input) => this.input = input}  />
        <button type="submit">Send</button>
      </form>
    );
  }
}
