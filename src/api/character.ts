export async function charactersAPI() {
  return fetch(`https://disney_api.nomadcoders.workers.dev/characters`).then(
    (res) => res.json()
  );
}

export async function charactersDetailAPI(id: number) {
  return fetch(
    `https://disney_api.nomadcoders.workers.dev/characters/${id}`
  ).then((res) => res.json());
}
