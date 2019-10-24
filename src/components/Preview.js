import React from 'react';

function Preview(props) {
  return (
    <div id='preview' dangerouslySetInnerHTML={props.parsed} />
  )
}

export default Preview;