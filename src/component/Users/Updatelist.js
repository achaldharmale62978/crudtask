import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Updatelist = () => {

    const nevigate=useNavigate()
    const {bookId}=useParams()
    const{register,handleSubmit,setValue}=useForm()

    async function fetchbook(){
        const result = await
        axios.get(`  http://localhost:7077/book/${bookId}`)
        setValue("title",result.data.title)
        setValue("auther",result.data.auther)
        setValue("publication",result.data.publication)
        setValue("price",result.data.price)

    }
    useEffect(()=>{
        fetchbook()
    },[])
    
    function savedata(data){
        axios.put(`  http://localhost:7077/book/${bookId}`,data)
        nevigate('/showlist')

    }

  return (
    <div>
        <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <form onSubmit={handleSubmit(savedata)}>
                            <div className='form-group'>
                                <label htmlFor='title'>Book Title</label>
                                <input id='title' type='text' className='form-control' {...register("title")}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='auther'>Book Auther</label>
                                <input id='auther' type='text' className='form-control' {...register("auther")}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='publication'>Book Publication Name</label>
                                <input id='publication' type='text' className='form-control' {...register("publication")}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='price'>Book Price</label>
                                <select class="form-select" aria-label="Default select example"{...register("price")}>
                                    <option selected>Open this select price</option>
                                    <option value="500">500</option>
                                    <option value="400">400</option>
                                    <option value="1000">1000</option>
                                </select>
                            </div>
                            <div>
                                <button type='submit' className='btn btn-outline-success'>Submit</button>
                                <button type='reset' className='btn btn-outline-warning'>Reset</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Updatelist