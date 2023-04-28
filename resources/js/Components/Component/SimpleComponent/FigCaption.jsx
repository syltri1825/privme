import React from "react";


export default function PortFigCaption({idone, idtwo, intitule}){
    return(
        <figure className="col-md-12">
            <div className="col-md-12 m-3 text-center" id={idone}>
                    <div 
                        className="col-md-6 text-center" id={idtwo}
                    >
                    </div>
            </div>
            <figcaption className="col-md-12" align="center">
                <br />{intitule}
            </figcaption>
        </figure>
    );
}