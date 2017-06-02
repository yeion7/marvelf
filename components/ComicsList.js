import React from 'react';

export default ({ comics }) => (
  <div className="comics">
    <h3>Related comics</h3>
    <div className="comics-list">
      {new Array(4)
        .fill(null)
        .map((_, index) => <span className="comic-name">{comics[index].title}</span>)}
    </div>

    <style jsx>{`

      h3 {
        color: #756a69;
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
        margin-top: 10px;
        color: #756a69;
      }



      `}</style>
  </div>
);
