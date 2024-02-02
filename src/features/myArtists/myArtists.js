import useMyArtists from "./useMyArtists";
import PlusIcon from "../../assets/img/plus.svg";
import { Button, Container } from "../../components";
import { MyArtistsList, MyArtistsSearch } from ".";

export const MyArtists = ({ children }) => {
  const { artistList, handleSearch, searchValue } = useMyArtists();
  return (
    <Container>
      <Container.Header
        title="My artists"
        complement={
          <Button
            icon={<img src={PlusIcon} alt="add artist" draggable={false} />}
            onClick={() => void 0}
            radius={5}
          />
        }
      />
      <MyArtistsSearch handleSearch={handleSearch} searchValue={searchValue} />
      <MyArtistsList artistList={artistList} />
    </Container>
  );
};
