import React, { Component } from 'react';
import marked from 'marked';

const initialText = `# Welcome to Markdown Previewer  
## Type markdown text in the editor to render in real-time parsed markdown.  
[Markdown Reference](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  

> 'Sometimes life is about risking everything for a dream no one can see but you.'
> Unknown Author

![alt text | 10x10](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 "Banner Matrix Code")

\`<p>This line is an inline code.</p>\`  

\`\`\`javascript
// This is a sample code block:
let x = 5;
let y = 10;
function sumNums () {
  return x + y;
};
\`\`\`

**Here is a list of todo tasks:**
1. Babysit nephew
2. Grocery shopping
3. Clean
..* garage
..* room
4. Community event
`;

export default class Editor extends Component {
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
            width: 100%;
          }
        `}</style>
        <textarea id='editor' value={this.state.markdown} onChange={this.onChangeInputText} style={{ width: '70%', height: '200px', margin: '0 auto', display: 'block' }}></textarea>
        <div id='preview' dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    );
  };
};