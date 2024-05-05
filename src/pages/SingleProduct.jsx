import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id} = useParams()

    const getSingleProduct= async()=>{
        try {
            const resp = await axios.get(``)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct