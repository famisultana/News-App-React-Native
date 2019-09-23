import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text } from 'native-base';
import Articles from './Screens/Articles';
import Detailed_Articles from './Screens/Detailed_Article';
import VideoList from './Components/VideosList';
import { StyleSheet } from 'react-native';


export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs><Text style={styles.header}>DRAGON BALL Z NEWS</Text></Header>
        <Tabs>
          <Tab heading={<TabHeading><Text>Articles</Text></TabHeading>}>
            <Articles />
          </Tab>
          <Tab heading={<TabHeading><Text>Details</Text></TabHeading>}>
            <Detailed_Articles />
          </Tab>
          <Tab heading={<TabHeading><Text>Videos</Text></TabHeading>}>
            <VideoList />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5
  }
})