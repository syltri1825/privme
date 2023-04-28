import React from "react";
import NavLink from "@/Components/NavLink";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import AddFormImage from "@/Components/Component/ActionComponent/Add/AddFormImage";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import BackLink from "@/Components/Component/BackLink";



export default function AddSmartPhone(props){
    return(
        <ActionLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Add a smartphone Post</h2>}
            add={route('addSmartphone')}
            // update={route('updatesmartphone')}
            activeAdd={route().current('addSmartphone')}
        >

            <Head title="Add a smartphone Post" />

            <Title intituleTitle={<h3>Publish a smartphone publication</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('smartphone')}></BackLink>
            </div>

            <AddFormImage
                infoObject={"Please choose only one image"}
                labelPrice={"Enter a price"}
                title={"Set a title for your post"}
                category={"Choose the category of your publication"}
                description={"Describe your post"}
                link={"/formaddsmartphone"}
            >
            </AddFormImage>

            <Footer></Footer>

            
        </ActionLayouts>
    );
}