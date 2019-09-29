import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'charleston'
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            setErrMsg('Something went wrong!')
        }
    }

    useEffect(() => {
        searchApi('pizza')
    }, [])

    return [searchApi, results, errMsg];
}