import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,ImageBackground, TouchableWithoutFeedback } from 'react-native';
import image from '../Images/img2.jpg';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <TouchableWithoutFeedback onPress={()=>alert("hello")}>
        <View style={styles.item}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
    <Text style={styles.text}>{title}</Text>
  </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
       horizontal={true}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:20
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 10,
    marginHorizontal: 10,
    width:300,
    height:200,
    color:'white'
  },
  title: {
    fontSize: 32,
  },
  text:{
      color:'white',
      fontSize:20,
      padding:10
  }
});
