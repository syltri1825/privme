import React from "react";
import LinkBack from "@/Components/LinkBack";


export default function PortCrud({className, add, more, update, del, activeMore, activeAdd, activeUpd}){

        return(
            <nav className="nav--crud">
                <ul>
                    <li>
                        <LinkBack active={activeAdd} className={className} href={add}>Add</LinkBack>
                    </li>
                    <li>
                        <LinkBack active={activeUpd} className={className} href={update}>Update</LinkBack>
                    </li>
                    <li>
                        <LinkBack active={activeMore} className={className} href={more}>See more</LinkBack>
                    </li>
                </ul>
            </nav>
        )














    // if(add){
    //     return(
    //         <nav className="nav--crud">
    //             <ul>
    //                 <li>
    //                     <LinkBack className={className} href={add}>Add</LinkBack>
    //                 </li>
    //                 <li>
    //                     <LinkBack className={className} href={''}></LinkBack>
    //                 </li>
    //                 <li>
    //                     <LinkBack className={className} href={''}></LinkBack>
    //                 </li>
    //             </ul>
    //         </nav>
    //     )
    // }
    // else if(add && update){
    //     return(
    //         <nav className="nav--crud">
    //             <ul>
    //                 <li>
    //                     <LinkBack className={className} href={add}>Add</LinkBack>
    //                 </li>
    //                 <li>
    //                     <LinkBack className={className} href={update}>Update</LinkBack>
    //                 </li>
    //                 <li>
    //                     <LinkBack className={className} href={''}></LinkBack>
    //                 </li>
    //             </ul>
    //         </nav>
    //     )
    // }
    // else if (add && update && del){
    //     return(
    //         <nav className="nav--crud">
    //             <ul>
    //                 <li>
    //                     <LinkBack className={className} href={add}>Add</LinkBack>
    //                 </li>
    //                 <li>
    //                     <LinkBack className={className} href={update}>Update</LinkBack>
    //                 </li>
    //                 <li>
    //                     <LinkBack className={className} href={del}>Delete</LinkBack>
    //                 </li>
    //             </ul>
    //         </nav>
    //     )
    // }
    // else{
    //     return('');
    // }
}