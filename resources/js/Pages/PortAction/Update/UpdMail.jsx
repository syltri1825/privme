import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import BackLink from "@/Components/Component/BackLink";
import UpdFormMail from "@/Components/Component/ActionComponent/Update/UpdFormMail";


export default function UpdMail(props){
    return(
        <ActionLayouts 
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Update Post With Mail adress</h2>}
            // add={route('addvideo')}
            // update={`/dashboard/upd/${props.par.id}`}
            // activeUpd={route().current(`/dashboard/upd/${props.par.id}`)}
        >

            <Head title="Update Post With Mail Adress" />

            <Title intituleTitle={<h3>Update a publication with Mail adress</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('mail')}></BackLink>
            </div>

            {
                props.par.map(p => (
                    <div key={p.id}>
                        <UpdFormMail
                            // info={props.updateMe}
                            setting={p.email}
                            pile={p.id}
                            update={p.id}
                            author={"Adding author name"}
                            mail={"Email to be added"}
                        >
                        </UpdFormMail>
                    </div>
                ))
            }

            <Footer></Footer>

        </ActionLayouts>
    );
}