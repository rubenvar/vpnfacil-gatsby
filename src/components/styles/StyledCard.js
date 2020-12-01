import styled from 'styled-components';

export default styled.article`
  border: 2px solid var(--primary300);
  border-radius: var(--cardRadius);
  color: #444;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr auto 4.5fr auto;
  transition: all 0.3s;
  font-family: var(--specialFont);
  position: relative;
  &:hover {
    transform: scale(1.02);
    img {
      filter: saturate(75%) blur(0px) opacity(90%);
    }
    h2 {
      color: var(--vpn-color);
    }
    .go {
      background-color: var(--primary300);
      &:hover {
        background-color: var(--primary500);
      }
    }
  }
  img {
    position: absolute;
    width: 40px;
    top: 10px;
    left: 10px;
    border-radius: 20%;
    filter: saturate(30%) blur(0.75px) opacity(70%);
    transition: all 0.3s;
  }
  h2 {
    position: relative;
    transition: all 0.3s;
    font-size: 22px;
    margin: 0;
    text-align: center;
    font-family: var(--mainFont);
    align-self: center;
    @media only screen and (min-width: 560px) {
      font-size: 28px;
    }
  }
  a {
    text-decoration: none;
    &:hover {
      .go {
        color: white;
      }
    }
  }
  ul {
    margin: 24px 0;
    li {
      padding: 0 20px;
      display: flex;
      margin-bottom: 14px;
      &:last-child {
        margin: 0;
      }
      > span {
        margin-left: 10px;
      }
      .tag {
        font-weight: 300;
      }
    }
  }
  .go {
    background-color: var(--primary100);
    text-align: center;
    border-radius: 0;
    padding: 16px 0;
    transition: all 0.3s;
    font-size: 20px;
    @media only screen and (min-width: 580px) {
      font-size: unset;
    }
  }
`;
