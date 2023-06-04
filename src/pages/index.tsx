import { Link } from "react-router-dom";
import { Container, Header } from "../components/ui/Container";
import { Item, List } from "../components/ui/list";
import { useQuery } from "react-query";
import { charactersAPI } from "../api/character";
import { charactersType } from "../types/characters";
import { Loading } from "../components/ui/loading";

export default function Characters() {
  const { isLoading, data: character } = useQuery<charactersType[]>(
    "characters",
    charactersAPI
  );

  return (
    <>
      <Header>
        <h1>Disney Characters List!</h1>
      </Header>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
          <List>
            {character?.slice(0, 30).map((item, index) => (
              <Item key={index}>
                <Link to={`/character/${item.id}`}>
                  <div className="img-box">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  <div className="title-box">
                    <span className="title">{item.name}</span>
                  </div>
                </Link>
              </Item>
            ))}
          </List>
        </Container>
      )}
    </>
  );
}
