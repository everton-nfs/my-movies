import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import UserProfile from '../../components/UserProfile';
import SearchBar from '../../components/SearchBar';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import PopularMovies from '../../components/PopularMovies';

const featuredMovies = [
  {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    title: "Super Mario Bros. O Filme",
    launchDate: "2023"
  },
  {
    id: 2,
    image:
      "https://www.themoviedb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    title: "Velozes e Furiosos 10",
    launchDate: "2023"
  },
  {
    id: 3,
    image:
      "https://www.themoviedb.org/t/p/original/kVd3a9YeLGkoeR50jGEXM6EqseS.jpg",
    title: "Homem-Aranha: Através do Aranhaverso",
    launchDate: "2023"
  },
];

const movies = [
  {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/original/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    title: "Elementos",
    category: "Animação",
    avaliation: 4.6
  },
  {
    id: 2,
    image:
      "https://www.themoviedb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    title: "Transformers: O Despertar das Feras",
    category: "Ação",
    avaliation: 4.3
  },
  {
    id: 3,
    image:
      "https://www.themoviedb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    title: "Agente Stone",
    category: "Mistério",
    avaliation: 4.8
  },
  {
    id: 4,
    image:
      "https://www.themoviedb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    title: "The Flash",
    category: "Ação",
    avaliation: 4.1
  },
  {
    id: 5,
    image:
      "https://www.themoviedb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    title: "Barbie",
    category: "Comédia",
    avaliation: 4.8
  },
];

const moviesCategories = [
  {
    id: 1,
    title: "Todos"
  },
  {
    id: 2,
    title: "Comédia"
  },
  {
    id: 3,
    title: "Animação"
  },
  {
    id: 4,
    title: "Documentário"
  }
];

export default function HomePage() {
  const [selectedGender, setSelectedGender] = useState(1);

  return (
    //<ImageBackground
    <SafeAreaView
      className="bg-blue-100 flex-1"
      style={{ width: "100%", height: Dimensions.get("screen").height }}
    //source={require("../../assets/home-model.png")}
    //resizeMode="cover"
    >
      <UserProfile />
      <SearchBar />
      <ScrollView
        className="mb-[20%]"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Carousel images={featuredMovies} />
        <Categories
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          moviesCategories={moviesCategories}
        />
        <PopularMovies movies={movies} />
      </ScrollView>
    </SafeAreaView>
  );
}
