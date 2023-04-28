import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import AppSelectFormTuto from "../AppSelectFormTuto";


export default function UpdFormTutoriel({className, setting, pile, update, codeSource, title, infoObject, description, category}){

    const { errors } = usePage().props

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
        portLoading: '',
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

    const validPortSubmit = (e) => {
        e.preventDefault();
        if(addList.title != '' && addList.category != '' &&
        addList.description != '' && objectFile.video != ''){

            const portData = {
                video: objectFile.video,
                title: addList.title,
                category: addList.category,
                codeSource: addList.codeSource,
                description: addList.description
            }

            Inertia.post(`/formupdtutoriel/${update}`,portData);
        }
        else{
            setAddList((prevState) => {
                return {
                    ...prevState,
                    title: '',
                    category: '',
                    codeSource: '',
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
            <div className="col-md-12 text-center">Update of {setting}</div>
            <form onSubmit={validPortSubmit} encType={"multipart/form-data"}>
                {manage.status === true ? <p className="perso--message mt-2">{manage.info}</p> :
                 <p className="perso--message">{manage.info}</p>}
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <br />
                <label htmlFor="title" className="mt-3">{title}</label>
                <input type="text" id="title" name="title" onChange={validPortChange} value={addList.title} className="form-control mt-2" placeholder="title"/>
                <br />
                <label htmlFor="video" className="mt-3">{infoObject}</label>
                <input type="text" id="video" name="video" onChange={validPortObjectFile} value={objectFile.video} className="form-control mt-2" placeholder="tuto"/>
                {errors.video && <span>{errors.video}</span>}
                <br />
                <label htmlFor="category" className="mt-3">{category}</label>
                <AppSelectFormTuto
                    className="form-control mt-2"
                    one ={"tutoriel"}
                    two ={"smartphone"} 
                    three ={"smart tv"}
                    four={"computer"}
                    five={"Other product"}
                    change={validPortChange}
                    value={addList.category}
                    rule={"tutoriel"}
                ></AppSelectFormTuto>
                {errors.category && <span style={{color:"red"}}>{errors.category}</span>}
                {/* <input type="text" id="category" name="category" onChange={validPortChange} value={addList.category} className="form-control mt-2" placeholder="category"/> */}
                <br />
                {/* <label htmlFor="codeSource" className="mt-3">{codeSource}</label>
                <input type="text" id="codeSource" name="codeSource" cols="10" rows="4" onChange={validPortChange} value={addList.codeSource} className="form-control mt-2" placeholder="code source"/>
                {errors.codeSource && <span style={{color:"red"}}>{errors.codeSource}</span>}
                <br /> */}
                <textarea type="text" id="description" name="description" cols="10" rows="4" onChange={validPortChange} value={addList.description} className="form-control mt-2" placeholder="description"/>
                {errors.description && <span style={{color:"red"}}>{errors.description}</span>}
                <br />
                <button type="submit" className="btn btn-light btn--colo col-sm-12 mb-3">
                    <h4 className="">
                        Update
                    </h4>
                </button>
            </form>
        </div>
    );
}


// onChange={postChange}








