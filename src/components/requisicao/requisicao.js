import axios from "axios";

export default async function requestApi(api) {
    try {
        let response = await axios.get(api);

        if (response.status){
            return response.status;
        }
        return false;


    } catch (err) {
        if (err.response){
            return err.response.status;
        }

        return false;
    
    }
}
