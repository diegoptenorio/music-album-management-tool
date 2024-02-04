import { useState } from "react";

const artists = [
  {
    id: 0,
    name: "The Beatles",
    rating: "8",
  },
  {
    id: 1,
    name: "Elton John",
    rating: "7",
  },
  {
    id: 2,
    name: "Adele",
    rating: "9",
  },
  {
    id: 3,
    name: "The Beatles",
    rating: "8",
  },
  {
    id: 4,
    name: "Elton John",
    rating: "7",
  },
  {
    id: 5,
    name: "Adele",
    rating: "9",
  },
  {
    id: 6,
    name: "The Beatles",
    rating: "8",
  },
  {
    id: 7,
    name: "Elton John",
    rating: "7",
  },
  {
    id: 8,
    name: "Adele",
    rating: "9",
  },
  {
    id: 9,
    name: "The Beatles",
    rating: "8",
  },
  {
    id: 10,
    name: "Elton John",
    rating: "7",
  },
  {
    id: 11,
    name: "Adele",
    rating: "9",
  },
  {
    id: 12,
    name: "The Beatles",
    rating: "8",
  },
  {
    id: 13,
    name: "Elton John",
    rating: "7",
  },
  {
    id: 14,
    name: "Adele",
    rating: "9",
  },
];

const useMyArtists = () => {
  const [searchValue, setSearchValue] = useState('');
  const [artistList, setArtistList] = useState(artists);
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    const filteredList = artists.filter(
      (artist) => artist.name.includes(value) === true
    );
    setArtistList(filteredList);
  }
  return {
    artistList,
    handleSearch,
    searchValue,
  };
};

export default useMyArtists;