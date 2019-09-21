import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import data from '../data';
import { FlatList, TouchableWithoutFeedback } from 'react-native';

export default class VerticalArticles extends Component {

    renderArticle = (item) => {
        return (
            <TouchableWithoutFeedback>
                <CardItem bordered>
                    <Left>
                        <Thumbnail square large source={{ uri: item.urlToImage }} />
                        <Body style={{ marginLeft: 10 }}>
                            <Text>{item.title}</Text>
                            <Text note>{item.author}</Text>
                        </Body>
                    </Left>
                </CardItem>
            </TouchableWithoutFeedback>
        );

    };

    render() {
        return (
            <FlatList
                data={data}
                renderItem={({ item }) => this.renderArticle(item)}
                keyExtractor={item => item.source.id}
            />
        );
    }
}