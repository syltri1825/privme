import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import BackLink from "@/Components/Component/BackLink";
import AddFormMail from "@/Components/Component/ActionComponent/Add/AddFormMail";



export default function AddMail(props){
    return(
        <ActionLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Add Post With Mail Adress save</h2>}
            add={route('addMail')}
            // update={route('updateproduct')}
            activeAdd={route().current('addMail')}
        >

            <Head title="Add Post With Mail Adress" />

            <Title intituleTitle={<h3>Publish a publication with Mail Adress</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('mail')}></BackLink>
            </div>

            <AddFormMail
                author={"Adding author name"}
                mail={"Email to be added"}
            >
            </AddFormMail>

            <Footer></Footer>

            
        </ActionLayouts>
    );
}