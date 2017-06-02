import React from 'react';
import PropTypes from 'prop-types';

import TitleCharacters from './TitleCharacters';
import Character from './Character';
import characters from '../characters.json';
import comics from '../comics.json';

const Characters = () => (
  <div className="container">
    <TitleCharacters />
    <div className="wrapper">
      {characters.data.results.map(character => (
        <Character key={character.id} {...character} comics={comics.data.results} />
      ))}
    </div>
    <style jsx>{`
      .container {
        padding: 10px
      }

      .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

      }
      `}</style>
  </div>
);

Characters.propTypes = {
  characters: PropTypes.array,
};

export default Characters;
