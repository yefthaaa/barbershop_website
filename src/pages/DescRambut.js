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

        <div class="container my-24 px-6 mx-auto">
            <section class="mb-32 text-gray-800">
                {desc.map(desc => (
                    <div key={desc.id_model} class="flex flex-wrap">

                        <div class="grow-0 shrink-0 basis-auto w-full md:w-2/12 lg:w-3/12">
                            <img src={desc.img_model} className="card-img-top"
                                style={{ width: 150, height: 150, position: 'absolute' }} alt="..." />
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-full md:w-10/12 lg:w-9/12 md:pl-6 text-center md:text-left">
                            <h5 class="text-xl font-semibold mb-6">{(desc.nama_model, 30)}</h5>
                            <div class="mb-6 flex space-x-4 justify-center md:justify-start">
                            </div>
                            <p class="text-sm">{(desc.desc_model)}</p>
                        </div>
                    </div>
                ))}

            </section>


        </div>

    );
}

export default DescRambut;