import styled from 'styled-components';

export default styled.header`
  background: white;
  padding: 0;
  margin: 0 0 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .container {
    margin: 0 auto;
    padding: 12px var(--defSidePadding) 15px var(--defSidePadding);
    max-width: var(--maxWidth);
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: 1fr;
    align-items: start;
    @media only screen and (min-width: 680px) {
      grid-template-columns: 1fr 1fr 3fr;
    }
    #general-info {
      display: none;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      @media only screen and (min-width: 767px) {
        display: flex;
      }
      p {
        margin: 0 0 5px;
        color: var(--grey500);
      }
      .buttons {
        display: flex;
        button {
          box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
          border: 1px solid #ddd;
          border-radius: var(--buttonRadius);
          background-color: #fff;
          cursor: pointer;
          transition: all 0.3s;
          line-height: 1;
          padding: 6px 18px;
          &:disabled {
            cursor: unset;
            opacity: 0.8;
            box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.01);
            background-color: #fefefe;
          }
          &:not(:disabled):hover {
            border-color: #888;
            color: #1a936b;
          }
          &:not(:disabled):focus {
            border-color: #aaa;
            box-shadow: 0 0 0 2px var(--secondary300);
            color: #222;
            outline: none;
          }
          &:last-child {
            margin-left: 12px;
          }
        }
      }
    }
  }
`;
