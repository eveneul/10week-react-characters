import React, { useEffect, useState } from "react";
import { Container, Header } from "../components/ui/Container";
import { Item, List } from "../components/ui/list";
import { Title } from "../components/ui/Text";
import { ICoin } from "../types/coin";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { coinsAPI } from "../api/coins";

function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);

  const { isFetching, isLoading, data } = useQuery<ICoin[]>(
    "coinList",
    coinsAPI
  );
  return (
    <>
      <Header>
        <Title>Coin List</Title>
      </Header>
      <Container>
        <List>
          {data?.slice(0, 10).map((item, index) => (
            <Item key={index}>
              <Link
                to={{
                  pathname: `/${item.id}`,
                  state: { name: item.name },
                }}
              >
                <div className="img-box">
                  <img
                    src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLocaleLowerCase()}`}
                    alt={item.name}
                  />
                </div>
                <h2 className="title">{item.name}</h2>
                <span className="rank">{item.rank}</span>
              </Link>
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
}

export default Coins;
