import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import LinkBack from "./LinkBack";

export default function Card({
    file, title, testMe, description, p, 
    author, category, more, update, datePdublish
}){



    if(testMe == "one")
    {
        return(
            <>
                
                    <div className="col-md-6 pd-pd text--black text-left">
                        <div 
                            style={{
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <span className="col-md-12 mb-3 rond--span">
                                <strong className="rond--comp">{p}</strong>
                            </span>
                            <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                                <h4 className="col-md-12 mb-3 mt-3">{title}</h4>
                                <img src={`http://localhost:8000/${file}`} className="form--img im--style" />
                                {/* <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div> */}
                                <div className="col-md-12 mb-3 text-left">
                                    <LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                                </div>
                                {/* <div className="col-md-12 text-left mb-3">
                                    <LinkBack className="btn btn-primary" href={update}>Update</LinkBack>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={(id,e)=>validShibatDelete(id,e)}>Delete</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "eight")
    {
        return(
            <>
                
                    <div className="col-md-6 pd-pd text--black text-left">
                        <div 
                            style={{
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <span className="col-md-12 mb-3 rond--span">
                                <strong className="rond--comp">{p}</strong>
                            </span>
                            <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                                <h4 className="col-md-12 mb-3 mt-3">{title}</h4>
                                <img src={`http://localhost:8000/${file}`} className="form--img im--style" />
                                {/* <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div> */}
                                <div className="col-md-12 mb-3 text-left">
                                &nbsp;&nbsp;<LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                                </div>
                                {/* <div className="col-md-12 text-left mb-3">
                                    <LinkBack className="btn btn-primary" href={update}>Update</LinkBack>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={(id,e)=>validShibatDelete(id,e)}>Delete</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "ten")
    {
        return(
            <>
                
                    <div className="col-md-6 pd-pd text--black text-left">
                        <div 
                            style={{
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <span className="col-md-12 mb-3 rond--span">
                                <strong className="rond--comp">{p}</strong>
                            </span>
                            <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                                <h4 className="col-md-12 mb-3 mt-3"><strong>Author:</strong> {author}</h4>
                                <div className="col-md-12 mb-3 text-left">
                                &nbsp;&nbsp;<LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "two")
    {
        return(
            <>
    
                <div className="col-md-6 pd-pd text--black text-left">
                    <div 
                        style={{  
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                        className="col-md-12 pd-pd bg-warn"
                    >
                        
                        <span className="col-md-12 rond--span">
                            <strong className="rond--comp">{p}</strong>
                        </span>
                        <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                            <h4 className="col-md-12 mb-3 mt-3">{title}</h4>
                            <video src={`http://localhost:8000/${file}`} className="form--img mb-5 im--style" controls/>
                            {/* <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                                </div>
                            <div className="col-md-12 text-left">
                                <p><strong>Published the</strong>: {datePdublish}</p>
                            </div> */}
                            <div className="col-md-12 mb-3 text-left">
                                <LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                            </div>
                            {/* <div className="col-md-12 text-left mb-3">
                                <LinkBack className="btn btn-primary" href={update}>Update</LinkBack>
                                &nbsp;&nbsp;
                                <button  className="btn btn-danger" onClick={(p)=>validShibatDelete(p)}>Delete</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else if(testMe == "three")
    {
        return(
            <>
                
                    <div className="col-md-6 pd-pd text--black text-left">
                        <div 
                            style={{  
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <span className="col-md-12 rond--span">
                                <strong className="rond--comp">{p}</strong>
                            </span>
                            <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                                <h4 className="col-md-12 mb-3 mt-3">{title}</h4>
                                <audio src={`http://localhost:8000/${file}`} style={{ maxWidth: '250px'}} controls className="form--img mb-5 im--style" />
                                {/* <div className="col-md-12 text-left">
                                    <p><strong>Categroy</strong>: {category}</p>
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div> */}
                                <div className="col-md-12 mb-3 text-left">
                                    <LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                                </div>
                                {/* <div className="col-md-12 text-left mb-3">
                                    <LinkBack className="btn btn-primary" href={update}>Update</LinkBack>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={(id,e)=>validShibatDelete(id,e)}>Delete</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "four")
    {
        return(
            <>
                
                    <div className="col-md-6 pd-pd text--black text-left">
                        <div 
                            style={{  
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <span className="col-md-12 rond--span">
                                <strong className="rond--comp">{p}</strong>
                            </span>
                            <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                                <h4 className="col-md-12 mb-3 mt-3">{title}</h4>
                                <img src={file} className="form--img im--style" />
                                {/* <div className="col-md-12 text-left">
                                    <p><strong>Category</strong>: {category}</p>
                                </div>
                                <div className="col-md-12 text-left">
                                    <p><strong>Published the</strong>: {datePdublish}</p>
                                </div> */}
                                <div className="col-md-12 mb-3 text-left">
                                    <LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                                </div>
                                {/* <div className="col-md-12 text-left mb-3">
                                    <LinkBack href={`http://localhost:8000/${file}`}>Download</LinkBack>
                                    <LinkBack className="btn btn-primary" href={update}>Update</LinkBack>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={(id,e)=>validShibatDelete(id,e)}>Delete</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "five")
    {
        return(
            <>
                
                    <div className="col-md-6 pd-pd text--black text-left">
                        <div 
                            style={{  
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <span className="col-md-12 rond--span">
                                <strong className="rond--comp">{p}</strong>
                            </span>
                            <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                                <figure>
                                    <h4 className="col-md-12 mt-3">{title}</h4>
                                    <div className="col-md-12 text-left">
                                        <p className="col-md-12"
                                        ><strong>File</strong>: {file}</p>
                                    </div>
                                    <figcaption className="col-md-12">
                                        {/* <div className="col-md-12 text-left">
                                            <p><strong>Category</strong>: {category}</p>
                                        </div>
                                        <div className="col-md-12 text-left">
                                            <p><strong>Published the</strong>: {datePdublish}</p>
                                        </div> */}
                                    </figcaption>
                                    <div className="col-md-12 mb-5 text-left">
                                        <LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                                    </div>
                                </figure>
                                
                                {/* <div className="col-md-12 text-left mb-3">
                                    <LinkBack href={`http://localhost:8000/${file}`}>Download</LinkBack>
                                    <LinkBack className="btn btn-primary" href={update}>Update</LinkBack>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={(id,e)=>validShibatDelete(id,e)}>Delete</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "six")
    {
        return(
            <>
                
                    <div className="col-md-6 pd-pd text--black text-left">
                        <div 
                            style={{  
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <span className="col-md-12 rond--span">
                                <strong className="rond--comp">{p}</strong>
                            </span>
                            <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                                <figure>
                                    <h4 className="col-md-12 mt-3">{title}</h4>
                                    <div className="col-md-12 text-left">
                                        <p className="col-md-12"
                                        ><strong>File</strong>: {file}</p>
                                    </div>
                                    <figcaption className="col-md-12">
                                        {/* <div className="col-md-12 text-left">
                                            <p><strong>Category</strong>: {category}</p>
                                        </div>
                                        <div className="col-md-12 text-left">
                                            <p><strong>Published the</strong>: {datePdublish}</p>
                                        </div> */}
                                    </figcaption>
                                    <div className="col-md-12 mb-5 text-left">
                                        <LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                                    </div>
                                </figure>
                                
                                {/* <div className="col-md-12 text-left mb-3">
                                    <LinkBack href={`http://localhost:8000/${file}`}>Download</LinkBack>
                                    <LinkBack className="btn btn-primary" href={update}>Update</LinkBack>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={(id,e)=>validShibatDelete(id,e)}>Delete</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    else if(testMe == "seven")
    {
        return(
            <>
                
                    <div className="col-md-6 pd-pd text--black text-left">
                        <div 
                            style={{  
                            border: '1px solid white', 
                            borderRadius: '10px 10px 0 0',
                            height: ''}}
                            className="col-md-12 pd-pd bg-warn"
                        >
                            <span className="col-md-12 rond--span">
                                <strong className="rond--comp">{p}</strong>
                            </span>
                            <div className="col-md-12 des--style" style={{wordWrap:"break-word"}}>
                                <figure>
                                    <h4 className="col-md-12 mt-3">{title}</h4>
                                    <div className="col-md-12 text-left">
                                        <p className="col-md-12"
                                        ><strong>File</strong>: {file}</p>
                                    </div>
                                    <figcaption className="col-md-12">
                                        {/* <div className="col-md-12 text-left">
                                            <p><strong>Category</strong>: {category}</p>
                                        </div>
                                        <div className="col-md-12 text-left">
                                            <p><strong>Published the</strong>: {datePdublish}</p>
                                        </div> */}
                                    </figcaption>
                                    <div className="col-md-12 mb-5 text-left">
                                        <LinkBack href={more}><button className="button-a3">See More</button></LinkBack>
                                    </div>
                                </figure>
                                
                                {/* <div className="col-md-12 text-left mb-3">
                                    <LinkBack href={`http://localhost:8000/${file}`}>Download</LinkBack>
                                    <LinkBack className="btn btn-primary" href={update}>Update</LinkBack>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={(id,e)=>validShibatDelete(id,e)}>Delete</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </>
        );
    }


}
