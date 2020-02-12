import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogosDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 3% 20%;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 5%;
  border-radius: 5px;
  box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 0.75);
`;

const LogoH2 = styled.h2`
  color: white;
  text-decoration: none;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
`;

const Logos = ({ coinData }) => {
  return (
    <LogosDiv>
      {coinData.map(coin => (
        <Link to={`/charts/${coin.id}`} key={coin.name}>
          <LogoDiv>
            <LogoH2 className="coin__title">{coin.name}</LogoH2>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
          </LogoDiv>
        </Link>
      ))}
    </LogosDiv>
  );
};
export default Logos;
