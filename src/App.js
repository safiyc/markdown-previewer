import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

import Preview from './components/Preview';
import Editor from './components/Editor';

import initialText from './initialText';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: initialText,
      parsedMarkdown: marked(initialText)
    };

    this.onChangeInputText = this.onChangeInputText.bind(this);
  };

  onChangeInputText(e) {
    this.setState({
      markdown: e.target.value,
      parsedMarkdown: marked(e.target.value)
    });
  };

  createMarkup() {
    return { __html: this.state.parsedMarkdown };
  };

  render() {
    return (
      <div>
        <style jsx>{`
          img {
            height: 20px;
            width: 50%;
          }
        `}</style>
        <Preview parsed={this.createMarkup()} />
        <Editor value={this.state.markdown} onChangeVal={this.onChangeInputText} />
      </div>
    );
  };
};

export default App;
