import React from "react";
import Link from "@/Components/LinkBack";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import AddFormImage from "@/Components/Component/ActionComponent/Add/AddFormImage";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import BackLink from "@/Components/Component/BackLink";



export default function AddProduit(props){
    return(
        <ActionLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Add other product Post</h2>}
            add={route('addProduit')}
            // update={route('updateimage')}
            activeAdd={route().current('addProduit')}
        >

            <Head title="Add other product Post" />

            <Title intituleTitle={<h3>Publish other product publication</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('produit')}></BackLink>
            </div>

            <AddFormImage
                infoObject={"Please choose only one image"}
                labelPrice={"Enter a price"}
                title={"Set a title for your post"}
                category={"Choose the category of your publication"}
                description={"Describe your post"}
                link={"/formaddproduit"}
            >
            </AddFormImage>

            <Footer></Footer>

            
        </ActionLayouts>
    );
}