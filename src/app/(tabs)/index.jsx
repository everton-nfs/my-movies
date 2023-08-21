import { Text, View } from 'react-native';
import Carousel from '../../components/Carousel';

export default function Home() {

  const images = [
    {
      image:
        'https://i0.wp.com/help.grandchef.com.br/wp-content/uploads/2019/09/ceb-JUmP.png?fit=1600%2C900&ssl=1',
    },
    {
      image:
        'https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg',
    },
    {
      image:
        'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
    },
    {
      image:
      'https://c4.wallpaperflare.com/wallpaper/214/442/543/digital-art-son-goku-dragon-ball-dragon-ball-z-island-hd-wallpaper-preview.jpg'
    }
    // Add more images as needed
  ];

  return (
    <View className="flex justify-center items-center ">
      <Carousel images={images}/>
    </View>
  );
}
