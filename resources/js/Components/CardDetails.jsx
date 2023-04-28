import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function CardDetails({file, p, sms, testMe, author, price, email, cs, title, rule,description, category,update, datePdublish}){

    
    if(testMe == "one")
    {
        const validPortDelete = (id) => {
            Inertia.delete(`/dashboard/delete/${rule}/${id}`);
        }

        

        return(
            <>
                
                    <div className="col-md-12 pd-pd text--black text-left">
                        <div 
                            style={{ 
                            border: '1px solid #b55656', 
                            borderRadius: '10px 10px 0 0'  }} 
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <div className="col-md-12 des--style">
                                <h2 className="col-md-12 mb-3">{title}</h2>
                                <img src={`http://localhost:8000/${file}`} className="form--img mb-5 im--style" />
                                <div className="col-md-12 text-left">
                                   <p className="wrap">{description}</p> 
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Price</strong>: {price}</p>
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                                </div>
                                <div className="col-md-12 mb-5 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div>
                                <div className="col-md-12 text-left mb-3">
                                    <Link className="button-a5" href={update}>Update</Link>
                                    &nbsp;&nbsp;
                                    <button className="button-a4" onClick={() => validPortDelete(p)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "eight")
    {
        const validPortDelete = (id) => {
            Inertia.delete(`/dashboard/delete/${rule}/${id}`);
        }

        return(
            <>
                
                    <div className="col-md-12 pd-pd text--black text-left">
                        <div 
                            style={{ 
                            border: '1px solid #b55656', 
                            borderRadius: '10px 10px 0 0'  }} 
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <div className="col-md-12 des--style">
                                <h2 className="col-md-12 mb-3">{title}</h2>
                                <img src={`http://localhost:8000/${file}`} className="form--img mb-5 im--style" />
                                <div className="col-md-12 text-left">
                                   <p className="wrap">{description}</p> 
                                </div>
                                <div className="col-md-12 mb-5 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div>
                                <div className="col-md-12 text-left mb-3">
                                    <Link className="button-a5" href={update}>Update</Link>
                                    &nbsp;&nbsp;
                                    <button className="button-a4" onClick={() => validPortDelete(p)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "ten")
    {
        const validPortDelete = (id) => {
    
            Inertia.delete(`/dashboard/delete/${rule}/${id}`);
        }

        return(
            <>
                
                    <div className="col-md-12 pd-pd text--black text-left">
                        <div 
                            style={{ 
                            border: '1px solid #b55656', 
                            borderRadius: '10px 10px 0 0'  }} 
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <div className="col-md-12 des--style">
                                <h4 className="col-md-12 mb-3"><strong>Author: </strong>{author}</h4>
                                <div className="col-md-12 text-left">
                                   <p className="wrap"><strong>Email added: </strong>{email}</p> 
                                </div>
                                <div className="col-md-12 mb-5 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div>
                                <div className="col-md-12 text-left mb-3">
                                    <Link className="button-a5" href={update}>Update</Link>
                                    &nbsp;&nbsp;
                                    <button className="button-a4" onClick={() => validPortDelete(p)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "two")
    {
        const validPortDelete = (id) => {

            Inertia.delete(`/dashboard/delete/video/${id}`);
        }

        return(
            <>
                <h6>{sms}</h6>
                <div className="col-md-12 pd-pd text--black text-left">
                    <div 
                        style={{ 
                            border: '1px solid #b55656', 
                            borderRadius: '10px 10px 0 0' }} 
                        className="col-md-12 pd-pd bg-warn"
                    >
                        <div className="col-md-12 des--style">
                            <h2 className="col-md-12 mb-3">{title}</h2>
                            <video src={`http://localhost:8000/${file}`} className="form--img mb-5 im--style" controls/>
                            <div className="col-md-12 text-left">
                               <p className="wrap">{description}</p> 
                            </div>
                            <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                            </div>
                            <div className="col-md-12 mb-5 text-left">
                                <p><strong>Published the</strong>: {datePdublish}</p>
                            </div>
                            <div className="col-md-12 text-left mb-3">
                                <Link className="button-a5" href={update}>Update</Link>
                                &nbsp;&nbsp;
                                <button className="button-a4" onClick={() => validPortDelete(p)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else if(testMe == "three")
    {
        const validPortDelete = (id) => {

            Inertia.delete(`/dashboard/delete/audio/${id}`);
        }

        return(
            <>
                    <h6>{sms}</h6>
                    <div className="col-md-12 pd-pd text--black text-left">
                        <div 
                            style={{ 
                            border: '1px solid #b55656', 
                            borderRadius: '10px 10px 0 0'  }} 
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <div className="col-md-12 des--style">
                                <h2 className="col-md-12 mb-3">{title}</h2>
                                <audio src={`http://localhost:8000/${file}`} controls className="form--img im--style mb-5" />
                                <div className="col-md-12 text-left">
                                   <p className="wrap">{description}</p> 
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                                </div>
                                <div className="col-md-12 mb-5 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div>
                                <div className="col-md-12 text-left mb-3">
                                    <Link className="button-a5" href={update}>Update</Link>
                                    &nbsp;&nbsp;
                                    <button className="button-a4" onClick={() => validPortDelete(p)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "four")
    {
        const validPortDelete = (id) => {
            Inertia.delete(`/dashboard/delete/pdf/${id}`);
        }

        return(
            <>
                
                    <div className="col-md-12 pd-pd text--black text-left">
                        <div 
                            style={{ 
                            border: '1px solid #b55656', 
                            borderRadius: '10px 10px 0 0'  }} 
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <div className="col-md-12 des--style">
                                <h2 className="col-md-12 mb-3">{title}</h2>
                                <img src={file} className="form--img mb-5 im--style" />
                                <div className="col-md-12 text-left">
                                   <p className="wrap">{description}</p> 
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                                </div>
                                <div className="col-md-12 mb-5 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div>
                                <div className="col-md-12 text-left mb-3">
                                    <Link className="button-a5" href={update}>Update</Link>
                                    &nbsp;&nbsp;
                                    <button className="button-a4" onClick={() => validPortDelete(p)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "five")
    {
        const validPortDelete = (id) => {
            Inertia.delete(`/dashboard/delete/${rule}/${id}`);
        }

        return(
            <>
                
                    <div className="col-md-12 pd-pd text--black text-left">
                        <div
                            style={{ 
                            border: '1px solid #b55656', 
                            borderRadius: '10px 10px 0 0'  }} 
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <div className="col-md-12 des--style" style={{wordWrap: "break-word"}}>
                                <h2 className="col-md-12 mb-3">{title}</h2>
                                <div className="col-md-12 text-left">
                                   <p className="wrap">{file}</p>
                                </div>
                                <div className="col-md-12 text-left">
                                   <p className="wrap">{description}</p> 
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Code Source</strong>: {cs}</p>
                                </div>
                                <div className="col-md-12 mb-5 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div>
                                <div className="col-md-12 text-left mb-3">
                                    <Link className="button-a5" href={update}>Update</Link>
                                    &nbsp;&nbsp;
                                    <button className="button-a4" onClick={() => validPortDelete(p)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }

}
