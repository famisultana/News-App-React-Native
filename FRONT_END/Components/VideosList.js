import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image,Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Card } from 'native-base';
import data from '../data';


function Item({ news }) {
  return (
    <TouchableWithoutFeedback onPress={() => alert(news.source.id)}>
      <Card style={styles.item}>

          <Image source={{ uri: news.urlToImage }} style={styles.image}/>
          <Text style={styles.title}>{news.author}</Text>

      </Card>
    </TouchableWithoutFeedback>
  );
}

export default function HorizontalArticles() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      numColumns='3'
        data={data}
        renderItem={({ item }) => <Item news={item} />}
        keyExtractor={item => item.source.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    flexDirection:'column',
    justifyContent:'space-around',
    overflow:'hidden'
  },
  item: {
      flex:1/3,
    height: 200,
    marginVertical: 5,
    marginHorizontal: 5,
    color: 'white',
    marginBottom:5
  },
  title: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
    justifyContent: "flex-end",
  },
  image:{ 
      width: '100%', 
      height: '70%' }
});
