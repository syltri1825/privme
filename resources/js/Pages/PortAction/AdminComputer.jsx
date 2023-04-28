import React from 'react';
import { Head, usePage } from '@inertiajs/inertia-react';
import ActionLayouts from '@/Layouts/Layouts/ActionLayouts';
import Title from '@/Components/Title';
import Card from '@/Components/Card';
import Footer from '@/Components/Component/SimpleComponent/Footer';
import BackLink from '@/Components/Component/BackLink';

export default function AdminComputer(props) {

    
    return (
        <ActionLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Post with Computer</h2>}
            add={route('addComputer')}
            activeComputer={route().current('computer')}
            // update={route('updatecomputer')}
        >
            <Head title="Post of Computer" />

            <Title intituleTitle={<h3>All your Computer publications</h3>} ></Title>
            
            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('dashboard')}></BackLink>
            </div>

            {
            props.success ? 
            <div className="col-md-12 text-center bg-wa">
                <h1 className="col-md-12">{props.success}</h1>
            </div>
            : ''
            }
            <div className="col-md-12">
                <div className="row">
            {
                props.computer.map(p => 
                    (
                        <Card
                            p={p.id}
                            m={props.message}
                            key={p.id}
                            file={p.article}
                            price={p.price}
                            title={p.title}
                            category={p.category}
                            datePdublish={p.date_publication}
                            description={p.description}
                            more={`/dashboard/details/computer/${p.id}`}
                            testMe={"one"}
                        >
                        </Card>
                    )
                )
            }
                </div>
            </div>
            
            

            <Footer></Footer>

        </ActionLayouts>
    );
}


