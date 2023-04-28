import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import BackLink from "@/Components/Component/BackLink";
import AddFormTutoriel from "@/Components/Component/ActionComponent/Add/AddFormTutoriel";



export default function AddTutoriel(props){
    return(
        <ActionLayouts 
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Add a tutorial Post</h2>}
            add={route('addTutoriel')}
            // update={route('updateTutoriel')}
            activeAdd={route().current('addTutoriel')}
        >
            <Head title="Add a tutorial Post" />

            <Title intituleTitle={<h3>Publish a tutorial publication</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('tutoriel')}></BackLink>
            </div>

            <AddFormTutoriel
              infoObject={"Please choose only one video content"}
              title={"Set a title for your post"}
              category={"Choose the category of your publication"}
              description={"Describe your post"}
              codeSource={"Link of code source"}
            >
            </AddFormTutoriel>

            <Footer></Footer>

        </ActionLayouts>
    );
}