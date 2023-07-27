import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import { Routes } from './src/routes';
import { theme } from './src/themes';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded && <Routes />}
    </NativeBaseProvider>
  );
}


// import { SafeAreaView, Text, useWindowDimensions } from "react-native";
// import Pdf from "react-native-pdf";

// const source = {
//   uri: "https://samples.leanpub.com/thereactnativebook-sample.pdf",
//   cache: true,
// };

// export default function App() {
//   const { width, height } = useWindowDimensions();

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Home />
//       {/* <Pdf
//         source={source}
//         onLoadComplete={(numberOfPages, filePath) => {
//           console.log(`Number of pages: ${numberOfPages}`);
//         }}
//         onPageChanged={(page, numberOfPages) => {
//           console.log(`Current page: ${page}`);
//         }}
//         onError={(error) => {
//           console.log(error);
//         }}
//         onPressLink={(uri) => {
//           console.log(`Link pressed: ${uri}`);
//         }}
//         style={{ flex: 1, width, height }}
//       /> */}
//     </SafeAreaView>
//   );
// }
