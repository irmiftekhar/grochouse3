import React, { useEffect, useState } from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, Dimensions, ImageBackground , SafeAreaView, TouchableOpacity,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import NearYou from './NearYou';
import SearchBar from './SearchBar';
import List from './List';
import OfferSlide from './OfferSlide'


import APP_URL from './../AppURL'
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const Home = ({ navigation }) => {
  
  const [isLoading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  //  state = {
    // Data: []
  // }

 const componentDidMount = () =>{
  fetch(APP_URL.BaseURL + APP_URL.vendorSearch, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    Vendor_Name: 'mohan eye care ',
  })
  }).then((response) => response.json())
    .then((json) => {
    //  data = json
      ({Data: json})
    // console.log({Data: json});
  })
  .catch((error) => {
    console.error(error);
  });
  }


  useEffect(() => {
    componentDidMount();
  }, []);


  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchLocation')}>
            <Ionicons style={styles.Ionicons} name="location" size={30} color="#EB3223" />
            </TouchableOpacity>
            <Text style={styles.text}>Current Location</Text>
          <AntDesign style={styles.AntDesign} name="down" color="black" />
          <TouchableOpacity style={styles.MaterialIcons} onPress={() => navigation.navigate('UserOption')}>
            <MaterialIcons style={styles.MaterialIcons} name="perm-contact-calendar" color="#EB3223" />
          </TouchableOpacity>
          </View>

          <SearchBar></SearchBar>
          <OfferSlide></OfferSlide>
  
        <Favorit></Favorit>
        <NearYou></NearYou>
        {/* <List data={Data}></List> */}
  
        </View>
        
     </SafeAreaView>

        
    );
  }
  
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex:1
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    header:{
      // flex: 1,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      flexDirection: 'row',
    },
    Ionicons: {
      marginLeft: 15,
      marginLeft: 5,
      fontSize: 26,
    },
    text: {
      fontSize: 23,
      marginLeft: 12,
      fontWeight: 'bold',
      color: "black"
      // numberOfLines: 1,
    },
    AntDesign:{
      fontSize: 18,
      marginTop: 7,
      marginLeft: 10,
      fontWeight: 'bold',
    },
    MaterialIcons: {
      fontSize: 26,
      flex: 1,
      textAlign: 'right',
      marginRight: 15,
      marginTop: 5
    },
    searchInput: {
      // flex: 1,
      height: 50,
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#000000',
      padding: 10,
    },
    input: {
      width: '100%',
      height: 30,
      flex: 4,
      padding: 0,
      marginTop: -4,
      marginLeft: 15,
      fontSize: 15,
      color: 'black'
    },
    miceIcon: {
      flex: 1,
      textAlign: 'right',
      color: '#EB3223'
    },
    slideContainer: {
      // flex: 1,
      height: 180,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'space-around',
      borderRadius: 5,
    },
    backgroundImg: {
      // flex: 1,
      // width: '100%',
      height: 180,
      borderRadius: 5,
    },
    overTextOfferBox:{
      width: 160,
      marginTop: 70,
      // marginLeft: 20,
    },
    overTextOffer: {
      lineHeight: 37,
      fontWeight: '600',
      fontSize: 35,
      color: 'white',
  }, 
  storeNearItemDisLable1: {
    backgroundColor: '#FF6B6B',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    color: 'white',
    paddingTop: 3,
    paddingLeft: 10,
    fontWeight: 'bold',
    height: 27,
    width: 110,
    fontSize: 13, 
    marginBottom: 12
  }
  });

export default Home;