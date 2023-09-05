import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, Dimensions, ScrollView, Text } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import PopularMovies from '../../components/PopularMovies';
import Header from '../../components/Header';
import { results as movies } from '../../utils/allMovies.json';
import { genres } from '../../utils/allGenres.json';
import { Link } from "expo-router";

export default function HomePage() {

  const [selectedGender, setSelectedGender] = useState(0);

  const numberOfMoviesForCarousel = 3;
  const numberOfPopularMovies = 20;
  const addItemAllInMovieGenres = { "id": 0, "name": "Todos" };
  const allMovieGenres = [addItemAllInMovieGenres, ...genres];

  const getMoviesByQuantity = (data, count, random) => {
    if (count >= data.length || random === false) {
      return data.slice(0, count);
    }
    const shuffledArray = [...data].sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };
  
  //console.log(JSON.stringify(allMovieGenres, null, '\t'));
  
  return (
    //<ImageBackground
    <SafeAreaView
      className="bg-blue-100 flex-1"
      style={{ width: "100%", height: Dimensions.get("screen").height }}
    //source={require("../../assets/home-model.png")}
    //resizeMode="cover"
    >
      <Header
        title="Olá Everton!"
        email="evertonnfs2@gmail.com"
        user
      />

      <Link className="m-10" href="/movie/615656"><Text>passe id</Text></Link>

      <SearchBar button placeholder="Pesquise pelo título..." />
      <ScrollView
        className="mb-[20%]"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Carousel
          movies={getMoviesByQuantity(movies, numberOfMoviesForCarousel, true)}
        />
        <Categories
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          moviesCategories={allMovieGenres}
        />
        <PopularMovies
          selectedGender={selectedGender}
          movies={getMoviesByQuantity(movies, numberOfPopularMovies, false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
