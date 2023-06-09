import Basket from './src/screens/Basket';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/basket'

export default function App() {
  const [fontsLoaded] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold

  });

  if (!fontsLoaded) {
    return <View />
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}

