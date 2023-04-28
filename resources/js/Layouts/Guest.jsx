import React from 'react';
import Logo from '@/Components/Logo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ auth, children, rule }) {

    if (rule == "a") {
        return (
            <div className="min-h-screen pt-6 sm:pt-0 bg--guest">
                <div className='you--cent'>
                    <Link href="/">
                        <Logo className="text-gray-500 asl--style" />
                    </Link>
                </div>

                <div className="fixed top-0 right-10 px-6 py-4 sm:block">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="bg--color text-sm text-gray-700 btn btn-lg btn-light dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('register')} className="bg--color text-sm text-gray-700 btn btn-lg btn-warning dark:text-gray-500 underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-5 bg-white pos shadow-md overflow-hidden sm:rounded-lg bg--purple">
                    {children}
                </div>
            </div>
        );
    }
    if (rule == "b") {
        return (
            <div className="min-h-screen pt-6 sm:pt-0 bg--guest">
                <div className='you--cent'>
                    <Link href="/">
                        <Logo className="text-gray-500 asl--style" />
                    </Link>
                </div>

                <div className="fixed top-0 right-10 px-6 py-4 sm:block">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="bg--color text-sm text-gray-700 btn btn-lg btn-light dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="bg--color text-sm text-gray-700 btn btn-lg btn-light dark:text-gray-500 underline">
                                Log In
                            </Link>
                        </>
                    )}
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-5 bg-white pos shadow-md overflow-hidden sm:rounded-lg bg--purple">
                    {children}
                </div>
            </div>
        );
    }
}




    //     if (rule == "one") {
//         return (
//             <div className="min-h-screen pt-6 sm:pt-0 bg--guest">
//                 <div className='you--cent'>
//                     <Link href="/">
//                         <PortLogo className="text-gray-500 asl--style" />
//                     </Link>
//                 </div>

//                 <div className="fixed top-0 right-10 px-6 py-4 sm:block">
//                     {auth.user ? (
//                         <Link href={route('dashboard')} className="bg--color text-sm text-gray-700 btn btn-lg btn-light dark:text-gray-500 underline">
//                             Dashboard
//                         </Link>
//                     ) : (
//                         <>
//                             <Link href={route('register')} className="bg--color text-sm text-gray-700 btn btn-lg btn-light dark:text-gray-500 underline">
//                                 Register
//                             </Link>
//                         </>
//                     )}
//                 </div>

//                 <div className="w-full sm:max-w-md mt-6 px-6 py-5 bg-white pos shadow-md overflow-hidden sm:rounded-lg bg--purple">
//                     {children}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen pt-6 sm:pt-0 bg--guest">
//             <div className='you--cent'>
//                 <Link href="/">
//                     <PortLogo className="text-gray-500 asl--style" />
//                 </Link>
//             </div>

//             <div className="w-full sm:max-w-md mt-6 px-6 py-5 bg-white pos shadow-md overflow-hidden sm:rounded-lg bg--purple">
//                 {children}
//             </div>
//         </div>
//     );

