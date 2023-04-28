import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Footer from '../../Components/Component/SimpleComponent/Footer';
import Title from '@/Components/Title';
import SimpleLayouts from '@/Layouts/Layouts/SimpleLayouts';
import NavLink from '@/Components/NavLink';
import BackLink from '@/Components/Component/BackLink';





export default function AdminSearch(props) {

    const free = props.free;
    const info = props.info;
    const linkee = props.linkee;

    if(free == true)
    {
        return (
            <SimpleLayouts
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold">Search Results</h2>}
                // activeDash={route().current('dashboard')}
            >
                <Head title="Search Result" />
    
                <Title intituleTitle={<h3>Result of Search</h3>}/>
                
                <h1 className="bg-war text-center">{props.info}</h1>
                
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('dashboard')}></BackLink>
                </div>

                <div className="col-md-12">
                    <div className="row">
                    {
                        props.smarttv.map(me => (
                            <div key={me.id} className="col-md-6 px-5 py-3 text--black text-left">
                            <NavLink className="col-md-12" href={`/dashboard/details/smarttv/${me.id}`}>
                            
                                <div 
                                    style={{
                                    // border: '1px solid yellow', 
                                    borderRadius: '10px 10px 0 0',
                                    maxWidth: '500px',
                                    maxHeight: '400px',
                                    marginBottom:"100px"}}
                                    className="col-md-12 p-3 bg-warn"
                                >
                                    <span className="col-md-12 mb-3 rond--span">
                                        <strong className="rond--comp">{me.id}</strong>
                                    </span>
                                    <div className="col-md-12 des--style">
                                        <img src={`http://localhost:8000/${me.article}`} className="form--img mb-3 mt-3 im--style" />
                                        <div className="col-md-12 mt-3 text-left">
                                        <h6 className="col-md-12 mb-3 mt-3 pl-3">{me.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        ))
                    }
                                        {
                        props.smartphone.map(me => (
                            <div key={me.id} className="col-md-6 px-5 py-3 text--black text-left">
                                <NavLink className="col-md-12" href={`/dashboard/details/smartphone/${me.id}`}>
                                
                                    <div 
                                        style={{
                                        // border: '1px solid yellow', 
                                        borderRadius: '10px 10px 0 0',
                                        maxWidth: '500px',
                                        maxHeight: '400px',
                                        marginBottom:"100px"}}
                                        className="col-md-12 p-3 bg-warn"
                                    >
                                        <span className="col-md-12 mb-3 rond--span">
                                            <strong className="rond--comp">{me.id}</strong>
                                        </span>
                                        <div className="col-md-12 des--style">
                                            <img src={`http://localhost:8000/${me.article}`} className="form--img mb-3 mt-3 im--style" />
                                            <div className="col-md-12 mt-3 text-left">
                                            <h6 className="col-md-12 mb-3 mt-3 pl-3">{me.title}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                                        {
                        props.produit.map(me => (
                            <div key={me.id} className="col-md-6 px-5 py-3 text--black text-left">
                            <NavLink className="col-md-12" href={`/dashboard/details/produit/${me.id}`}>
                            
                                <div 
                                    style={{
                                    // border: '1px solid yellow', 
                                    borderRadius: '10px 10px 0 0',
                                    maxWidth: '500px',
                                    maxHeight: '400px',
                                    marginBottom:"100px"}}
                                    className="col-md-12 p-3 bg-warn"
                                >
                                    <span className="col-md-12 mb-3 rond--span">
                                        <strong className="rond--comp">{me.id}</strong>
                                    </span>
                                    <div className="col-md-12 des--style">
                                        <img src={`http://localhost:8000/${me.article}`} className="form--img mb-3 mt-3 im--style" />
                                        <div className="col-md-12 mt-3 text-left">
                                        <h6 className="col-md-12 mb-3 mt-3 pl-3">{me.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        ))
                    }
                    {
                        props.computer.map(me => (
                            <div key={me.id} className="col-md-6 px-5 py-3 text--black text-left">
                            <NavLink className="col-md-12" href={`/dashboard/details/computer/${me.id}`}>
                            
                                <div 
                                    style={{
                                    // border: '1px solid yellow', 
                                    borderRadius: '10px 10px 0 0',
                                    maxWidth: '500px',
                                    maxHeight: '400px',
                                    marginBottom:"100px"}}
                                    className="col-md-12 p-3 bg-warn"
                                >
                                    <span className="col-md-12 mb-3 rond--span">
                                        <strong className="rond--comp">{me.id}</strong>
                                    </span>
                                    <div className="col-md-12 des--style">
                                        <img src={`http://localhost:8000/${me.article}`} className="form--img mb-3 mt-3 im--style" />
                                        <div className="col-md-12 mt-3 text-left">
                                        <h6 className="col-md-12 mb-3 mt-3 pl-3">{me.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        ))
                    }
                    </div>
                </div>

                
                <Footer />
    
            </SimpleLayouts>
        );
    }

    // if(free == false){
        return (
            <SimpleLayouts
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold">Search Results</h2>}
                // activeDash={route().current('dashboard')}
            >
                <Head title="Search Result" />
    
                <Title intituleTitle={<h3>Result of Search</h3>}/>
    
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('dashboard')}></BackLink>
                </div>
                
                <div className="col-md-12">
                    <h1 className="m-5 bg-wa text-center">{info}</h1>
                </div>
    
                <Footer />
    
            </SimpleLayouts>
        );
    // }
    
}


