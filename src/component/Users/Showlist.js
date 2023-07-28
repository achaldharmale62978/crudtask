import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Showlist = () => {

    const [book, setbook] = useState([])

    async function fetchbook() {
        const result = await
            axios.get("http://localhost:7077/book")
        setbook(result.data)
    }
   
    useEffect(() => {
        fetchbook()
    }, [])

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Book Title</th>
                        <th scope="col">Book Auther</th>
                        <th scope="col">Book Publication</th>
                        <th scope="col">Book Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map(obj => {
                            return (
                                <>
                                    <tr key={obj.id}>
                                        <td>{obj.title}</td>
                                        <td>{obj.auther}</td>
                                        <td>{obj.publication}</td>
                                        <td>{obj.price}</td>
                                        <td>
                                            <NavLink to={`/update/${obj.id}`}><button type='submit' className='btn btn-outline-success'>Update</button></NavLink>
                                            <NavLink to={`/delete/${obj.id}`}><button type='button' className='btn btn-outline-danger'>Delete</button></NavLink>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Showlist