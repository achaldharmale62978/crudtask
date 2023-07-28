import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const nevigate=useNavigate()
    const{register,handleSubmit}=useForm()

    async function savedata(data){
        axios.post("http://localhost:7077/book",data)
        console.log(data)
        alert("data added successfully")
        nevigate('/showlist')
    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 offset-3'>
                        <form onSubmit={handleSubmit(savedata)}>
                            <div className='form-group'>
                                <label htmlFor='title'><b>Book Title</b></label>
                                <input id='title' type='text' className='form-control' {...register("title")}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='auther'><b>Book Auther</b></label>
                                <input id='auther' type='text' className='form-control' {...register("auther")}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='publication'><b>Book Publication Name</b></label>
                                <input id='publication' type='text' className='form-control' {...register("publication")}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='price'><b>Book Price</b></label>
                                <select class="form-select" aria-label="Default select example"{...register("price")}>
                                    <option selected>Open this select price</option>
                                    <option value="500">500</option>
                                    <option value="400">400</option>
                                    <option value="1000">1000</option>
                                </select>
                            </div><br/>
                            <div>
                                <button type='submit' className='btn btn-outline-success'>Submit</button> &ensp;
                                <button type='reset' className='btn btn-outline-warning'>Reset</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login