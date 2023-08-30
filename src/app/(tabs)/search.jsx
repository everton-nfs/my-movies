import React, { useState } from 'react';
import { SafeAreaView, Dimensions, ScrollView } from 'react-native';
import UserProfile from '../../components/UserProfile';
import SearchBar from '../../components/SearchBar';
import PopularMovies from '../../components/PopularMovies';
import MoviesSearch from '../../components/MoviesSearch';

const movies = [
  {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/original/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    title: "Elementos1",
    category: "Animação",
    avaliation: 4.6
  },
  {
    id: 2,
    image:
      "https://www.themoviedb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    title: "Transformers: O Despertar das Feras2",
    category: "Ação",
    avaliation: 4.3
  },
  {
    id: 3,
    image:
      "https://www.themoviedb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    title: "Agente Stone3",
    category: "Mistério",
    avaliation: 4.8
  },
  {
    id: 4,
    image:
      "https://www.themoviedb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    title: "The Flash4",
    category: "Ação",
    avaliation: 4.1
  },
  {
    id: 5,
    image:
      "https://www.themoviedb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    title: "Barbie5",
    category: "Comédia",
    avaliation: 4.8
  },
  {
    id: 6,
    image:
      "https://www.themoviedb.org/t/p/original/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    title: "Elementos6",
    category: "Animação",
    avaliation: 4.6
  },
  {
    id: 7,
    image:
      "https://www.themoviedb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    title: "Transformers: O Despertar das Feras7",
    category: "Ação",
    avaliation: 4.3
  },
  {
    id: 8,
    image:
      "https://www.themoviedb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    title: "Agente Stone8",
    category: "Mistério",
    avaliation: 4.8
  },
  {
    id: 9,
    image:
      "https://www.themoviedb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    title: "The Flash9",
    category: "Ação",
    avaliation: 4.1
  },
  {
    id: 10,
    image:
      "https://www.themoviedb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    title: "Barbie10",
    category: "Comédia",
    avaliation: 4.8
  },
  {
    id: 11,
    image:
      "https://www.themoviedb.org/t/p/original/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    title: "Elementos11",
    category: "Animação",
    avaliation: 4.6
  },
  {
    id: 12,
    image:
      "https://www.themoviedb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    title: "Transformers: O Despertar das Feras12",
    category: "Ação",
    avaliation: 4.3
  },
  {
    id: 13,
    image:
      "https://www.themoviedb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    title: "Agente Stone13",
    category: "Mistério",
    avaliation: 4.8
  },
  {
    id: 14,
    image:
      "https://www.themoviedb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    title: "The Flash14",
    category: "Ação",
    avaliation: 4.1
  },
  {
    id: 15,
    image:
      "https://www.themoviedb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    title: "Barbie15",
    category: "Comédia",
    avaliation: 4.8
  },
  {
    id: 16,
    image:
      "https://www.themoviedb.org/t/p/original/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    title: "Elementos16",
    category: "Animação",
    avaliation: 4.6
  },
  {
    id: 17,
    image:
      "https://www.themoviedb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    title: "Transformers: O Despertar das Feras17",
    category: "Ação",
    avaliation: 4.3
  },
  {
    id: 18,
    image:
      "https://www.themoviedb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    title: "Agente Stone18",
    category: "Mistério",
    avaliation: 4.8
  },
  {
    id: 19,
    image:
      "https://www.themoviedb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    title: "The Flash19",
    category: "Ação",
    avaliation: 4.1
  },
  {
    id: 20,
    image:
      "https://www.themoviedb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    title: "Barbie20",
    category: "Comédia",
    avaliation: 4.8
  },
];

export default function Search() {
  const [selectedGender, setSelectedGender] = useState(1);

  return (
    <SafeAreaView
      className="bg-blue-100 flex-1"
      style={{ width: "100%", height: Dimensions.get("screen").height }}
    >
      <UserProfile />
      <SearchBar />
      <ScrollView
        className="mb-[20%]"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <MoviesSearch movies={movies}/>
      </ScrollView>
    </SafeAreaView>
  );
}
