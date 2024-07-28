import axios from "../../utils/axios";
import { loadperson, removeperson } from "../reducers/personSlice";

export const asyncloader = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);

        let theultimatedata = {
            detail: detail.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data
        };


        // Dispatch the action to load the person data into the Redux store
        dispatch(loadperson(theultimatedata));
        
    } catch (error) {
        console.log(error);
    }
};
