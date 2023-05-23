import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function RambutwithFace() {

    const [rambuts, setRambut] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [namaUser, setNamaUser] = useState();
    const { id } = useParams();

    const getData = async () => {
        const token = sessionStorage.getItem('token');
        const tokenType = sessionStorage.getItem('token_type');
        const response = await fetch(`http://localhost:8000/api/wajah/${id}/rambut`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + token
            }
        }).catch(err => console.log(err));
        const objek = await response.json();
        console.log(objek.data);
        setRambut(objek.data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        console.log(token);
    }

    // fungsi untuk memotong string
    function truncateString(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        } else {
            const truncated = str.substring(0, maxLength);
            return `${truncated}...`;
        }
    }

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
        }
        else {
            getData();
            setNamaUser(sessionStorage.getItem('name'));
        }
    }, [mounted]);

    return (
        <div class="flex items-center justify-center w-screen min-h-screen p-10" >
            <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
                {rambuts.map(rambut => (
                    <div key={rambut.id_model} class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div class="h-40 rounded-lg">
                            <img src={rambut.img_model} style={{ width: 150, height: 150 }} className="card-img-top" alt="..." />
                        </div>
                        <div class="flex flex-col items-start mt-4">
                            <h4 class="text-xl font-semibold">{truncateString(rambut.nama_model, 30)}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default RambutwithFace;