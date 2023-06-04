import { useQuery } from "react-query";
import { Container, DetailContainer, Header } from "../components/ui/Container";
import { charactersDetailAPI } from "../api/character";
import { useParams } from "react-router-dom";
import { characterDetailType, characterType } from "../types/characters";

export default function CharacterDetail() {
  const { id } = useParams<characterType>();

  const characterNum = Number(id);

  const { isLoading, data: character } = useQuery<characterDetailType>(
    ["characterDetail", characterNum],
    () => charactersDetailAPI(characterNum)
  );

  console.log(character);

  return (
    <>
      <Header>
        <h2>{character?.name}</h2>
      </Header>
      <DetailContainer>
        <div className="img-box">
          <img src={character?.imageUrl} alt={character?.name} />
        </div>
        <ul className="film-list">
          {character?.films.map((item, index) => (
            <li className="film-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </DetailContainer>
    </>
  );
}
