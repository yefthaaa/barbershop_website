import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function FaceShape() {

    const [faces, setFace] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [namaUser, setNamaUser] = useState();
    // const [idRambut, setIdRambut] = useState();
    // const user = JSON.parse(localStorage.getItem('user'));

    const getData = async () => {
        const token = sessionStorage.getItem('token');
        const tokenType = sessionStorage.getItem('token_type');
        const response = await fetch('http://localhost:8000/api/wajah', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + token
            }
        }).catch(err => console.log(err));
        const objek = await response.json();
        console.log(objek.data);
        setFace(objek.data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        console.log(token);
    }

    // fungsi untuk mengarahkan ke laman baca posting
    const history = useHistory();
    const handleRedirect = (id) => {
        history.push('/rambutwithface/' + id);
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
                {faces.map(face => (
                    <div key={face.id_wajah} class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div class="h-40 bg-400 rounded-lg">
                            <img src={face.img_wajah} className="card-img-top"
                                style={{ width: 115, height: 150, position: 'absolute' }} alt="..." />
                        </div>
                        <div class="flex flex-col items-start mt-4">
                            <h4 class="text-xl font-semibold">{face.jenis_wajah}</h4>
                            <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={() => handleRedirect(face.id_wajah)}>Click
                                Here</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default FaceShape;