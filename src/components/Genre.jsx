import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { genres } from '../utils/allGenres.json';

export default function Genre({ genreId }) {

  const [genre, setGenre] = useState("");

  const getAllGenres = () => {
    const genreInfo = genres.find(genre => genre.id === genreId);
    setGenre(genreInfo ? genreInfo.name : "");
  }

  useEffect(() => {
    getAllGenres();
  }, [genreId]);

  return <Text>{genre}</Text>;
}
