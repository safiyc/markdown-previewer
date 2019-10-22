import React from 'react';
import './App.css';

import marked from 'marked';

function App() {
  function createMarkup() {
    return { __html: marked('# Marked in the browser\n\nRendered by **marked**.') };
  }
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

export default App;
