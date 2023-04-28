import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import ActionLayouts from '@/Layouts/Layouts/ActionLayouts';
import Title from '@/Components/Title';
import Card from '@/Components/Card';
import Footer from '@/Components/Component/SimpleComponent/Footer';
import BackLink from '@/Components/Component/BackLink';



export default function PortAdminVideo(props) {

    
    return (
        <ActionLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Post of tutorial Video</h2>}
            add={route('addTutoriel')}
            activeTuto={route().current('tutoriel')}
            // update={route('updatepdf')}
        >
            <Head title="Post with Tutorial Video" />

            <Title intituleTitle={<h3>All your tutorial Video</h3>} ></Title>
            
            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('dashboard')}></BackLink>
            </div>

            
            <div className="col-md-12 mg-mg">
                <div className="row">
            {
                props.tutoriel.map(p => 
                    (
                        <Card
                                p={p.id}
                                m={props.message}
                                key={p.id}
                                file={p.tutoriel}
                                title={p.title}
                                category={p.category}
                                datePdublish={p.datePublication}
                                description={p.description}
                                more={`/dashboard/details/tutoriel/${p.id}`}
                                testMe={"five"}
                                
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


