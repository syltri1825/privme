import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import SimpleLayouts from '@/Layouts/Layouts/SimpleLayouts';
import Link from '@/Components/LinkBack';
import Footer from '@/Components/Component/SimpleComponent/Footer';
import Title from '@/Components/Title';
import BackLink from '@/Components/Component/BackLink';

export default function AdminDashBoard(props) {
    
    // if(props.line == 'true')
    // {
    //     return (
    //         <SimpleLayouts
    //             auth={props.auth}
    //             errors={props.errors}
    //             header={<h2 className="font-semibold">Dashboard</h2>}
    //             activeDash={route().current('dashboard')}
    //         >
    //             <Head title="Dashboard" />
    
    //             <Title intituleTitle={<h3>Welcome Dear Administrator</h3>}/>
                
    //             <div className="col-md-12 text-left backlink--style">
    //                 <BackLink backLink={route('dashboard')}></BackLink>
    //             </div>
                
    //             <div className="col-md-12 p-3 text--black text-center">
    //                 <header className='col-md-12'><h1>Explore your published articles</h1></header>
                    
    //                 <div className="col-md-12 berg">
    //                     <article className='col-md-12 py-5'>
    //                         <div className="row">
    //                             <div className="col-md-6 bg-all">
    //                                     <Link className="col-md-12" href={route('pdf')}>
    //                                         <figure className="col-md-12 ">
    //                                             <div>
    //                                                 <img width="200px" height="auto" src="../images/sh_pdf.png" />
    //                                             </div>
    //                                             <figcaption className="col-md-12" align="center">
    //                                                 <br />Publications WITH PDF
    //                                             </figcaption>
    //                                         </figure>
    //                                     </Link>
    //                             </div>
    //                             <div className="col-md-6 bg-all">
    //                                 <Link className="col-md-12" href={route('image')}>
    //                                     <figure className="col-md-12 ">
    //                                         <div>
    //                                             <img width="300px" height="auto" src={`http://localhost:8000/${props.image.image}`} />
    //                                         </div>
    //                                         <figcaption className="col-md-12" align="center">
    //                                             <br />Publications WITH IMAGE
    //                                         </figcaption>
    //                                     </figure>
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                     </article>
    
    //                     <article className="col-md-12">
    //                         <div className="row">
    //                             <div className="col-md-6 bg-all">
    //                                 <Link className="col-md-12" href={route('audio')}>
    //                                     <figure className="col-md-12 ">
    //                                         <div>
    //                                             <audio width="300px" height="auto" src={`htpp://localhost:8000/${props.audio.audio}`} controls/>
    //                                         </div>
    //                                         <figcaption className="col-md-12 py-5" align="center">
    //                                             <br />Publications WITH AUDIO
    //                                         </figcaption>
    //                                     </figure>
    //                                 </Link>
    //                             </div>
    //                             <div className="col-md-6 bg-all">
    //                                 <Link className="col-md-12" href={route('video')}>
    //                                     <figure className="col-md-12 ">
    //                                         <div>
    //                                             <video width="300px" height="25px" src={`http://localhost:8000/${props.video.video}`} controls />
    //                                         </div>
    //                                         <figcaption className="col-md-12" align="center">
    //                                             <br />Publications WITH VIDEO
    //                                         </figcaption>
    //                                     </figure>
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                     </article>
    //                 </div>
    //             </div>
    
    //             <Footer />
    
    //         </SimpleLayouts>
    //     );
    // }
    // else
    // {
        return (
            <SimpleLayouts
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold">Dashboard</h2>}
                activeDash={route().current('dashboard')}
            >
                <Head title="Dashboard" />
    
                <Title intituleTitle={<h3>Welcome Dear Administrator</h3>}/>
                
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('dashboard')}></BackLink>
                </div>
                
                <div className="col-md-12 p-3 text--black text-center">
                    <header className='col-md-12'><h1>Explore your published articles</h1></header>
                    <article className='col-md-12'>
                        <div className="row">
                            <div className="col-md-6">
                                    <Link className="col-md-12" href={route('smartphone')}>
                                        <figure className="col-md-12 ">
                                            <div>
                                                <img width="300px" height="auto" src="../images/smart_6.jpg" />
                                            </div>
                                            <figcaption className="col-md-12" align="center">
                                                <br />Publications Smartphone
                                            </figcaption>
                                        </figure>
                                    </Link>
                            </div>
                            <div className="col-md-6">
                                <Link className="col-md-12" href={route('smarttv')}>
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="auto" src="../images/smart_tv_2.png" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br />Publications Smart tv
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </div>
                    </article>
    
                    <article className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <Link className="col-md-12" href={route('computer')}>
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="auto" src="../images/hp_pavillon.jpg" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br />Publications Computer
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link className="col-md-12" href={route('produit')}>
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="25px" src="../images/web_cam.jpeg" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br />Publications Autres produit
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </div>
                    </article>

                    <article className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <Link className="col-md-12" href={route('tutoriel')}>
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="auto" src="../images/tutoriel.jpg" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br />Publications tutoriel 
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                            {/* <div className="col-md-6">
                                <Link className="col-md-12" href={route('sms')}>
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="25px" src="../images/tutorial.jpg" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br />Publications WITH TUTORIAL SMS
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div> */}
                        </div>
                    </article>

                    {/* <article className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <Link className="col-md-12" href={route('cloud')}>
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="auto" src="../images/tutorial.jpg" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br />Publications WITH TUTORIAL CLOUD
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link className="col-md-12" href={route('product')}>
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="25px" src="../images/tutorial.jpg" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br />Publications OF PRODUCT
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </div>
                    </article> */}

                </div>
    
                <Footer />
    
            </SimpleLayouts>
        );
    // }
    
}

































// import React from 'react';
// import { Head } from '@inertiajs/inertia-react';
// import PortSimpleLayouts from '@/Layouts/ShibatLayouts/SimpleLayouts';

// export default function ShibatAdminDashBoard(props) {
//     return (
//         <SimpleLayouts
//             auth={props.auth}
//             errors={props.errors}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div 
//                             className="p-6 bg-white border-b 
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
