import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import AppSelectFormTuto from "../AppSelectFormTuto";


export default function AddFormImage({className, title, infoObject, labelPrice, link, description, category}){

    const { errors } = usePage().props;

    const [addList,setAddList] = useState({
        title: '',
        category: '',
        description: '',
        price: ''
    });
    const [objectFile,setObjectFile] = useState({
        file: ''
    });
    const [manage,setManage] = useState({
        info: '',
        shibatLoading: '',
        status: false
    });

    // useEffect(() => {
    //     validPortSubmit()
    // },[])

    const validPortObjectFile = (e) => {
        setObjectFile({...objectFile,file:e.target.files[0]})
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
        addList.description != '' && addList.price != ''){

            const portData = {
                image: objectFile.file,
                price: addList.price,
                title: addList.title,
                category: addList.category,
                description: addList.description
            }

            Inertia.post(link,portData);
        }
        else{
            setAddList((prevState) => {
                return {
                    ...prevState,
                    title: '',
                    category: '',
                    description: '',
                    price: ''
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
                <input type="hidden" name="_token" value="{{ crsf_token() }}" />
                <label htmlFor="title" className="mt-3">{title}</label>
                <input type="text" id="title" name="title" onChange={validPortChange} value={addList.title} className="form-control mt-2" placeholder="title"/>
                {errors.title && <span style={{color:"red"}}>{errors.title}</span>}
                <br />
                <label htmlFor="object" className="mt-3">{infoObject}</label>
                <input type="file" id="object" name="file" onChange={validPortObjectFile} className="form-control mt-2" placeholder="image"/>
                {errors.file && <span style={{color:"red"}}>{errors.file}</span>}
                <br />
                <label htmlFor="category" className="mt-3">{category}</label>
                <AppSelectFormTuto
                    className="form-control mt-2"
                    one = {"smart tv"}
                    two = {"smartphone"}
                    three={"computer"}
                    four = {"other"}
                    change={validPortChange} 
                    rule={"product"}
                    value={addList.category}
                ></AppSelectFormTuto>
                {errors.category && <span style={{color:"red"}}>{errors.category}</span>}
                {/* <input type="text" id="category" name="category" onChange={validPortChange} value={addList.category} className="form-control mt-2" placeholder="category"/> */}
                <br />
                <label htmlFor="price" className="mt-3">{labelPrice}</label>
                <input type="number" id="price" name="price" onChange={validPortChange} value={addList.price} className="form-control mt-2" placeholder="price"/>
                {errors.price && <span style={{color:"red"}}>{errors.price}</span>}
                <br />
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


// onChange={postChange}








