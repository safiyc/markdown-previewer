import React from 'react';
// import * as S from './previewStyles';

function Preview(props) {
  return (
    <div id='preview' dangerouslySetInnerHTML={props.parsed} />
  )
}

export default Preview;