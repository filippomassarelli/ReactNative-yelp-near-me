import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({header, filteredResults}) => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.headerStyle}>{header} ({filteredResults.length})</Text>
            <FlatList 
                horizontal
                data = {filteredResults}
                keyExtractor = {x => x.id}
                showsHorizontalScrollIndicator={false}
                renderItem = { ({ item }) => { 
                    return (
                        <ResultsDetails 
                            name={item.name} 
                            phone={item.phone}
                            price={item.price}
                            rating={item.rating}
                            reviews={item.review_count}
                            imageSource={item.image_url}
                            yelpLink={item.url}
                        />
                        
                    );} }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 10
    },
    viewStyle: {
        marginVertical: 15
    }

});

export default ResultsList;