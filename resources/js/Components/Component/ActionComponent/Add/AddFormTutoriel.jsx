import React, { useEffect, useState } from "react";
import AppSelectForm from "../AppSelectForm";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import AppSelectFormTuto from "../AppSelectFormTuto";


export default function AddFormTutoriel({className, infoObject, category, codeSource, title, description}){

    const { errors } = usePage().props;

    const [addList,setAddList] = useState({
        title: '',
        category: '',
        description: ''
    });

    const [objectFile,setObjectFile] = useState({
        video: ''
    });
 
    const [manage,setManage] = useState({
        info: '',
        PortLoading: '',
        status: false
    });

    // useEffect(() => {
    //     validPortSubmit()
    // },[])

    const validPortObjectFile = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setObjectFile({...objectFile,[name]:value})
    }

    const validPortChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setAddList({...addList,[name]: value})
    }

    const validPortSubmit = async(e) => {
        e.preventDefault();
        if(addList.title != '' && addList.category != '' &&
        addList.description != '' && objectFile.video != ''){

            const PortData = {
                video: objectFile.video,
                title: addList.title,
                category: addList.category,
                description: addList.description
            }

            Inertia.post('/formaddtutoriel',PortData);
        }
        else{
            setAddList((prevState) => {
                return {
                    ...prevState,
                    title: '',
                    category: '',
                    description: ''
                }
            });
            setObjectFile((prevState) => {
                return {
                    ...prevState,
                    video: ''
                }
            });
            setManage((prevState) =>{
                return {
                    ...prevState,
                    info: 'You have missing fields',
                    status: false
                }
            })
        }
    }

    return(
        <div className="col-md-6 offset-md-3 p-3 mt-4 mb-4 bg--gray">
            <form onSubmit={validPortSubmit} encType={"multipart/form-data"}>
                {manage.status === true ? <p className="perso--message mt-2">{manage.info}</p> :
                 <p className="perso--message">{manage.info}</p>} 
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <label htmlFor="title">{title}</label>
                <input type="text" id="title" name="title" onChange={validPortChange} value={addList.title} className="form-control mt-2" placeholder="title"/>
                {errors.title && <span style={{color:"red"}}>{errors.title}</span>}
                <br />
                <label htmlFor="video" className="mt-3">{infoObject}</label>
                <input type="text" id="video" name="video" onChange={validPortObjectFile} value={objectFile.video} className="form-control mt-2" placeholder="tutorial video"/>
                {errors.video && <span style={{color:"red"}}>{errors.video}</span>}
                <br />
                <label htmlFor="category" className="mt-3">{category}</label>
                <AppSelectFormTuto
                    className="form-control mt-2"
                    one ={"tutoriel"}
                    two ={"smartphone"} 
                    three ={"smart tv"}
                    four={"computer"}
                    five={"Other product"}
                    rule={"tutoriel"}
                    change={validPortChange} 
                    value={addList.category}
                ></AppSelectFormTuto>
                {errors.category && <span style={{color:"red"}}>{errors.category}</span>}
                {/* <input type="text" id="category" name="category" onChange={validPortChange} value={addList.category} className="form-control mt-2" placeholder="category"/> */}
                <br />
                {/* <label htmlFor="codeSource" className="mt-3">{codeSource}</label>
                <input type="text" id="codeSource" name="codeSource" cols="10" rows="4" onChange={validPortChange} value={addList.codeSource} className="form-control mt-2" placeholder="code source"/>
                {errors.codeSource && <span style={{color:"red"}}>{errors.codeSource}</span>}
                <br /> */}
                <label htmlFor="description" className="mt-3">{description}</label>
                <textarea type="text" id="description" name="description" cols="10" rows="4" onChange={validPortChange} value={addList.description} className="form-control mt-2" placeholder="description"/>
                {errors.description && <span style={{color:"red"}}>{errors.description}</span>}
                <br />
                <button type="submit" className="btn btn-light btn--colo col-sm-12 mb-3">
                    <h4 className="">
                        Publish
                    </h4>
                </button>
            </form>
        </div>
    );
}









