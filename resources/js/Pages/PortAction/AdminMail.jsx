import React from 'react';
import { Head, usePage } from '@inertiajs/inertia-react';
import ActionLayouts from '@/Layouts/Layouts/ActionLayouts';
import Title from '@/Components/Title';
import Card from '@/Components/Card';
import Footer from '@/Components/Component/SimpleComponent/Footer';
import BackLink from '@/Components/Component/BackLink';

export default function AdminMail(props) {

    
    return (
        <ActionLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Adress Email Post</h2>}
            add={route('addMail')}
            activeMl={route().current('mail')}
        >
            <Head title="Post with Mail Adress" />

            <Title intituleTitle={<h3>All post Adress Email</h3>} ></Title>
            
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
                props.mail.map(p => 
                    (
                        <Card
                                p={p.id}
                                m={props.message}
                                key={p.id}
                                author={p.author}
                                datePdublish={p.datePublication}
                                email={p.email}
                                more={`/dashboard/details/mail/${p.id}`}
                                testMe={"ten"}
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


