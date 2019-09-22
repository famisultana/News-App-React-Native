import React from 'react';
import {ScrollView} from 'react-native';
import HorizontalArticles from './Components/HorizontalArticles';
import Articles from './Screens/Articles';
import VideoList from './Components/VideosList';

const App = () => {
  return (
    <ScrollView>
<VideoList/>
    </ScrollView>
  );
};

export default App;
