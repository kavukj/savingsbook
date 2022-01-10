import axios from 'axios';

const Url = 'http://localhost:8000'

export const getFD = async () => {
    try {
        let response = await axios.get(`${Url}/fd`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addFD = async (data) => {
    try {
        await axios.post(`${Url}/fd/add`, data)
    }
    catch (error) {
        console.log(error)
    }
}

export const getRD = async () => {
    try {
        let response = await axios.get(`${Url}/rd`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addRD = async (data) => {
    try {
        await axios.post(`${Url}/rd/add`, data)
    }
    catch (error) {
        console.log(error)
    }
}

export const getMIS = async () => {
    try {
        let response = await axios.get(`${Url}/mis`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addMIS = async (data) => {
    try {
        await axios.post(`${Url}/mis/add`, data)
    }
    catch (error) {
        console.log(error)
    }
}

export const getAccount = async () => {
    try {
        let response = await axios.get(`${Url}/account`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addAccount = async (data) => {
    try {
        await axios.post(`${Url}/account/add`, data)
    }
    catch (error) {
        console.log(error)
    }
}

export const getTD = async () => {
    try {
        let response = await axios.get(`${Url}/td`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addTD = async (data) => {
    try {
        await axios.post(`${Url}/td/add`, data)
    }
    catch (error) {
        console.log(error)
    }
}
