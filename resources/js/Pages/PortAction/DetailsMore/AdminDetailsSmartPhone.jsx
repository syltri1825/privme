import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import { Head } from "@inertiajs/inertia-react";
import Card from "@/Components/Card";
import CardDetails from "@/Components/CardDetails";
import Title from "@/Components/Title";
import BackLink from "@/Components/Component/BackLink";
import Footer from "@/Components/Component/SimpleComponent/Footer";

export default function AdminDetailsSmartPhone(props){



    return(
        <>
            <ActionLayouts
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold">Details publication Smartphone</h2>}
                // add={route('addimage')}
                more={`/dashboard/details/smartphone/${props.onlySmartphone.id}`}
                activeSmt={route().current('smartphone')}
                // update={route('updateimage')}
                nameLogo={'logo'}
                activeMore={route().current(`/dashboard/details/smartphone/${props.onlySmartphone.id}`)}
            >
                <Head title="Details" />

                <Title intituleTitle={<h3>Details publication smartphone</h3>} ></Title>
                
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('smartphone')}></BackLink>
                </div>

                {
                    props.onlySmartphone.map(p => (
                        <div className="col-md-12 text-center" 
                            key={p.id}
                        >
                            <CardDetails
                                p={p.id}
                                file={p.article}
                                title={p.title}
                                price={p.price}
                                category={p.category}
                                datePdublish={p.date_publication}
                                rule={"smartphone"}
                                description={p.description}
                                update={`/dashboard/upd/smartphone/${p.id}`}
                                testMe={"one"}
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