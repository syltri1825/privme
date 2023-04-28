import React from "react";



export default function PortNotice({notice}){

    return (
        <>
            <div className="col-md-12 bg-warning text-center">
                <h1 className="col-md-12">{notice}</h1>
            </div>
        </>
    );

}