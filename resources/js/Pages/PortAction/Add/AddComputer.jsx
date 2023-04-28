import React from "react";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import AddFormImage from "@/Components/Component/ActionComponent/Add/AddFormImage";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import BackLink from "@/Components/Component/BackLink";



export default function AddComputer(props){
    return(
        <ActionLayouts
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Add a computer Post</h2>}
            add={route('addComputer')}
            // update={route('updatecomputer')}
            activeAdd={route().current('addComputer')}
        >

            <Head title="Add a computer Post" />

            <Title intituleTitle={<h3>Publish a computer publication</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('computer')}></BackLink>
            </div>

            <AddFormImage
                infoObject={"Please choose only one image"}
                labelPrice={"Enter a price"}
                title={"Set a title for your post"}
                category={"Choose the category of your publication"}
                description={"Describe your post"}
                link={"/formaddcomputer"}
            >
            </AddFormImage>

            <Footer></Footer>

            
        </ActionLayouts>
    );
}