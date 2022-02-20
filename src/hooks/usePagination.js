import { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import { BASE_URL } from "../config";

const usePagination = (url, newPage) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [info, setInfo] = useState();
    const [error, setError] = useState({error: false, message: null});

    const queryString = require('query-string');

    const location = useLocation();
    const navigate = useNavigate();

    const { page = '1' } = queryString.parse(location.search);

    const getData = async (page) => {
        const response = await fetch(`${BASE_URL}api/character/?page=${page}${url}`);
        const data = await response.json();

        if(response.ok && data){
            setIsLoading(false);
            setData(data.results);
            setInfo(data.info);
        }else{
            setIsLoading(false);
            setError({error: true, message: response.statusText})
        }
    }   

    const initialPage = (page) => {
        const stringified = queryString.stringify({ page: page });
        navigate({
            pathname: location.pathname,
            search: `?${stringified}`
        })
        getData(page);
    }

    useEffect(() => {
        initialPage(newPage ? newPage : page);
    }, [url, newPage]);

    const incrementPage = (page) => {
        if(info.next){
            initialPage(+page + 1);
        }
    }

    const decrementPage = (page) => {
        if(info.prev){
          initialPage(+page - 1);
        }
    }

    return {
      data,
      isLoading,
      error,
      page,
      decrementPage,
      incrementPage,
    };
}

export default usePagination;