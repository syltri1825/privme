import React from "react";




export default function AppSelectFormTuto({
    one,two,three,four,five,className,
    change,value,rule
    }){
        
    return(

        <>

            {
                rule == "tutoriel" && 

                <select 
                    name="category" 
                    id="category"
                    className={className}
                    onChange={change}
                    value={value}
                >

                    <option>choose  publication category</option>
                    <option value={one}>{one}</option>
                    <option value={two}>{two}</option>
                    <option value={three}>{three}</option>
                    <option value={four}>{four}</option>
                    <option value={five}>{five}</option>
                    {/* <option value={six}>{six}</option> */}
                    
                </select>
            }
            
            {
                rule == "product" &&

                <select 
                    name="category" 
                    id="category"
                    className={className}
                    onChange={change}
                    value={value}
                >

                    <option>choose  publication category</option>
                    <option value={one}>{one}</option>
                    <option value={two}>{two}</option>
                    <option value={three}>{three}</option>
                    <option value={four}>{four}</option>
                    
                </select>
            }
        </>
        
    );
}