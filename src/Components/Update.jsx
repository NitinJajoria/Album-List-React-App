import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {

    const [id, setId] = useState(0);
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");

    const history = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setUserId(localStorage.getItem("userId"));
        setTitle(localStorage.getItem("title"));
    }, []);

    // function to handle update operation
    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log("id", id);
    
        await axios
            .put(`https://64be17772320b36433c80a50.mockapi.io/albums/${id}`, { 
                userId: userId,
                title: title,
            })
            .then(() => {
                alert("Album Updated");
                history("/");
            });
        };

    return (
        <>
            {/* Navbar */}
            <div className="bg-gray-900 h-16 w-full flex justify-around items-center gap-x-4">
                <span className="text-yellow-300 text-2xl px-2 py-1 font-extrabold rounded ">ALBUMS LIST</span>
                <Link to="/">
                    <button className="bg-yellow-300 px-2 py-1 font-extrabold rounded cursor-pointer active:scale-90">Back</button>
                </Link>
            </div>

            {/* Main body */}
            <div className="flex justify-center items-center flex-col">
            <h2 className="mt-10 text-2xl font-bold">Update Album</h2>
                <div className='h-[400px] w-[600px] text-black flex justify-center items-center mt-10 shadow-md shadow-gray-600 rounded outline outline-2 outline-gray-400'>
                    <form>
                        <div className="mb-3">
                            <label className="font-extrabold">User Id : </label>
                            <input
                                type="number"
                                name="userId"
                                value={userId}
                                className="font-bold pl-2 border-b-2 border-black bg-slate-100 focus:outline-none"
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </div>

                        <div className="mb-8">
                            <label className="font-extrabold">Title : </label>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                className="font-bold capitalize pl-2 border-b-2 border-black ml-5 focus:outline-none"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <button
                        type="submit"
                        className="bg-yellow-300 px-2 py-1 font-extrabold rounded cursor-pointer active:scale-90"
                        onClick={handleUpdate}
                        >
                        Update
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Update
