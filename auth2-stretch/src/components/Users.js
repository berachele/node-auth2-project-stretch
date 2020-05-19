import React, {useEffect} from "react"
import {useHistory} from "react-router-dom"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const Users = () => {

    useEffect(() => {
        axiosWithAuth()
            .get('/')
            .then(res => {
                console.log({res})
                //setList(res.data)
            })
            .catch(err => {
                console.log({err})
            })
    }, [])

    return(
        <>
        <div className="cardholder">
            <div className="cardParent">
            <p>{/*Show ID number */}</p>
            <p>Username:</p>
            <p>Department:</p>
            </div>
        </div>
        </>
    )
}

export default Users