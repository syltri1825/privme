import React, { useState } from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import { Head, Link } from "@inertiajs/inertia-react";
import CardDetails from "@/Components/CardDetails";
import Title from "@/Components/Title";
import BackLink from "@/Components/Component/BackLink";
import Footer from "@/Components/Component/SimpleComponent/Footer";



export default function AdminDetailsTutoriel(props){

    // console.log(props.video)
    return(
        <>
            <ActionLayouts
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold">Details publication Tutorial Video</h2>}
                // add={route('addimage')}
                more={`/dashboard/details/voip/${props.onlyTutoriel.id}`}
                activeTut={route().current('tutoriel')}
                // update={route('updateVoip')}
                nameLogo={'Point Client'}
                activeMore={route().current(`/dashboard/details/tutoriel/${props.onlyTutoriel.id}`)}
            >
                <Head title="Details" />

                <Title intituleTitle={<h3>Details publication with tutorial Video</h3>} ></Title>
                
                <div className="col-md-12 text-left backlink--style">
                    <BackLink backLink={route('tutoriel')}></BackLink>
                </div>

                {
                    props.onlyTutoriel.map(p => (
                        <div className="col-md-12 text-center" 
                            key={p.id}
                        >
                            <CardDetails
                                sms={props.message}
                                p={p.id}
                                file={p.tutoriel}
                                title={p.title}
                                cs={p.code_source}
                                rule={"tutoriel"}
                                category={p.category}
                                datePdublish={p.datePublication}
                                description={p.description}
                                update={`/dashboard/upd/tutoriel/${p.id}`}
                                testMe={"five"}
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




// const Api = () => [
//     {
//         id: 0,
//         title: "C’est quoi l’intelligence artificielle ? Découvrir #1",
//         content: "Free Voip",
//         support: <iframe width="700" height="400" className={"col-md-12"} src="https://www.youtube.com/embed/yQLmgw3rClM" title="C’est quoi l’intelligence artificielle ? Découvrir #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     },
//     {
//         id: 1,
//         title: "Serons-nous remplacés par des intelligences artificielles ?",
//         content: "Free Voip",
//         support: <iframe width="700" height="400" className={"col-md-12"} src="https://www.youtube.com/embed/06XDN5WMjnM" title="Serons-nous remplacés par des intelligences artificielles ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     },
//     {
//         id: 2,
//         title: "Envoyé spécial. Robots le meilleur des mondes - 11 janvier 2018 (France 2)",
//         content: "Free Voip",
//         support: <iframe width="700" height="400" className={"col-md-12"} src="https://www.youtube.com/embed/p647ezfEows" title="Envoyé spécial. Robots le meilleur des mondes - 11 janvier 2018 (France 2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     },
//     {
//         id: 3,
//         title: "🤖 La robot-mania, les robots français sont à la pointe de l'innovation.",
//         content: "Free Voip",
//         support: <iframe width="700" height="400" className={"col-md-12"} src="https://www.youtube.com/embed/3GrwiusjI9M" title="🤖 La robot-mania, les robots français sont à la pointe de l'innovation." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     }
// ]