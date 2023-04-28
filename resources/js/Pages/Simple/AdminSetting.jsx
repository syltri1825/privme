import React from "react";
import { Head } from "@inertiajs/inertia-react";
import SimpleLayouts from '@/Layouts/Layouts/SimpleLayouts';
import BackLink from "@/Components/Component/BackLink";
import Title from "@/Components/Title";


export default function AdminSetting(props){

    return(
        <SimpleLayouts
            auth={props.auth}
            error={props.error}
            header={<h2 className="font-semibold">Setting</h2>}
        >
            <Head title="Setting"/>

            <Title intituleTitle={<h3>Configure your dashboard</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('dashboard')}></BackLink>
            </div>

            <h1 className="text--black">Hello Setting ! </h1>


        </SimpleLayouts>
    );
}












// import React from 'react';
// import { Head } from '@inertiajs/inertia-react';
// import SimpleLayouts from '@/Layouts/Layouts/SimpleLayouts';

// export default function PortAdminDashBoard(props) {
//     return (
//         <SimpleLayouts
//             auth={props.auth}
//             errors={props.errors}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
//         >
//             <Head title="Dashboard" />

//             <div className="py-6">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div 
//                             className="p-6 bg-warning border-b 
//                             border-gray-200"
//                         >
//                             You're logged in! 
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </SimpleLayouts>
//     );
// }


























