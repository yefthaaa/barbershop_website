import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function DescRambut() {
    const { id } = useParams(); // Mengakses ID dari URL parameters
    const [descs, setDesc] = useState(null);
    // const user = JSON.parse(localStorage.getItem('user'));

    // const getData = async () => {
    //     const token = sessionStorage.getItem('token');
    //     const tokenType = sessionStorage.getItem('token_type');
    //     const response = await fetch('http://localhost:8000/api/rambut', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': 'Bearer' + ' ' + token
    //         }
    //     }).catch(err => console.log(err));
    //     const objek = await response.json();
    //     console.log(objek.data);
    //     setDesc(objek.data);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);
    //     console.log(token);
    // }

    // // fungsi untuk memotong string
    // function truncateString(str, maxLength) {
    //     if (str.length <= maxLength) {
    //         return str;
    //     } else {
    //         const truncated = str.substring(0, maxLength);
    //         return `${truncated}...`;
    //     }
    // }

    // useEffect(() => {
    //     if (!mounted) {
    //         setMounted(true);
    //     }
    //     else {
    //         getData();
    //         setIdRambut(sessionStorage.getItem('idRambut'));
    //     }
    // }, [mounted]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get(`http://localhost:8000/api/rambut/${id}`);
                setDesc(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return (

        <div class="container my-24 px-6 mx-auto">

            <section class="mb-32 text-gray-800">
                {descs.map(desc => (
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