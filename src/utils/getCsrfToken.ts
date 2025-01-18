import axios from 'axios';

const fetchCsrfToken = async () => {
    try {
        const response = await axios.get('http://54.158.143.81/api/get-csrf-token/');
        return response.data.csrfToken; // Return the CSRF token
    } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
        return null;
    }
};

export default fetchCsrfToken;
