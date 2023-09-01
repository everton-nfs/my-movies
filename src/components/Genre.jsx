import React, { useState, useRef, useEffect } from 'react';
import { Text } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
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

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      className="text-blue-50 text-xs"
      style={{ fontFamily: "Poppins_500Medium" }}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {genre}
    </Text>
  );
}
