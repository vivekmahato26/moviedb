import { useLocation } from "react-router-dom"
import { fetchMovieDetails } from "../redux/slice/movieDetails";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
export default function Details() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const details = useSelector(state => state.movieDetails);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchMovieDetails(id));
    },[])
    const data = details.value;
    return (
        <div>
            <p>{data.title}</p>
            <p>{data.tagline}</p>
            <p>{data.overview}</p>
        </div>
    )
}
