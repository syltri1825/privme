import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function LinkBack({ href, active, bl, children }) {
    
    if(bl == "backLink"){
        return (
            <Link
                href={href}
                className={
                    active
                        ? 'text-rv td inline-flex items-center px-1 pt-1 border-b-2 border-white-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-gray-700 transition duration-150 ease-in-out'
                        : 'text-rv td inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                }
            >
                {children}
            </Link>
        );
    }
    
    return (
        <Link
            href={href}
            className={
                active
                    ? 'text-white td inline-flex items-center px-1 pt-1 border-b-2 border-white-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-gray-700 transition duration-150 ease-in-out'
                    : 'text-white td inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
