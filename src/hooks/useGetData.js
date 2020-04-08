import { useState, useEffect } from 'react';
const api = 'https://us-central1-curriculumvitae-6ef3c.cloudfunctions.net/api';

const useGetData = () => {
    const [mydata, setData] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(({data}) => setData(data))
    }, []);

    return mydata;
}

export default useGetData;