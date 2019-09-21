import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'native-base';
import data from '../data';


function Item({ news }) {
  return (
    <TouchableWithoutFeedback onPress={() => alert(news.source.id)}>
      <View style={styles.item}>
        <ImageBackground source={{ uri: news.urlToImage }} style={{ width: '100%', height: '100%' }}>
          <Text style={styles.title}>{news.title}</Text>
          <Button light full rounded style={styles.button}><Text> View</Text></Button>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function HorizontalArticles() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
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
    marginBottom: 20
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 10,
    marginHorizontal: 10,
    width: 300,
    height: 200,
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
    justifyContent: "flex-end"
  },
  button: {
    width: 100,
    marginLeft: 180,
    marginTop: 50

  }
});
