import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, Dimensions, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar';
import MoviesSearch from '../../components/MoviesSearch';
import Header from '../../components/Header';
import unidecode from "unidecode";
import { results as movies } from '../../utils/allMovies.json';

export default function Search() {

  const [selectedGender, setSelectedGender] = useState(1);
  const [search, setSearch] = useState("");

  const filtered = search.length > 0
  ? movies.filter(movie => {
    const searchString = unidecode(search.replace(/[\s()-]/g, '').toLowerCase());
    const movieTitle = unidecode(movie.title?.replace(/-/g, '')?.toLowerCase()) || '';

    return (
      movieTitle.includes(searchString) 
    );
  })
  : movies;

  return (
    <SafeAreaView
      className="bg-blue-100 flex-1"
      style={{ width: "100%", height: Dimensions.get("screen").height }}
    >
      <Header title="Pesquisa de Filmes" goBack="/home" />
      <SearchBar 
        text 
        placeholder="Pesquise pelo título..."
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <ScrollView
        className="mb-[20%]"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <MoviesSearch movies={filtered} />
      </ScrollView>
    </SafeAreaView>
  );
}