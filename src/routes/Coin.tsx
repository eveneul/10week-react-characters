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
import { useQuery } from "react-query";
import { coinDetailAPI, coinPriceAPI } from "../api/coins";

function Coin() {
  const { id } = useParams<ICoinParams>();
  const location = useLocation();
  const { state } = useLocation<ICoinLocation>();
  // const [price, setPrice] = useState<ICoinDetailPrice>();

  const { isLoading: coinLoading, data: coin } = useQuery<ICoinDetail>(
    ["coinDatail", id],
    () => coinDetailAPI(id)
  );

  const { isLoading: priceLoading, data: price } = useQuery<ICoinDetailPrice>(
    ["coinPrice", id],
    () => coinPriceAPI(id)
  );

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
