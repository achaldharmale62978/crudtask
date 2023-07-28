import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'


const Delete = () => {
    const[book,setbook]=useState({})
    const nevigate=useNavigate()
    const {bookId}=useParams()

    async function fetchbook (){
        const result =await
        axios.get(` http://localhost:7077/book/${bookId}`)
        setbook('/showlist')
        console.log(result.data)

    }

    function deletedata(){
        axios.delete(` http://localhost:7077/book/${bookId}`)
        nevigate('/showlist')
        
    }

    useEffect(()=>{
        fetchbook()
    },[])


  return (
    <div>
        <center>
            <form onSubmit={()=>deletedata()}>
                <h3>you want to delete <span style={{color:'red'}}>{book.title}</span> data </h3>
                <h3>you want to delete <span style={{color:'red'}}>{book.title}</span> data </h3>
                <input value="Yes" type='submit' className='btn btn-outline-success '/>
                <NavLink value="no" type='button' to={'/showlist'}><button className='btn btn-outline-danger '>No</button></NavLink>
            </form>
        </center>
    </div>
  )
}

export default Delete