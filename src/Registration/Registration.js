import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const {createUser} = useContext(AuthContext)

    const diffToast = ()=>{
      alert('registration successful')
    }

    const  handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            toast.success('successfully done')
            console.log(user)
        })
        .catch(err =>console.error(err))
        
    }

    return (
      <section className="w-full h-full bg-gray-800 text-gray-50">
      <form novalidate="" onSubmit={handleSignUp} action="" className="container flex flex-col mx-auto ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <h2 className="text-3xl font-medium">Personal Inormation</h2>
            <p className="text-lg">The purpose of registration of a document is to give 'notice to the world' of a certain property document having been executed.</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstName" className="text-sm">First name</label>
              <input id="firstName" name='firstName' required type="text" placeholder="First name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastName" className="text-sm">Last name</label>
              <input id="lastName" name='lastName' required type="text" placeholder="Last name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="email" className="text-sm">Email</label>
              <input id="email" name='email' required type="email" placeholder="Email" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="password" className="text-sm">Email</label>
              <input id="password" name='password' required type="password" placeholder="password" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
            </div>
            <div className="col-span-full">
              <label for="address" className="text-sm">Address</label>
              <input id="address" name='address' required type="text" placeholder="" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="city" className="text-sm">City</label>
              <input id="city" name='city' type="text" required placeholder="" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="state" className="text-sm">State / Province</label>
              <input id="state" name='state' type="text" required placeholder="" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="zip" className="text-sm">ZIP / Postal</label>
              <input id="zip" name='zip' type="text" required placeholder="" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
            </div>
          </div>
          <div className="form-control items-center justify-center text-center mt-6">
                <button onClick={diffToast} className="btn btn-primary " type = "submit" value='register'>Submit</button>
                <ToastContainer/>
            </div>
        </fieldset>
      </form>
    </section>
    );
};

export default Registration;