
import axios from 'axios';

const url = `http://${process.env.SERVER || 'localhost'}:4000/search`;

export default async (data) => {
    try {

        const response = await axios.post(url,
            { query: data }
        );

        return response;

    } catch (error) {

        console.error(error);
        // gather info for future fixes
        throw error;

    }
}