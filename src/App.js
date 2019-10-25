import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

import Preview from './components/Preview/Preview';
import Editor from './components/Editor/Editor';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import initialText from './asset/initialText';

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
        <Header />
        <Preview parsed={this.createMarkup()} />
        <Editor value={this.state.markdown} onChangeVal={this.onChangeInputText} />
        <Footer />
      </div>
    );
  };
};

export default App;
