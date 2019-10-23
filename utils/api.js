import axios from "axios";

const rickAndMortyApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {}
});

export const getCharacterList = async () => {
    try{
        const response = await rickAndMortyApi.get('/character');
        return response.data.results
    } catch (error) {
        console.error(error);
    }
};

export const getCharacterById = async (id) => {
    try{
        const response = await rickAndMortyApi.get(`/character/${id}`);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
};

export const getCharacterByPage = async (page) => {
    try{
        const response = await rickAndMortyApi.get('/character', { params: { page } });
        return response.data.results
    } catch (error) {
        console.error(error);
    }
};

export const getCharacterByName = async (name) => {
    try{
        const response = await rickAndMortyApi.get('/character', { params: { name } });
        return response.data.results[0];
    } catch (error) {
        console.error(error);
    }
};