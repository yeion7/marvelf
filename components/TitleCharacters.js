import React from 'react';

const TitleCharacters = () => (
  <div className="subtitle">
    <img src="/static/characters.png" alt="Icon characters" />
    <h1>Characters</h1>
    <style jsx>{`
      .subtitle {
        display: flex;
        padding-bottom: 30px;
      }
      `}</style>
  </div>
);

export default TitleCharacters;
