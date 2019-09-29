import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMsg] = useResults()
   

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            { {errMsg} ? <Text>{errMsg}</Text> :null}
            <Text>We have fround {results.length} results.</Text>
        </View>
    )
    
    
};

const styles = StyleSheet.create({})

export default SearchScreen;