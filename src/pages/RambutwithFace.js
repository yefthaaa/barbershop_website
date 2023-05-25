import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from 'axios';
import { useParams, useHistory} from 'react-router-dom';

function RambutwithFace(match) {

    const [rambuts, setRambut] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [namaUser, setNamaUser] = useState();
    const { id } = useParams();

    const id_nya = match.match.params.pid ;
    console.log(id_nya);

    const getData = async () => {
        const token = sessionStorage.getItem('token');
        const tokenType = sessionStorage.getItem('token_type');
        const response = await fetch("http://localhost:8000/api/rambut/wajah/" + id_nya, {
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

    const history = useHistory();
    const handleRedirect = (id_model) => {
        history.push('/descrambut/' + id_model);
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
            <div class="grid xl:grid-cols-3 md:grid-cols-0 grid-cols-1 gap-3 max-w-6xl">
                {rambuts.map(rambut => (
                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={rambut.img_model}
                        style={{ width: 200, height: 325 }}
                        alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{truncateString(rambut.nama_model, 30)}</h5>

                        {/* Stiker Uptodate */}
                        {(() => {
                            if (rambut.style_model == "no") {
                            return (
                                <div></div>
                            )
                            } else if (rambut.style_model == "update") {
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

                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncateString(rambut.desc_model, 100)}</p>
                        <button onClick={() => handleRedirect(rambut.id_model)} class="inline-flex place-items-stretch px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-5 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );

}

export default RambutwithFace;