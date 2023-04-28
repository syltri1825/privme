import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import { Head } from "@inertiajs/inertia-react";
import Card from "@/Components/Card";
import CardDetails from "@/Components/CardDetails";
import Title from "@/Components/Title";
import BackLink from "@/Components/Component/BackLink";
import Footer from "@/Components/Component/SimpleComponent/Footer";

export default function AdminDetailsComputer(props){



    return(
        <>
            <ActionLayouts
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold">Details publication Computer</h2>}
                // add={route('addimage')}
                more={`/dashboard/details/computer/${props.onlyComputer.id}`}
                activeImg={route().current('computer')}
                // update={route('updateimage')}
                nameLogo={'logo'}
                activeMore={route().current(`/dashboard/details/computer/${props.onlyComputer.id}`)}
            >
                <Head title="Details" />

                <Title intituleTitle={<h3>Details publication Computer</h3>} ></Title>
                
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('computer')}></BackLink>
                </div>

                {
                    props.onlyComputer.map(p => (
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
                                description={p.description}
                                rule={"computer"}
                                update={`/dashboard/upd/computer/${p.id}`}
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