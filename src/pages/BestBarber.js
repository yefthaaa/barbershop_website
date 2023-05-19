import { useState, useEffect } from 'react';
import Axios from 'axios';

function BestBarber() {

    const [barbers, setBarber] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [namaUser, setNamaUser] = useState();
    // const user = JSON.parse(localStorage.getItem('user'));

    const getData = async () => {
        const token = sessionStorage.getItem('token');
        const tokenType = sessionStorage.getItem('token_type');
        const response = await fetch('http://localhost:8000/api/barber', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer' + ' ' + token
            }
        }).catch(err => console.log(err));
        const objek = await response.json();
        console.log(objek.data);
        setBarber(objek.data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        console.log(token);
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
        <div class="flex justify-center w-auto min-h-fit p-10">
            <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
                {barbers.map(barber => (
                    <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div class="flex flex-col items-start mt-4">
                            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Barber</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Nama : {barber.nama_barber}</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Alamat : {barber.alamat_barber}</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Tempat bekerja : {barber.barbershop}</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default BestBarber;