import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import { Head } from "@inertiajs/inertia-react";
import CardDetails from "@/Components/CardDetails";
import Title from "@/Components/Title";
import BackLink from "@/Components/Component/BackLink";
import Footer from "@/Components/Component/SimpleComponent/Footer";

export default function AdminDetailsSmartTv(props){



    return(
        <>
            <ActionLayouts
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold">Details publication Smart Tv</h2>}
                // add={route('addimage')}
                more={`/dashboard/details/smarttv/${props.onlySmartTv.id}`}
                activeSmtt={route().current('smarttv')}
                // update={route('updateimage')}
                nameLogo={'logo'}
                activeMore={route().current(`/dashboard/details/smarttv/${props.onlySmartTv.id}`)}
            >
                <Head title="Details" />

                <Title intituleTitle={<h3>Details publication Smart Tv</h3>} ></Title>
                
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('smarttv')}></BackLink>
                </div>

                {
                    props.onlySmartTv.map(p => (
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
                                rule={"smarttv"}
                                update={`/dashboard/upd/smarttv/${p.id}`}
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