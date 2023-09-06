import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, View, Text, ImageBackground } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { results as movies } from '../../utils/allMovies.json';
import Movie from '../../components/Movie';
import MovieInfo from '../../components/MovieInfo';

export default function MovieId() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movies.find((item) => item.id == id);
    setMovie(foundMovie);
  }, [id]);

  return (

    //<ImageBackground
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        className="bg-blue-100 flex-1"
        // style={{ width: "100%", height: Dimensions.get("screen").height }}
        // source={require("../../assets/movie-model.png")}
        resizeMode="cover"
      >
        {
          movie ? (
            <>
              <Movie
                title={movie.title}
                poster={movie.poster_path}
                overview={movie.overview}
              >
                <MovieInfo
                  releaseDate={movie.release_date}
                  genreId={movie.genre_ids[0]}
                  voteAverage={movie.vote_average.toFixed(1)}
                />
              </Movie>
            </>
          ) : (
            <View className="flex justify-center items-center">
              <Text className="text-white">Filme não encontrado</Text>
            </View>
          )
        }
      </ImageBackground>
    </>
  );
}
