import React from "react";
import NavLink from "@/Components/NavLink";
import ActionLayouts from "@/Layouts/Layouts/ActionLayouts";
import Title from "@/Components/Title";
import { Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Component/SimpleComponent/Footer";
import UpdFormImage from "@/Components/Component/ActionComponent/Update/UpdFormImage"
import BackLink from "@/Components/Component/BackLink";


export default function UpdComputer(props){
    return(
        <ActionLayouts 
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold">Update Computer Post</h2>}
        >

            <Head title="Update Post With Image" />

            <Title intituleTitle={<h3>Update Computer</h3>} ></Title>

            <div className="col-md-12 text-left backlink--style">
                <BackLink backLink={route('computer')}></BackLink>
            </div>

            {
                props.par.map(p => (
                    <div key={p.id}>
                        <UpdFormImage
                            // info={props.updateMe}
                            setting={p.title}
                            pile={p.id}
                            update={p.id}
                            infoObject={"Please choose only one image"}
                            labelPrice={"Enter a price"}
                            title={"Set a title for your post"}
                            category={"Choose the category of your publication"}
                            description={"Describe your post"}
                            link={"formupdcomputer"}
                        >
                        </UpdFormImage>
                    </div>
                ))
            }

            <Footer></Footer>

        </ActionLayouts>
    );
}