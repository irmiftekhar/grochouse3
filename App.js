/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/screen/Home';
import SearchLocation from './src/screen/SearchLocation';
import UserOption from './src/screen/UserOption';
import StoreDetails from './src/screen/StoreDetails';
import NearYou from './src/screen/NearYou';
import SearchProduct from './src/screen/SearchProduct';
import FreqentSearch from './src/screen/FreqentSearch';
import Help from './src/screen/Help';
import CategoryModel from './src/screen/CategoryModel';
import Bag from './src/screen/Bag';

const Stack = createNativeStackNavigator();
function Screen1(){
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  

  return (
    // <SafeAreaView >
    //   <StatusBar />
    //   <ScrollView>
    //     <Home></Home>
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ header: () => null }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchLocation" component={SearchLocation} Options={{ header: () => true }} />
        <Stack.Screen name="UserOption" component={UserOption} Options={{ header: () => true }} />
        <Stack.Screen name="StoreDetails" component={StoreDetails} Options={{ header: () => true }} />
        <Stack.Screen name="NearYou" component={NearYou} Options={{ header: () => true }} />
        <Stack.Screen name="SearchProduct" component={SearchProduct} Options={{ header: () => true }} />
        <Stack.Screen name="FreqentSearch" component={FreqentSearch} Options={{ header: () => true }} />
        <Stack.Screen name="Help" component={Help} Options={{ header: () => true }} />
        <Stack.Screen name="CategoryModel" component={CategoryModel} Options={{ header: () => true }} />
        <Stack.Screen name="Bag" component={Bag} Options={{ header: () => true }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
