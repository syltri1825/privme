import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import BackLink from "@/Components/Component/BackLink";
import UpdFormTutoriel from "@/Components/Component/ActionComponent/Update/UpdFormTutoriel";


export default function UpdTutoriel(props){
    return(
        <ActionLayouts 
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Update Tutoriel Post</h2>}
        >

            <Head title="Update tutorial Video Post" />

            <Title intituleTitle={<h3>Update tutorial Video publication</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('tutoriel')}></BackLink>
            </div>

            {
                props.par.map(p => (
                    <div key={p.id}>
                        <UpdFormTutoriel
                            // info={props.updateMe}
                            setting={p.title}
                            pile={p.id}
                            update={p.id}
                            infoObject={"Please choose only one tutoriel content"}
                            title={"Set a title for your post"}
                            category={"Choose the category of your publication"}
                            description={"Describe your post"}
                            codeSource={"Link of code source"}
                        >
                        </UpdFormTutoriel>
                    </div>
                ))
            }
            

            <Footer></Footer>

        </ActionLayouts>
    );
}