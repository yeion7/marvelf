import React from 'react';

const Characters = ({ name, thumbnail, description, comics }) => (
  <div className="container">
    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
    <h3 className="name">{name}</h3>
    <div className="description">
      <p>{description || 'No tiene descripción 😕 '}</p>
      <button>VIEW MORE</button>
    </div>

    <div className="comics">
      <h4>Related comics</h4>
      <div className="comics-list">
        {new Array(4)
          .fill(null)
          .map((_, index) => <span className="comic-name">{comics[index].title}</span>)}
      </div>
    </div>
    <style jsx>{`
      .container {
        background: white;
        margin: 1em;
        width: 450px;
        height: 400px;
        position: relative;
        padding: 5px

      }

      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        position: absolute;
        top: -20px;
        left: -20px;
        box-shadow: 6px 6px 24px 0px rgba(0,0,0,0.55);
      }

      .name {
          position: absolute;
          top: -13px;
          left: 170px;
      }

      .description {
        height: 50%;
        padding: 30px 0 0 165px;
      }

      p {
        height: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      button {
        background: red;
        border: none;
        color: white;
        padding: 10px;
        font-weight: 600;
        font-size: 0.9em
      }

      .comics {
        position: relative;
        padding: 5px
      }

      .comics-list {
        padding-top: 10px;
      }


      .comic-name {
        display: inline-block;
        max-width: 400px;
        height: 2em;
        margin: 0 auto;
        font-size: 1em;
        line-height: 1em;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
        width: 50%;
        padding-right: 10%;
        margin-top: 10px
      }



      `}</style>
  </div>
);

export default Characters;
