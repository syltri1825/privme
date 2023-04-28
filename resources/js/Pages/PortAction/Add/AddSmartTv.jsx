import React from "react";
import NavLink from "@/Components/NavLink";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import AddFormImage from "@/Components/Component/ActionComponent/Add/AddFormImage";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import BackLink from "@/Components/Component/BackLink";



export default function AddSmartTv(props){
    return(
        <ActionLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Add a smart tv Post</h2>}
            add={route('addSmarttv')}
            // update={route('updateimage')}
            activeAdd={route().current('addSmarttv')}
        >

            <Head title="Add a smart tv Post" />

            <Title intituleTitle={<h3>Publish a smart tv publication</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('smarttv')}></BackLink>
            </div>

            <AddFormImage
                infoObject={"Please choose only one image"}
                labelPrice={"Enter a price"}
                title={"Set a title for your post"}
                category={"Choose the category of your publication"}
                description={"Describe your post"}
                link={"/formaddsmarttv"}
            >
            </AddFormImage>

            <Footer></Footer>

            
        </ActionLayouts>
    );
}