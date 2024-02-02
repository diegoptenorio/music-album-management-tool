import { MyArtists as Root } from "./myArtists"
import { MyArtistsSearch } from "./myArtistsSearch";
import { MyArtistsList } from "./myArtistsList";

Root.Search = MyArtistsSearch;
Root.List = MyArtistsList;

const MyArtists = Root;

export default MyArtists;