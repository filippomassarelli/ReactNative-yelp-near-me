import React, {useState, useEffect} from "react";
import yelp from "../api/yelp";

const useResults = () => {

    const [results, setResults] = useState( [] );
    const [errorMessage, setErrorMessage] = useState("");

    //Helper function using the axios api function 
    const searchApi = async (searchTerm) => {
        console.log("Api called");
        //wrap the api call in a try-catch statement to handle errors
        try {
                //define the end point using params of our api
            const response = await yelp.get("/search", {
                params: {
                    limit:50,
                    term: searchTerm,
                    location: "london"
                }
            });
            // axios gives us back the response from api as response.data, we are then only interested in businesses object
            setResults(response.data.businesses);
            setErrorMessage("");
        }  catch (err) {
            setErrorMessage("something went wrong with api call");
        }
    }

    useEffect( () => {
        searchApi("italian")
    }, [] );

    return [searchApi, results, errorMessage];
};

export default useResults;