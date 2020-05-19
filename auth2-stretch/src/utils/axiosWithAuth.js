import axios from "axios"

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    return axios.create({
        headers: {
            Authorization: token
        }, 
        baseURL: "https://auth2-stretch.herokuapp.com/"
    })
}