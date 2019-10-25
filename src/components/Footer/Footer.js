import React from 'react';
// import * as S from './footerStyles';

export default function Footer() {
  return (
    <footer>
      <style jsx>{`
        footer {
          // position: absolute;
          // bottom: 10px;
          width: 100%;
          text-align: center;
        } 
        a {
          color: black;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <a href="http://www.safiycham.com/" target="_blank" rel='noopener noreferrer'>
        Markdown Previewer&nbsp;&ndash;&nbsp;safiy cham &nbsp;&#169;&nbsp;2019
      </a>
    </footer>
  );
}