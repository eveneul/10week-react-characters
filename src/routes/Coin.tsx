import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import {
  ICoinDetail,
  ICoinDetailPrice,
  ICoinLocation,
  ICoinParams,
} from "../types/coin";
import { Container, Header } from "../components/ui/Container";

function Coin() {
  const { id } = useParams<ICoinParams>();
  const location = useLocation();
  const { state } = useLocation<ICoinLocation>();
  const [coin, setCoin] = useState<ICoinDetail>();
  const [price, setPrice] = useState<ICoinDetailPrice>();

  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
      ).json();

      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${id}`)
      ).json();

      setCoin(res);
      setPrice(priceData);

      console.log(priceData, "priceData");
    })();
  }, []);

  return (
    <>
      <Header>{state.name}</Header>
      <Container>
        <div style={{ color: "#fff" }}>
          <span>Desc: </span>
          <span>{coin?.description}</span>
        </div>

        <div style={{ color: "#fff" }}>
          <span>Rank:</span>
          <span>{coin?.rank}</span>
        </div>

        <div style={{ color: "#fff" }}>
          <span>Last update:</span>
          <span>{price?.last_updated}</span>
        </div>
      </Container>
    </>
  );
}

export default Coin;
