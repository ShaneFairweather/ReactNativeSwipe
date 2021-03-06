import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Deck from './src/components/Deck';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;


const DATA = [
    { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {
    renderCard(item) {
        return (
            <Card
                key={item.id}
                title={item.text}
                image={{ uri: item.uri }}
            >
                <Text style={{ marginBottom: 10 }}>
                    Customization
                </Text>
                <Button
                    icon={{ name: 'code' }}
                    backgroundColor='#333333'
                    title={'View'}
                    buttonStyle={
                        {
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                        }
                    }
                >
                </Button>
            </Card>
        )
    }

    renderNoMoreCards() {
        return (
            <Card
                title="No More Cards"
                style={styles.card}
            >
                <Text style={{ marginBottom: 10 }}>
                    No more content to display
                </Text>
                <Button
                    title="Get More"
                    backgroundColor="#03A9F4"
                />
            </Card>
        )
    }

    render() {
        return (
            <View style={styles.container}>
            <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
              </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        height: 400
    }
});
