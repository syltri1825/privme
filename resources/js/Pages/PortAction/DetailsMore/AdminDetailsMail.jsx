import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import { Head } from "@inertiajs/inertia-react";
import CardDetails from "@/Components/CardDetails";
import Title from "@/Components/Title";
import BackLink from "@/Components/Component/BackLink";
import Footer from "@/Components/Component/SimpleComponent/Footer";

export default function PortAdminDetailsMail(props){



    return(
        <>
            <ActionLayouts
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold">Details publication with Mail adress</h2>}
                // add={route('addproduct')}
                more={`/dashboard/details/mail/${props.onlyMail.id}`}
                activeMl={route().current('mail')}
                // update={route('updateproduct')}
                nameLogo={'logo'}
                activeMore={route().current(`/dashboard/details/mail/${props.onlyMail.id}`)}
            >
                <Head title="Details" />

                <Title intituleTitle={<h3>Details publication with Mail adress</h3>} ></Title>
                
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('mail')}></BackLink>
                </div>

                {
                    props.onlyMail.map(p => (
                        <div className="col-md-12 text-center" 
                            key={p.id}
                        >
                            <CardDetails
                                p={p.id}
                                author={p.author}
                                datePdublish={p.datePublication}
                                email={p.email}
                                update={`/dashboard/upd/mail/${p.id}`}
                                testMe={"ten"}
                                rule={"mail"}
                            >
                            </CardDetails>
                        </div>
                    ))
                }
                
                

                <Footer></Footer>

            </ActionLayouts>
        </>
    );
}