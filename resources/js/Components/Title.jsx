import React from "react";




export default function Title({intituleTitle}){

    return(
        <div className="py-1 text-center">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-sm sm:rounded-lg">
                    <div
                        className="p-6 pc-bg border-b 
                        border-gray-200 text--white pur"
                    >
                        {intituleTitle}
                    </div>
                </div>
            </div>
        </div>
    )
}