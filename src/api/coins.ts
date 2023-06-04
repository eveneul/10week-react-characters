export async function coinsAPI() {
  return fetch(`https://api.coinpaprika.com/v1/coins`).then((res) =>
    res.json()
  );
}

export async function coinDetailAPI(id: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${id}`).then((res) =>
    res.json()
  );
}

export async function coinPriceAPI(id: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${id}`).then((res) =>
    res.json()
  );
}

// export async function characters() {

// }
