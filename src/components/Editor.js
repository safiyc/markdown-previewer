import React from 'react';

export default function Editor(props) {
  return (
    <div>
      <style jsx>{`
          textarea {
            width: 70%;
            height: 200px;
            margin: 0 auto;
            display: block;
          }
        `}</style>

      <textarea id='editor' value={props.value} onChange={props.onChangeVal}>
      </textarea>
    </div>
  );
};