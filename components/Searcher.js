import React from 'react';

const Searcher = () => (
  <header>
    <img src="/static/logo.png" alt="Marvel Logo" className="logo" />
    <form>
      <input type="text" placeholder="Seach character..." />
      <button><img src="/static/search.png" alt="search icon" className="icon" /></button>
    </form>

    <style jsx>{`
        header {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 72px;
          width: 100%;
          background: #2d2727;
          padding: 0 8px;
        }

        .logo {
          height: 48px;
          display: none
        }

        form {
          display: flex;
          width: 90%;
        }

        input {
          height: 48px;
          width: 100%;
          border-radius: 4px 0 0 4px;
          border: none;
          padding: 0 18px;
          font-family: inherit;
          font-size: 1em;
          outline: none;

        }

        button {
          background: white;
          border: none;
          width: 40px;
          height: inherit;
          margin: 0;
          padding: 0;
          border-radius: 0 4px 4px 0;
          outline: none;
        }
        .icon {
          width: inherit;
          height: inherit;
        }

        @media screen and (min-width: 769px) {
          .logo {
            display: flex
          }
        }

        @media screen and (min-width: 769px) {
          form {
            padding: 20%
          }
        }

      `}</style>
  </header>
);

export default Searcher;
