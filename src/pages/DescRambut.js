import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function DescRambut({ match }) {
    const { id } = useParams(); // Mengakses ID dari URL parameters
    const [desc, setDesc] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [namaUser, setNamaUser] = useState();
    const [image, setImage] = useState("/Sakra_barber.png");

    console.log(match.params.pid);

    const getData = async ({ match }) => {
        // console.log(id);
        const token = sessionStorage.getItem('token');
        const tokenType = sessionStorage.getItem('token_type');
        const request = await fetch("http://localhost:8000/api/rambut/" + match.params.pid, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer' + ' ' + token
            }
        }).catch(err => console.log(err));
        const objek = await request.json();
        console.log(objek.data);
        setDesc(objek.data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    useEffect(() => {
        if (match) {
            getData({ match });
            // getSaranContent();
        }
    }, [match]);



    return (
        <section class="mb-24 mt-20 text-gray-800">
            <div class="container mx-auto xl:px-32 text-center lg:text-left">
                <div class="grid lg:grid-cols-2 flex items-center">
                    <div class="mb-12 lg:mb-0">
                    {desc.map(desc => (
                        <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 backdrop-blur-2xl"
                            style={{
                                background: 'hsla(0, 0 %, 100 %, 0.55)'
                            }}>
                            <h2 class="text-3xl font-bold mb-6">{desc.nama_model}
                                {(() => {
                                    if (desc.style_model == "no") {
                                    return (
                                        <div></div>
                                    )
                                    } else if (desc.style_model == "update") {
                                    return (
                                        <div>
                                            <div class="inline-flex px-2 bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded-lg text-sm font-medium text-center text-grey-100">
                                                trendy
                                            </div>
                                        </div>
                                    )
                                    } else {
                                    return (
                                        <div></div>
                                    )
                                    }
                                })()}
                            </h2>
                            <p class="text-gray-500 mb-6 pb-2 lg:pb-0">
                                Sakra Barbershop
                            </p>
                            <div class="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                                <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>
                                    Best team
                                </p>
                                <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>
                                    Best quality
                                </p>
                                <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>
                                    Best experience
                                </p>
                            </div>
                            <p class="text-black-500 mb-0">
                                {desc.desc_model}
                            </p>
                        </div>
                    ))}
                    </div>
                    <div>
                    {desc.map(desc => (
                        <img src={desc.img_model} class="w-full rounded-lg shadow-lg"
                            alt="" />
                    ))}
                    </div>
                </div>
            </div>
        </section >

    );
}

export default DescRambut;