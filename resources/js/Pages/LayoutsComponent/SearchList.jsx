import LinkBack from "@/Components/LinkBack";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";




export default function SearchList({list, image, style, audio, video, pdf, info, par}){


        if(list == 's' || list == 'sm' || list == 'sms' || list == 'pr' || list == 'pro')
        {
            const [object, setObject] = useState("");
            let parametre = 'sms pro';
            let link = "f";
            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <>
                    <div className="col-md-12 p-1  style--search">
                        <LinkBack href={link}>
                        <div style={style} className="col-md-12 st--me">
                            {list}
                        </div>
                        </LinkBack>
                        <hr />
                    </div>
                </>
            );
        }
        else if(list == 'r' || list == 'ri' || list == 'rih' ||
        list == 'rich' || list == 'rich sms'){

            const [object, setObject] = useState("");
            let parametre = 'rich sms';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                            {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'ap' || list == 'api' || list == 'sms api')
        {
            const [object, setObject] = useState("");
            let parametre = 'sms api';
            let link = "f";
            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                            {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }

        if(list == 'ch' || list == 'bot' || list == 'chat' || 
        list == 'chat bot')
        {
            const [object, setObject] = useState("");
            let parametre = 'chat bot';
            let link = "f";
            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <>
                    <div className="col-md-12 p-1  style--search">
                        <LinkBack href={link}>
                        <div style={style} className="col-md-12 st--me">
                            {list}
                        </div>
                        </LinkBack>
                        <hr />
                    </div>
                </>
            );
        }
        else if(list == 'cr' || list == 'crm' || list == 'appel'
        || list == 'crm appel'){

            const [object, setObject] = useState("");
            let parametre = 'crm appel';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'pu' || list == 'pus' || list == 'push' ||
        list == 'push sms'){

            const [object, setObject] = useState("");
            let parametre = 'push sms';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'voic' || list == 'voice' || list == 'sms voice'){

            const [object, setObject] = useState("");
            let parametre = 'sms voice';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'cr' || list == 'crm' || list == 'crm appel'){

            const [object, setObject] = useState("");
            let parametre = 'crm appel';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'fl' || list == 'flash' || list == 'flash sms'
        || list == 'sms flash'){

            const [object, setObject] = useState("");
            let parametre = 'flash sms';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'dia' || list == 'dial' || list == 'dial crm appel'
        || list == 'crm dial' ){

            const [object, setObject] = useState("");
            let parametre = 'dial crm appel';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'cr' || list == 'crm' || list == 'crm appel'){

            const [object, setObject] = useState("");
            let parametre = 'crm appel';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'stan' || list == 'ip' || list == 'standard ip'
        || list == 'ip virtuel' || list == 'virtuel' || 
        list == 'standard ip virtuel'){

            const [object, setObject] = useState("");
            let parametre = 'standard ip virtuel';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'ter' || list == 'appel ter' || 
        list == 'terminaison' || list == 'terminaison appel'){

            const [object, setObject] = useState("");
            let parametre = 'terminaison appel';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'sv' || list == 'svi'){

            const [object, setObject] = useState("");
            let parametre = 'svi';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'tru' || list == 'trunk' || 
        list == 'sip' || list == 'trunk sip'){

            const [object, setObject] = useState("");
            let parametre = 'trunk sip';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'vn' || list == 'vnm'){

            const [object, setObject] = useState("");
            let parametre = 'terminaison appel';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'sda'){

            const [object, setObject] = useState("");
            let parametre = 'sda';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'pho' || list == 'phon' || list == 'phone'){

            const [object, setObject] = useState([]);
            let parametre = 'phone';
            let link = "f";



            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });



            return(
                <div className="col-md-12 p-1  style--search">
                    {
                        object.map((prev) => (
                            <div className="col-md-12">
                                <LinkBack href={`/dashboard/details/video/${prev.pdf_id}`}>
                                <div style={style} className="col-md-12 st--me">
                                    {prev.title}
                                </div>
                                </LinkBack>
                                <hr />
                                <LinkBack href={`/dashboard/details/image/${prev.image_id}`}>
                                <div style={style} className="col-md-12 st--me">
                                    {prev.title}
                                </div>
                                </LinkBack>
                                <hr />
                                <LinkBack href={`/dashboard/details/audio/${prev.audio_id}`}>
                                <div style={style} className="col-md-12 st--me">
                                    {prev.title}
                                </div>
                                </LinkBack>
                                <hr />
                                <LinkBack href={`/dashboard/details/video/${prev.video_id}`}>
                                <div style={style} className="col-md-12 st--me">
                                    {prev.title}
                                </div>
                                </LinkBack>
                                <hr />
                            </div>
                        ))
                    }
                </div>
            );
        }
        else if(list == 'fai'){

            const [object, setObject] = useState("");
            let parametre = 'fai';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'hos' || list == 'host' || 
        list == 'clou' || list == 'hosting' || list == 'hosting cloud'){

            const [object, setObject] = useState("");
            let parametre = 'hosting cloud';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'rcs'){

            const [object, setObject] = useState("");
            let parametre = 'rcs';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'ido'){

            const [object, setObject] = useState("");
            let parametre = 'ido';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'inte' || list == 'ip inte' || 
        list == 'integrateur' || list == 'integrateur ip'){

            const [object, setObject] = useState("");
            let parametre = 'integrateur ip';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'mobi' || list == 'mobile vo' || 
        list == 'voip mo' || list == 'mobile voip'){

            const [object, setObject] = useState("");
            let parametre = 'integrateur ip';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'emai' || list == 'e m' || 
        list == 'emailing' || list == 'e mailing' || list == 'mailing'){

            const [object, setObject] = useState("");
            let parametre = 'e mailing';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'cps'){

            const [object, setObject] = useState("");
            let parametre = 'cps';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'cmc'){

            const [object, setObject] = useState("");
            let parametre = 'cmc';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'equip' || list == 'appa' || 
        list == 'equipements' || list == 'appareils' ||
        list == 'appareils voi' || list == 'equipements voices' ||
        list == 'equipements appareils voices'){

            const [object, setObject] = useState("");
            let parametre = 'equipements appareils voices';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'inte' || list == 'ip inte' || 
        list == 'integrateur' || list == 'integrateur ip'){

            const [object, setObject] = useState("");
            let parametre = 'integrateur ip';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else if(list == 'inte' || list == 'ip inte' || 
        list == 'integrateur' || list == 'integrateur ip'){

            const [object, setObject] = useState("");
            let parametre = 'integrateur ip';
            let link = "f";

            useEffect(() => {
                const fetchAll = () => {
                    const res =  axios.get(`http://localhost:8000/form/search/raccourcis/${parametre}`)
                    // .then(response => response.json())
                    // .then(result => setObject(result))
                    if(res.data)
                    {
                        setObject(res.data.i)
                    }
                    
                }
                fetchAll();
            });

            return(
                <div className="col-md-12 p-1  style--search">
                    <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr />
                </div>
            );
        }
        else
        {
            // const [object, setObject] = useState("");
            // let parametre = 'sms pro';
            // let link = "f";
            // useEffect(() => {
            //     const fetchAll = () => {
            //         fetch(`http://localhost:8000/form/search/raccourcis/${parametre}`)
            //         .then(response => response.json())
            //         .then(result => setObject(result))
            //     }
            //     fetchAll();
            // });

            return(
                <div className="col-md-12 p-1  style--search">
                    Hello world
                    {/* <LinkBack href={link}>
                    <div style={style} className="col-md-12 st--me">
                        {list}
                    </div>
                    </LinkBack>
                    <hr /> */}
                </div>
            );
    }
}






















// import LinkBack from "@/Components/LinkBack";
// import React from "react";




// export default function List({list, style, link}){

//     switch (list)
//     {
//         case 's':
//             return(
//                 <>
//                     <div className="col-md-12 p-1  style--search">
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12 st--me">
//                             <ul>
//                                 <li>sms pro white</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         <hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>sms pro black</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         <hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>sms pro line</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         <hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>sms pro online</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
                        
//                     </div>
//                 </>
//             );
//         case 'sm':
//             return(
//                     <div className="col-md-12  style--search">
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>pro white</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         <hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>pro black</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         <hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>pro line</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         <hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>pro online</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
                        
//                     </div>

//             );
//         default:
//             return(
//                     <div className="col-md-12  style--search">
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>white</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         <hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>black</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         {/*<hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>line</li>
//                             </ul>
//                         </div>
//                         </LinkBack>
//                         <hr />
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             <ul>
//                                 <li>online</li>
//                             </ul>
//                         </div>
//                         </LinkBack> */}
                        
//                     </div>
//             );
//     }
//     // if(list == 's' || list == 'm')
//     // {
//         // return(
//         //     <>
//         //         <div className="col-md-12">
//         //             <LinkBack href={link}>
//         //             <div style={style} className="col-md-12 p-1 style--search">
//         //                 <ul>
//         //                     <li>sms pro white</li>
//         //                 </ul>
//         //             </div>
//         //             </LinkBack>
//         //         </div>
//         //         <div className="col-md-12">
//         //             <LinkBack href={link}>
//         //             <div style={style} className="col-md-12 p-1 style--search">
//         //                         <ul>
//         //                             <li>sms pro black</li>
//         //                         </ul>
//         //                 <hr />
//         //             </div>
//         //             </LinkBack>
//         //         </div>
//         //     </>
//         // );
//     // }
//     // return(
//     //     <LinkBack href={link}>
//     //     <div style={style} className="col-md-12 p-1 style--search">
                
//     //                 <ul>
//     //                     <li>pro</li>
//     //                 </ul>
//     //         <hr />
//     //     </div>
//     //     </LinkBack>
//     // );
// }


// switch (list)
//     {
//         case 's':
//             return(
//                 <>
//                     <div className="col-md-12 p-1  style--search">
//                         <LinkBack href={link}>
//                         <div style={style} className="col-md-12">
//                             {list}
//                         </div>
//                         </LinkBack>
//                         <hr />
//                     </div>
//                 </>
//             );
//         case 'sm':
//             return(
//                 <div className="col-md-12 p-1  style--search">
//                     <LinkBack href={link}>
//                     <div style={style} className="col-md-12">

//                     </div>
//                     </LinkBack>
//                     <hr />
//                 </div>
//             );
//         default:
//             return(
//                 <div className="col-md-12 p-1  style--search">
//                     <LinkBack href={link}>
//                     <div style={style} className="col-md-12">

//                     </div>
//                     </LinkBack>
//                     <hr />
//                 </div>
//             );
    // }