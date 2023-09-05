import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, View, Text } from 'react-native';
import Header from '../../components/Header';
import { useLocalSearchParams } from 'expo-router';
import { results as movies } from '../../utils/allMovies.json';

export default function Movie() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movies.find((item) => item.id == id);
    setMovie(foundMovie);
  }, [id]);

  return (
    <SafeAreaView
      className="bg-blue-100 flex-1"
      style={{ width: '100%', height: Dimensions.get('screen').height }}
    >
      <Header title="Filme" goBack="/home" />

      <View className="flex justify-center items-center">
        {movie ? (
          <View>
            <Text className="text-white">ID: {movie.id}</Text>
            <Text className="text-white">Título: {movie.title}</Text>
            <Text className="text-white">Descrição: {movie.overview}</Text>
          </View>
        ) : (
          <Text className="text-white">Filme não encontrado</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
