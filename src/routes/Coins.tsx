import React, { useEffect, useState } from "react";
import { Container, Header } from "../components/ui/Container";
import { Item, List } from "../components/ui/list";
import { Title } from "../components/ui/Text";
import { ICoin } from "../types/coin";

function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.coinpaprika.com/v1/coins`);
      const json = await res.json();
      setCoins(json);
    })();

    console.log(coins, "coins");
  }, []);

  return (
    <>
      <Header>
        <Title>Coin List</Title>
      </Header>
      <Container>
        <List>
          {coins.slice(0, 10).map((item, index) => (
            <Item key={index}>
              <h2 className="title">{item.name}</h2>
              <span className="rank">{item.rank}</span>
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
}

export default Coins;
