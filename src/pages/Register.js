import React, { useState } from "react";
import { useRouter } from "react";
import swal from 'sweetalert';

async function RegistUser(credentials) {
    return fetch('http://127.0.0.1:8000/api/registrasi', {
      method: 'POST',
      dataType: "json",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Register () {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
	const [image, setImage] = useState("/Logo_Sakra_barber_600_2.png");

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await RegistUser({
          name,
		  email,
          password
        });
        console.log(response.data);
        if ('token' in response.data) {
            swal("Success", response.message, "success", {
              buttons: true,
              timer: 2000,
            })
          .then((value) => {
            localStorage.setItem('token', response['token']);
            localStorage.setItem('user', JSON.stringify(response['user']));
            window.location.href = "/";
          });
        } else {
          swal("Failed", response.message, "error");
        }
      }

    //   console.log(response);

    return (
        <div class="min-h-screen flex items-center justify-center bg-gray py-12 px-4 sm:px-6 lg:px-8">
			<div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
                    <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFFF00" offset="0%" />
                            <stop stopColor="#AA6C39" offset="75.402%" />
                            <stop stopColor="#5A5A5A" offset="100%" />
                        </linearGradient>
                        </defs>
                        <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                        </g>
                    </svg>
            </div>
			<div class="max-w-md w-full space-y-8">
				<div>
					<img class="mx-auto h-20 w-auto" src={image} alt="Workflow" />
					<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign Up to your account
					</h2>
					<p class="mt-2 text-center text-sm text-gray-600">
						Or 
						<a href="/login" class="font-medium text-yellow-700 hover:text-yellow-600">
							_Login your account
						</a>
					</p>
				</div>
				<form class="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit} >
					<input type="hidden" name="remember" value="True" />
					<div class="rounded-md shadow-sm -space-y-px">
						<div>
							<label for="name" class="sr-only">Name</label>
							<input id="name" name="name" type="name" autocomplete="name" onChange={e => setName(e.target.value)} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Your Name" />
						</div>
						<div>
							<label for="email-address" class="sr-only">Email address</label>
							<input id="email" name="email" type="email" autocomplete="email" onChange={e => setEmail(e.target.value)} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded--md focus:outline-none focus:ring-indigo-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Email address" />
						</div>
						<div>
							<label for="password" class="sr-only">Password</label>
							<input id="password" name="password" type="password" autocomplete="current-password" onChange={e => setPassword(e.target.value)} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Password" />
						</div>
					</div>

					{/* <div class="flex items-center justify-between">
						<div class="flex items-center">
							<input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
							<label for="remember_me" class="ml-2 block text-sm text-gray-900">
								Remember me
							</label>
						</div>

						<div class="text-sm">
							<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
								Forgot your password?
							</a>
						</div>
					</div> */}

					<div>
						<button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span class="absolute left-0 inset-y-0 flex items-center pl-3">
								{/* <!-- Heroicon name: solid/lock-closed --> */}
								<svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
									<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
								</svg>
							</span>
							Register
						</button>
					</div>
				</form>
			</div>
	    </div>
    )
}