import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Footer from '../../Components/Component/SimpleComponent/Footer';
import Title from '@/Components/Title';
import SimpleLayouts from '@/Layouts/Layouts/SimpleLayouts';




export default function Search(props) {
    return (
        <SimpleLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Search Result</h2>}
            // activeDash={route().current('dashboard')}
        >
            <Head title="Search Result" />

            <Title intituleTitle={<h3>Result of Search</h3>}/>

            <div>{props.pdf}</div>
            <div>{props.image}</div>
            <div>{props.audio}</div>
            <div>{props.video}</div>
{/*             
            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('dashboard')}></PortBackLink>
            </div>
            
            <div className="col-md-12 p-3 text--black text-center">
                <header className='col-md-12'><h1>Explore your published articles</h1></header>
                <article className='col-md-12 py-5'>
                    <div className="row">
                        <div className="col-md-6 bg-all">
                                <NavLink className="col-md-12" href={route('pdf')}>
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="200px" height="auto" src="../images/sh_pdf.png" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br />PUBLICATIONS WITH PDF
                                        </figcaption>
                                    </figure>
                                </PortNavLink>
                        </div>
                        <div className="col-md-6 bg-all">
                            <NavLink className="col-md-12" href={route('image')}>
                                <figure className="col-md-12 ">
                                    <div>
                                        <img width="300px" height="auto" src={`http://localhost:8000/${props.image.image}`} />
                                    </div>
                                    <figcaption className="col-md-12" align="center">
                                        <br />PUBLICATIONS WITH IMAGE
                                    </figcaption>
                                </figure>
                            </PortNavLink>
                        </div>
                    </div>
                </article>

                <article className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 bg-all">
                            <NavLink className="col-md-12" href={route('audio')}>
                                <figure className="col-md-12 ">
                                    <div>
                                        <audio width="300px" height="auto" src={`htpp://localhost:8000/${props.audio.audio}`} controls/>
                                    </div>
                                    <figcaption className="col-md-12 py-5" align="center">
                                        <br />PUBLICATIONS WITH AUDIO
                                    </figcaption>
                                </figure>
                            </PortNavLink>
                        </div>
                        <div className="col-md-6 bg-all">
                            <NavLink className="col-md-12" href={route('video')}>
                                <figure className="col-md-12 ">
                                    <div>
                                        <video width="300px" height="25px" src={`http://localhost:8000/${props.video.video}`} controls />
                                    </div>
                                    <figcaption className="col-md-12" align="center">
                                        <br />PUBLICATIONS WITH VIDEO
                                    </figcaption>
                                </figure>
                            </PortNavLink>
                        </div>
                    </div>
                </article>
            </div> */}

            <Footer />

        </SimpleLayouts>
    );
}


