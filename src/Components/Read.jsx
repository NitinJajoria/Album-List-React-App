import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    // function to fetch albums from mock api 
    const getAlbums = async () => {
        const res = await axios.get ('https://64be17772320b36433c80a50.mockapi.io/albums');
        setAlbums( res.data);
    }

    // function to handle delete operation using axios
    const handleDelete = async (id) => {
        await axios.delete(`https://64be17772320b36433c80a50.mockapi.io/albums/${id}`)
        .then(() => {
            alert("Album Deleted Succesfully")
            getAlbums();
        })
    }

    // function to store id, userid, and title of selected Album card in Local storage
    const setToLocalStorage = (id, userId, title) => {
        localStorage.setItem("id", id);
        localStorage.setItem("userId", userId);
        localStorage.setItem("title", title);
    };

    useEffect(() => {
        getAlbums();
    }, [])
    
    return (
        <>  
            {/* Navbar */}
            <div className="bg-gray-900 h-16 w-full flex justify-around items-center gap-x-4">
                <span className="text-yellow-300 text-2xl px-2 py-1 font-extrabold rounded ">ALBUMS LIST</span>
                <Link to="/create">
                    <button className="bg-yellow-300 px-2 py-1 font-extrabold rounded cursor-pointer active:scale-90">Add Album</button>
                </Link>
            </div>

            {/* Main Body */}
            <div className="h-screen flex justify-center items-start flex-wrap gap-8 p-4">
                {   
                    albums.map((curAlbum) => {
                        // console.log(curAlbum);
                        const {id, userId, title} = curAlbum;
                        return (
                            // Album Card
                            <div className="card w-[480px] flex flex-row shadow-md shadow-gray-600 text-black rounded outline outline-2 outline-gray-400 p-1" key={id}> 
                                <img className="w-[30%] h-[150px] p-1 rounded" src={`https://source.unsplash.com/random/&${id}`} alt="img"/>
                                <div className="w-[70%] flex flex-col justify-items-start mx-2">
                                    <h2 className="text-xl h-24 capitalize font-bold">{title}</h2>
                                    <div className="h-[50px] flex flex-row items-end justify-between text-sm">
                                        <Link to="/update">
                                        <button className="bg-yellow-300 px-2 py-1 font-extrabold rounded cursor-pointer active:scale-90"
                                        onClick={() =>setToLocalStorage(id, userId, title)}
                                        >Update</button>
                                        </Link>

                                        <button className="bg-yellow-300 px-2 py-1 font-extrabold rounded cursor-pointer active:scale-90"
                                        onClick={() => handleDelete(id)}
                                        >Delete</button>

                                    </div>
                                </div>  
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Albums                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
