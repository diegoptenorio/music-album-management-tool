import { InputText } from "../../components";
import "./myArtists.scss"

export const MyArtistsSearch = ({ searchValue, handleSearch }) => {
  return (
    <div className="search">
      <InputText
        icon="search"
        label="Search"
        name="search"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};