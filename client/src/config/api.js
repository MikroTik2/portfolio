import axios from 'axios';
import config from './config';

export const HTTP = axios.create({
        baseURL: config.API,
});

export default {
        
        async getAllProject() {
                try {

                        const response = await HTTP.get("/project?fields=_id");
                        return response.data;

                } catch (error) {
                        throw error;
                };
        },

        async getProjectId(productId) {
                try {

                        const response = await HTTP.get(`/project/detail/${productId}`);
                        return response.data;

                } catch (error) {
                        throw error;
                };
        },
};