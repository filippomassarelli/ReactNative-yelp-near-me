import React from 'react';
import { StyleSheet, Text, View, Image, Linking , TouchableHighlight} from 'react-native';

const ResultsDetails = ( {name, phone, price, rating, reviews, imageSource, yelpLink} ) => {
    return (
        <View style={styles.cardStyle }>
            <TouchableHighlight 
                 onPress={() => Linking.openURL(yelpLink)}>
                <Image source={ { uri : imageSource } } style={styles.image} />
            </TouchableHighlight>
            <Text style={styles.name} >{name} ({price})</Text>
            {/* <Text>{phone}</Text> */}
            <Text>{rating} stars, {reviews} reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cardStyle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10
    },
    name: {
        fontWeight:"bold",
        marginTop: 10,
        marginBottom:5
    },
    image: {
        width: 200,
        height: 100,
        borderRadius: 4
    }

});

export default ResultsDetails;