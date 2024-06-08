import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';


//Use createTheme to generate a theme object. Then, pass it as a prop to ThemeProvider.
const theme = createTheme({
  lightColors: {
    primary: 'yellow'
  },
  darkColors: {
    primary: 'black'
  },
  components: {
    Button: {
      raised: false,
    },
  },
});


export default function App() {
  return (
   
    <ThemeProvider theme={theme}>
       <NavigationContainer>

       <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>

       </NavigationContainer>
   
    </ThemeProvider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
