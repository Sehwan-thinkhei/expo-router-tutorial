import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;
// const rapidApiKey = '435e1ba968msh394351008ef0e12p105658jsn7c5d6abfe0f6';
const rapidApiKey = '0786b627dfmshef53ee24f01b3a2p1786e1jsnc822d5709d68';

const useFetch = ( endpoint, query ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/' + endpoint,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }, 
        params: { ...query }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;
