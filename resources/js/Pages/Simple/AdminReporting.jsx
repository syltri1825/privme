import React from "react";
import { Head } from "@inertiajs/inertia-react";
import SimpleLayouts from '@/Layouts/Layouts/SimpleLayouts';
import Footer from "@/Components/Component/SimpleComponent/Footer";
import FigCaption from "@/Components/Component/SimpleComponent/FigCaption";
import Title from "@/Components/Title";
import BackLink from "@/Components/Component/BackLink";
import Link from "@/Components/LinkBack";




export default function AdminReporting(props){

    return(
        <SimpleLayouts
            auth={props.auth}
            error={props.error}
            header={<h2 className="font-semibold">Reporting</h2>}
            activeRep={route().current('reporting')}
        >
            <Head title="Reporting"/>

            <div className="col-md-12 p-3 text--black text-center">
                <header className='col-md-12'><Title intituleTitle={<h1>Report of activities on your platform</h1>}/></header>
                
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('dashboard')}></BackLink>
                </div>

                <article className='col-md-12 p-5'>
                    <div className="row">
                        <div className="col-md-4">
                                <Link className="col-md-12" href={"#"}>
                                    <div className="row">                                        
                                        <div className="col-md-6">
                                            <FigCaption intitule={"New click on redirect buttons"} idone="form--rapp" idtwo="form--rap--one"/>
                                        </div>
                                        <div className="col-md-6">
                                            <FigCaption intitule={"Recent posts"} idone="form--rapp" idtwo="form--rap--two"/>
                                        </div>
                                    </div>
                                </Link>
                        </div>
                        <div className="col-md-4">
                            <Link className="col-md-12" href={"#"}>
                                <div className="row">                                        
                                    <div className="col-md-6">
                                        <FigCaption intitule={"Old image releases"} idone="form--rapp" idtwo="form--rap--tree"/>
                                    </div>
                                    <div className="col-md-6">
                                        <FigCaption intitule={"New click on old image posts"} idone="form--rapp" idtwo="form--rap--four"/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link className="col-md-12" href={"#"}>
                                <div className="row">                                        
                                    <div className="col-md-6">
                                        <FigCaption intitule={"Old audio releases"} idone="form--rapp" idtwo="form--rap--five"/>
                                    </div>
                                    <div className="col-md-6">
                                        <FigCaption intitule={"New click on old audio posts"} idone="form--rapp" idtwo="form--rap--six"/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </article>

                <article className="col-md-12 p-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Link className="col-md-12" href={"#"}>
                                <div className="row">                                        
                                    <div className="col-md-6">
                                        <FigCaption intitule={"Old video releases"} idone="form--rapp" idtwo="form--rap--one"/>
                                    </div>
                                    <div className="col-md-6">
                                        <FigCaption intitule={"New click on old video posts"} idone="form--rapp" idtwo="form--rap--tree"/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* <div className="col-md-4">
                            <Link className="col-md-12" href={"#"}>
                                <div className="row">                                        
                                    <div className="col-md-6">
                                        <FigCaption intitule={"Recent posts"} idone="form--rapp" idtwo="form--rap--two"/>
                                    </div>
                                    <div className="col-md-6">
                                        <FigCaption intitule={"Recent posts"} idone="form--rapp" idtwo="form--rap--five"/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link className="col-md-12" href={"#"}>
                                <div className="row">                                        
                                    <div className="col-md-6">
                                        <FigCaption intitule={"Recent posts"} idone="form--rapp" idtwo="form--rap--four"/>
                                    </div>
                                    <div className="col-md-6">
                                        <FigCaption intitule={"Recent posts"} idone="form--rapp" idtwo="form--rap--six"/>
                                    </div>
                                </div>
                            </Link>
                        </div> */}
                    </div>
                </article>
            </div>

            <Footer />




        </SimpleLayouts>
    );
}



    //   {[
    //     'Primary',
    //     'Secondary',
    //     'Success',
    //     'Danger',
    //     'Warning',
    //     'Info',
    //     'Light',
    //     'Dark',
    //   ].map((variant) => (
    //     <Card
    //       bg={variant.toLowerCase()}
    //       key={variant}
    //       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    //       style={{ width: '18rem' }}
    //       className="mb-2"
    //     >
    //       <Card.Header>Header</Card.Header>
    //       <Card.Body>
    //         <Card.Title>{variant} Card Title </Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   ))}



// import React from 'react';
// import { Head } from '@inertiajs/inertia-react';
// import PortSimpleLayouts from '@/Layouts/Layouts/SimpleLayouts';

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


























