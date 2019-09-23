import React, { Component } from 'react';
import { View } from 'react-native';
import HorizontalArticles from '../Components/HorizontalArticles';
import VerticalArticles from '../Components/VerticalArticles';

class Articles extends Component {
    render() {
        return (
            <View>
                <HorizontalArticles />
                <VerticalArticles />

            </View>
        );
    }
}

export default Articles;