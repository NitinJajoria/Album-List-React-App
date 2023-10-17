import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {

    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const history = useNavigate();

    // function to create new album using axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked");
        await axios
        .post(`https://64be17772320b36433c80a50.mockapi.io/albums`, {
            userId: userId,
            title: title,
        })
        .then((res) => {
            alert("New Album Added");
            history("/");
        });
    };

    return (
        <>
            {/* Navbar */}
            <div className="bg-gray-900 h-16 w-full flex justify-around items-center gap-x-4">
                <span className="text-yellow-300 text-2xl px-2 py-1 font-extrabold rounded ">ALBUMS LIST</span>
                <Link to="/">
                    <button className="bg-yellow-300 px-2 py-1 font-extrabold rounded cursor-pointer active:scale-90">Show Albums</button>
                </Link>
            </div>

            {/* Main body */}
            <div className="flex justify-center items-center flex-col">
                <h2 className="mt-10 text-2xl font-bold">Create New Album</h2>
                <div className=' h-[400px] w-[600px] text-black flex justify-center items-center mt-10 shadow-md shadow-gray-600 rounded outline outline-2 outline-gray-400'>
                    <form> 

                        <div className="mb-3">
                            <label className="font-extrabold">USER ID : </label>
                            <input
                                type="number"
                                className="font-bold pl-2 border-b-2 border-black bg-slate-100 focus:outline-none"
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </div>

                        <div className="mb-8">
                            <label className="font-extrabold">TITLE :</label>
                            <input
                                type="text"
                                className="font-bold capitalize pl-2 border-b-2 border-black ml-5 focus:outline-none"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <button
                        type="submit"
                        className="bg-yellow-300 px-2 py-1 font-extrabold rounded cursor-pointer active:scale-90"
                        onClick={handleSubmit}
                        >
                        Create
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Create;
