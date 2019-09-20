import React from 'react';
import {ScrollView} from 'react-native';
import Detailed_Article from './Screens/Detailed_Article';
import Articles from './Screens/Articles';

const App = () => {
  return (
    <ScrollView>
      <Articles/>
    <Detailed_Article/>
    </ScrollView>
  );
};

export default App;
