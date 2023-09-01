import { SafeAreaView, Dimensions } from 'react-native';
import Header from '../../components/Header';

export default function Profile() {

  return (
    <SafeAreaView
      className="bg-blue-100 flex-1"
      style={{ width: "100%", height: Dimensions.get("screen").height }}
    >
      <Header title="Editar Perfil" goBack="/home" />
    </SafeAreaView>
  );
}
