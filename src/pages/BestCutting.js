import React, { useEffect, useState } from "react";
import { useRouter } from "react";
import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

function BestCutting() {
    const [rambut, setRambut] = useState([])

    cont getRambut => {
        axios
            .get('http://127.0.0.1:8000/api/rambut')
            .then(res => {
                console.log(res)
                setRambut(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div class="flex items-center justify-center w-screen min-h-screen p-10" >
            <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
                {rambut.map(rambut => (
                    <div key={rambut.id_model} class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div class="h-40 bg-gray-400 rounded-lg"></div>
                        <div class="flex flex-col items-start mt-4">
                            <h4 class="text-xl font-semibold">{truncateString(rambut.nama_model, 30)}</h4>
                            <img src={rambut.img_model} className="card-img-top" alt="..." />
                            <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={() => handleRedirect(rambut.id_model)}>Click
                                Here</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default BestCutting;