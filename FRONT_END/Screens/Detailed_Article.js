import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import image from '../Images/img1.jpg';

export default class Detailed_Article extends Component {
  render() {
    return (
      <ScrollView>
        <Image source={image} style={styles.image}></Image>
        <View style={{padding: 10}}>
          <Text style={styles.Heading}>
            Dragon Ball Super’s Tournament of Power has reached its final stage
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>By Hassan Raza </Text> at 5:10 PM
            JUNE 6,2019
          </Text>
          <View
            style={{
              borderBottomColor: '#c1c1c1',
              borderBottomWidth: 1,
              marginTop: 20,
              marginLeft: 30,
              marginRight: 30,
            }}
          />
          <Text style={styles.paragraph}>
            Dragon Ball Super’s Tournament of Power has reached its final stage
            on the English dub run of the series on Toonami. With only five
            minutes left to go, Vegeta and the rest of the seventh universe were
            left to fight back against the final two fighters of the eleventh
            universe. But while Goku and the others figured that Jiren would be
            their main problem, his second in command Toppo surprised everyone
            with a reveal that he was actually a candidate to be a Destroyer
            God. With the power of Hakai granted through his training to become
            one of the gods of destruction, he pushed Vegeta to the brink.
            {`\n`} {`\n`}
            Luckily, the latest episode of the dub showcased one of Vegeta’s
            most memorable moments too with his explosive defeat of Toppo. Check
            out the clip for yourself. In Episode 126, Vegeta was at his wits
            end as to what to do against Toppo. With his prideful nature burning
            after hearing that Toppo had cast away his values in order to gain
            the Destroyer’s power, Vegeta could not stand to be defeated by him.
            Thus he began to think of his family back home, and Cabba who he had
            promised to bring back with the help of the Super Dragon Balls.
            {`\n`} {`\n`}
            As none of his attacks worked on Toppo’s Hakai shield, he mustered
            enough energy to detonate himself like he did against Majin Buu way
            back when. But unlike the first time, his power had grown so much
            over the years that he was able to survive the explosion. His body
            had grown so tough that Vegeta stayed alive, but he definitely is
            worse for wear after expelling so much energy. At the very least, he
            was able to eliminate Toppo from the Tournament of Power. Now it’s
            just a matter of seeing what comes next against Jiren.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },

  Heading: {
    fontSize: 26,
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'left',
    color: 'black',
  },
  paragraph: {
    textAlign: 'left',
    marginTop: 20,
    lineHeight: 20,
    fontSize: 16,
  },
});
