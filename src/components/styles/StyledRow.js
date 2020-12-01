import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  text-decoration: none;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.05);
    img {
      filter: saturate(75%) blur(0px) opacity(95%);
    }
    h2 {
      color: var(--vpn-color);
    }
  }
  &:nth-child(even) {
    background-color: #eaeaea;
  }

  color: #444;
  display: grid;
  grid-template-columns: auto 0.6fr 3fr;
  gap: 15px;
  align-items: center;
  transition: all 0.3s;
  font-family: var(--specialFont);
  max-width: 100%;
  padding: 15px 0;
  // &.emphasis {
  //   background-color: #fef4ca;
  // }

  img {
    width: 40px;
    border-radius: 20%;
    filter: saturate(50%) blur(0.75px) opacity(90%);
    transition: all 0.3s;
    margin-left: 7px;
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h2 {
      position: relative;
      transition: all 0.3s;
      font-size: 19px;
      margin: 0;
      font-family: var(--mainFont);
      @media only screen and (min-width: 960px) {
        font-size: 21px;
      }
    }
  }

  .all-details {
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(8, 1fr);
    gap: 7px;
    align-items: center;
    @media only screen and (min-width: 960px) {
      grid-template-columns: repeat(8, 1fr);
      gap: 15px;
    }
    .info {
      display: unset;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      @media only screen and (min-width: 960px) {
        // display: flex;
      }
      .tag {
        font-weight: 300;
        width: 100%;
      }
    }
  }
`;
