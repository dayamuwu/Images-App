import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import { getImages } from "../api/pexels";
import ImageList from '../components/ImageList';
import { Button, Input } from 'react-native-elements';

const HomeScreen = ({openSearch}) => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const loadImages = async (searchTerm) => {
    const res = await getImages(searchTerm);
    console.log(res.headers);
    setPhotos(res.data.photos); 
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleSearch = async () => {
    await loadImages(searchTerm)
  }  

  return (
  <>
    {openSearch && (
      <View style={styles.searchSection}>
        <Input 
          leftIcon={{ type: "feather", name:"search", color: "#fff"}}
          placeholder='Buscar...'
          style={styles.input}
          inputContainerStyle={styles.searchInput} 
          onChangeText={(value) => setSearchTerm(value)}
        />
        <Button title="Search" buttonStyle={styles.buttonSearch}  onPress={() => handleSearch()}/>
      </View>
    )}




    <View style={styles.container}>
      <ImageList photos={photos}/>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alingItems: 'center',
    justifyContent: 'center'
  },
  searchSection: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 80,
    flex: 1 / 5,
    flexDirection: "row",
    alignItems:"center",
  },
  searchInput: {
    backgroundColor:"#2c292c",
    borderBottomWidth: 0,
    paddingHorizontal: 4,
    color: "white",
  },
  input: {
    color: "#fff"
  },
  buttonSearch: {
    backgroundColor: "#229783",
    marginBottom: 27,
  },
});

export default HomeScreen;