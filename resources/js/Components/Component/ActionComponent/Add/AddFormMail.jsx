import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";


export default function AddFormMail({className, author, mail}){

    const { errors } = usePage().props;

    const [addList,setAddList] = useState({
        author: '',
        email: ''
    });

    const [manage,setManage] = useState({
        info: '',
        portLoading: '',
        status: false
    });

    const validPortChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setAddList({...addList,[name]: value})
    }

    const validPortSubmit = (e) => {
        e.preventDefault();
        if(addList.author != '' && addList.email != ''){

            const portData = {
                author: addList.author,
                email: addList.email
            }

            Inertia.post('/formaddmail',portData);
        }
        else{
            setAddList((prevState) => {
                return {
                    ...prevState,
                    author: '',
                    description: ''
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
                <label htmlFor="author" className="mt-3">{author}</label>
                <input type="text" id="author" name="author" onChange={validPortChange} value={addList.author} className="form-control mt-2" placeholder="Name"/>
                {errors.author && <span style={{color:"red"}}>{errors.author}</span>}
                <br />
                <label htmlFor="email" className="mt-3">{mail}</label>
                <input type="text" id="email" name="email" onChange={validPortChange} value={addList.email} className="form-control mt-2" placeholder="Email"/>
                {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
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








