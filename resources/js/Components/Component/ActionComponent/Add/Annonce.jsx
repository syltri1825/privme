import React, { useEffect, useState } from "react";
import AppportNavLink from "@/Components/AppportNavLink";
import AppSelectForm from "../AppSelectForm";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";


export default function AppportAddFormAnnonce({className, title, infoObject, description, category, message}){


    const { errors } = usePage().props;
    const [addList,setAddList] = useState({
        title: '',
        category: '',
        description: ''
    });
    const [objectFile,setObjectFile] = useState({
        file: ''
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
        addList.description != '' && objectFile.file != ''){

            const portData = {
                pdf: objectFile.file,
                title: addList.title,
                category: addList.category,
                description: addList.description
            }

            // const portData = new FormData();
            
            // portData.append('pdf',objectFile.file);
            // portData.append('title',addList.title);
            // portData.append('category',addList.category);
            // portData.append('description',addList.description);

            Inertia.post('/formaddpdf',portData);

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
                {manage.status === true ? <p className="perso--message mt-2">{message}</p> :
                 <p className="perso--message">{message}</p>} 
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <label htmlFor="title">{title}</label>
                <input type="text" id="title" name="title" onChange={validPortChange} value={addList.title} className="form-control mt-2" placeholder="title"/>
                {errors.title && <span>{errors.title}</span>}
                <br />
                <label htmlFor="object">{infoObject}</label>
                <input type="file" id="object" name="file" onChange={validPortObjectFile} className="form-control mt-2" placeholder="pdf"/>
                {errors.file && <span>{errors.file}</span>}
                <br />
                <label htmlFor="description">{description}</label>
                <textarea type="text" id="description" name="description" cols="10" rows="4" onChange={validPortChange} value={addList.description} className="form-control mt-2" placeholder="description"/>
                {errors.description && <span>{errors.description}</span>}
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



















































































































// import React, { useState } from "react";
// import AppportNavLink from "@/Components/AppportNavLink";
// import AppSelectForm from "../AppSelectForm";
// import { Inertia } from "@inertiajs/inertia";
// import { useForm, usePage } from "@inertiajs/inertia-react";


// export default function AppportAddFormPdf({className, title, infoObject, description, category, message}){


//     const { errors } = usePage().props;
//     const [addList,setAddList] = useState({
//         title: '',
//         category: '',
//         description: ''
//     });
//     const [objectFile,setObjectFile] = useState({
//         file: ''
//     });
//     const [manage,setManage] = useState({
//         info: '',
//         portLoading: '',
//         status: false
//     });

//     const validPortObjectFile = (e) => {
//         setObjectFile({...objectFile,file:e.target.files[0]})
//     }

//     const validPortChange = (e) => {
//         const target = e.target;
//         const value = target.type === "checkbox" ? target.checked : target.value;
//         const name = target.name;
//         setAddList({...addList,[name]: value})
//     }

//     const {portData, post, progress} = useForm({
//         pdf: objectFile.file,
//         title: addList.title,
//         category: addList.category,
//         description: addList.description
//     });

//     const validPortSubmit = (e) => {
//         e.preventDefault();
//         if(addList.title != '' && addList.category != '' &&
//         addList.description != '' && objectFile.file != ''){

//             post('/formaddpdf',portData);

//         }
//         else{
//             setAddList((prevState) => {
//                 return {
//                     ...prevState,
//                     title: '',
//                     category: '',
//                     description: ''
//                 }
//             });
//             setManage((prevState) =>{
//                 return {
//                     ...prevState,
//                     info: 'You have missing fields',
//                     status: false
//                 }
//             })
//         }
//     }


//     return(
//         <div className="col-md-6 offset-md-3 p-3 mt-4 mb-4 bg--gray">
//             <form onSubmit={validPortSubmit} encType={"multipart/form-data"}>
//                 {manage.status === true ? <p className="perso--message mt-2">{message}</p> :
//                  <p className="perso--message">{message}</p>} 
//                 <input type="hidden" name="_token" value="{{ csrf_token() }}" />
//                 <label htmlFor="title">{title}</label>
//                 <input type="text" id="title" name="title" onChange={validPortChange} value={addList.title} className="form-control mt-2" placeholder="title"/>
//                 {errors.title && <span>{errors.title}</span>}
//                 <br />
//                 <label htmlFor="object">{infoObject}</label>
//                 <input type="file" id="object" name="file" onChange={validPortObjectFile} className="form-control mt-2" placeholder="pdf"/>
//                 {errors.file && <span>{errors.file}</span>}
//                 <br />
//                 <label htmlFor="category">{category}</label>
//                 <AppSelectForm
//                         className="form-control mt-2"
//                         one = {"chatbot"} 
//                         two = {"cmc"} 
//                         three = {"voip-entreprise"} 
//                         four = {"cps"} 
//                         five = {"crm-appel"} 
//                         six = {"dial-crm-appel"} 
//                         seven = {"e-mailing"} 
//                         eight = {"equipements-appareils-voices"} 

//                         nine = {"fai"} 
//                         ten = {"hosting-cloud"} 
//                         eleven = {"ido"} 
//                         twelve = {"integrateur-ip"} 
//                         thirteen = {"mobile-voip"} 

//                         fourteen = {"phone"} 
//                         fifteen = {"push-sms"} 
//                         sixteen = {"rcs"} 
//                         seventeen = {"rich-sms"} 
//                         eighteen = {"sda"} 

//                         nineteen = {"sms-api"} 
//                         twenty = {"sms-voice"} 
//                         twentyone = {"sms-pro"} 
//                         twentytwo = {"sms-flash"} 
//                         twentythree = {"standard-ip-virtuel"} 

//                         twentyfour = {"svi"} 
//                         twentyfive = {"terminaison-appel"} 
//                         twentysix = {"trunk-sip"} 
//                         twentyseven= {"vnm"}
//                         change={validPortChange} 
//                         value={addList.category}
//                 ></AppSelectForm>
//                 {errors.category && <span>{errors.category}</span>}
//                 {/* <input type="text" id="category" name="category" onChange={validPortChange} value={addList.category} className="form-control mt-2" placeholder="category"/> */}
//                 <br />
//                 <label htmlFor="description">{description}</label>
//                 <textarea type="text" id="description" name="description" cols="10" rows="4" onChange={validPortChange} value={addList.description} className="form-control mt-2" placeholder="description"/>
//                 {errors.description && <span>{errors.description}</span>}
//                 <br />
//                 {progress && (
//                 <progress value={progress.percentage} max="100">
//                     {progress.percentage}%
//                 </progress>
//                 )}
//                 <button type="submit" className="btn btn-light btn--colo col-sm-12 mb-3">
//                     <h4 className="">
//                         Publish
//                     </h4>
//                 </button>
//             </form>
//         </div>
//     );
// }


// // onChange={postChange}


































// import React, { useState } from "react";
// import AppportNavLink from "@/Components/AppportNavLink";
// import AppSelectForm from "../AppSelectForm";
// import { Inertia } from "@inertiajs/inertia";
// import { useForm, usePage } from "@inertiajs/inertia-react";


// export default function AppportAddFormPdf({className, title, infoObject, description, category, message}){


//     const { errors } = usePage().props;
//     const [addList,setAddList] = useState({
//         title: '',
//         category: '',
//         description: '',
//         file: ''
//     });
//     const {add, setAdd, post, progress} = useForm({
//         title: addList.title,
//         category: addList.category,
//         description: addList.description,
//         file: addList.file
//     });
//     const [manage,setManage] = useState({
//         info: '',
//         portLoading: '',
//         status: false
//     });

//     // const validPortChange = (e) => {
//     //     const target = e.target;
//     //     const value = target.type === "checkbox" ? target.checked : target.value;
//     //     const name = target.name;
//     //     setAddList({...addList,file:e.target.files[0],[name]: value})
//     // }

//     const validPortSubmit = (e) => {
//         e.preventDefault();
//         if(add.title != '' && add.category != '' &&
//         add.description != '' && add.file != ''){

            

//             // const portData = {
//             //     pdf: addList.file,
//             //     title: addList.title,
//             //     category: addList.category,
//             //     description: addList.description
//             // }

//             post('/formaddpdf',add);

//         }
//         else{
//             setAddList((prevState) => {
//                 return {
//                     ...prevState,
//                     title: '',
//                     category: '',
//                     description: '',
//                     file: ''
//                 }
//             });
//             setManage((prevState) =>{
//                 return {
//                     ...prevState,
//                     info: 'You have missing fields',
//                     status: false
//                 }
//             })
//         }
//     }


//     return(
//         <div className="col-md-6 offset-md-3 p-3 mt-4 mb-4 bg--gray">
//             <form onSubmit={validPortSubmit} encType={"multipart/form-data"}>
//                 {manage.status === true ? <p className="perso--message mt-2">{message}</p> :
//                  <p className="perso--message">{message}</p>} 
//                 <input type="hidden" name="_token" value="{{ csrf_token() }}" />
//                 <label htmlFor="title">{title}</label>
//                 <input type="text" id="title" name="title" onChange={(e) => setAddList('title',e.target.value)} value={addList.title} className="form-control mt-2" placeholder="title"/>
//                 {errors.title && <span>{errors.title}</span>}
//                 <br />
//                 <label htmlFor="object">{infoObject}</label>
//                 <input type="file" id="object" name="file" value={addList.file} onChange={(e) => setAddList('file',e.target.files[0])} className="form-control mt-2" placeholder="pdf"/>
//                 {errors.file && <span>{errors.file}</span>}
//                 <br />
//                 <label htmlFor="category">{category}</label>
//                 <AppSelectForm
//                         className="form-control mt-2"
//                         one = {"chatbot"} 
//                         two = {"cmc"} 
//                         three = {"voip-entreprise"} 
//                         four = {"cps"} 
//                         five = {"crm-appel"} 
//                         six = {"dial-crm-appel"} 
//                         seven = {"e-mailing"} 
//                         eight = {"equipements-appareils-voices"} 

//                         nine = {"fai"} 
//                         ten = {"hosting-cloud"} 
//                         eleven = {"ido"} 
//                         twelve = {"integrateur-ip"} 
//                         thirteen = {"mobile-voip"} 

//                         fourteen = {"phone"} 
//                         fifteen = {"push-sms"} 
//                         sixteen = {"rcs"} 
//                         seventeen = {"rich-sms"} 
//                         eighteen = {"sda"} 

//                         nineteen = {"sms-api"} 
//                         twenty = {"sms-voice"} 
//                         twentyone = {"sms-pro"} 
//                         twentytwo = {"sms-flash"} 
//                         twentythree = {"standard-ip-virtuel"} 

//                         twentyfour = {"svi"} 
//                         twentyfive = {"terminaison-appel"} 
//                         twentysix = {"trunk-sip"} 
//                         twentyseven= {"vnm"}
//                         change={(e) => setAddList('category',e.target.value)}
//                         value={addList.category}
//                 ></AppSelectForm>
//                 {errors.category && <span>{errors.category}</span>}
//                 {/* <input type="text" id="category" name="category" onChange={(e) => setAddList('description',e.target.value)} value={addList.description} value={addList.category} className="form-control mt-2" placeholder="category"/> */}
//                 <br />
//                 <label htmlFor="description">{description}</label>
//                 <textarea type="text" id="description" name="description" cols="10" rows="4" onChange={(e) => setAddList('description',e.target.value)} value={addList.description} className="form-control mt-2" placeholder="description"/>
//                 {errors.description && <span>{errors.description}</span>}
//                 <br />
//                 {progress && (
//                 <progress value={progress.percentage} max="100">
//                     {progress.percentage}%
//                 </progress>
//                 )}
//                 <button type="submit" className="btn btn-light btn--colo col-sm-12 mb-3">
//                     <h4 className="">
//                         Publish
//                     </h4>
//                 </button>
//             </form>
//         </div>
//     );
// }


// // onChange={postChange}
























