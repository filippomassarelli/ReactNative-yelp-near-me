import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";
import ResultsList from '../components/ResultsList';


export default function SearchScreen() {

    const [inputSearch, setInputSearch] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    //Helper function for grouping logic of childs
    const filterResultsByPrice = (price) => {
        // price can be === "£" || "££" || "£££"
        return  results.filter( x => x.price === price); 
    }
    // console.log(results);

    return (
    <View style={styles.viewStyle}>
        <SearchBar 
            input={inputSearch} 
            onInputChange={setInputSearch} 
            onSubmit={() => searchApi(inputSearch)}
            autoCorrect={false}
        />
      { errorMessage ? <Text>{errorMessage}</Text> : <Text>Your search:</Text> }
      { errorMessage ? null : <Text>We have found {results.length} results</Text> }
      <ScrollView>
            <ResultsList header="Cost Effective" filteredResults = {filterResultsByPrice("£")}  />
            <ResultsList header="Bit Pricier" filteredResults = {filterResultsByPrice("££" )}  />
            <ResultsList header="Big Spender" filteredResults = {filterResultsByPrice("£££")}  />
            <ResultsList header="One-Offs" filteredResults = {filterResultsByPrice("££££")}  />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#ffff",
        display: "flex",
        flex: 1
        // justifyContent: "space-around"
    }
});
