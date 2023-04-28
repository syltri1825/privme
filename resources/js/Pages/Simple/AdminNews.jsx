import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Layouts from '@/Layouts/Layouts/SimpleLayouts';
import BackLink from "@/Components/Component/BackLink";
import Title from "@/Components/Title";
import { Inertia } from "@inertiajs/inertia";


export default function AdminNews(props){

    const [style,setStyle] = useState({
        nGrid: 'n-grid',
        nGrid1: 'n-grid1',
        nGrid2: 'n-grid2',
        nGrid3: 'n-grid3',
        nFlex: 'n-flex',
        nBlock: 'n-block'
    })
    const [lengthMessage,setLengthMessage] = useState()

    // useEffect(() => {
    //     localStorage.setItem("message",lengthMessage)
    // },[])

    const validPortDelete = (id) => {
        Inertia.delete(`/dashboard/delete/ask/${id}`);
    }

    return(
        <Layouts
            auth={props.auth}
            error={props.error}
            header={<h2 className="font-semibold">News Order</h2>}
            activeNew={route().current('news')}
            lengthNew={lengthMessage}
        >
            <Head title="News"/>

            <Title intituleTitle={<h3>Notification of mail received and new report</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('dashboard')}></BackLink>
            </div>
                
            <div className={style.nGrid}>
                <div className={style.nGrid1}></div>
                <div className={style.nGrid2}>
                    <div className={style.nFlex}>
                    {
                        props.ask.map(p => (
                            <div key={p.id} className={style.nBlock}>
                                <h1 style={{textAlign:"left"}}>
                                    {p.id}
                                </h1>
                                <p style={{textAlign:"left"}}
                                    dangerouslySetInnerHTML={{ __html: p.message}}
                                >
                                </p>
                                <div className="col-md-12 text-left mb-3">
                                    <button className="button-a4" onClick={() => validPortDelete(p.id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className={style.nGrid3}></div>
            </div>

        </Layouts>
    );
}












// import React from 'react';
// import { Head } from '@inertiajs/inertia-react';
// import Layouts from '@/Layouts/Layouts/Layouts';

// export default function ShibatAdminDashBoard(props) {
//     return (
//         <Layouts
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
//         </Layouts>
//     );
// }


























