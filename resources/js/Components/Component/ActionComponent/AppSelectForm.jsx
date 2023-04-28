import React from "react";




export default function AppSelectForm({
    one,two,three,four,five,six,seven,eight,
    nine,ten,eleven,twelve,thirteen,
    fourteen,fifteen,sixteen,seventeen,eighteen,
    nineteen,twenty,twentyone,twentytwo,twentythree,
    twentyfour,twentyfive,twentysix,twentyseven,className,
    change,value
    }){
        
    return(

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
            <option value={six}>{six}</option>
            <option value={seven}>{seven}</option>
            <option value={eight}>{eight}</option>
            <option value={nine}>{nine}</option>
            <option value={ten}>{ten}</option>
            <option value={eleven}>{eleven}</option>
            <option value={twelve}>{twelve}</option>
            <option value={thirteen}>{thirteen}</option>
            <option value={fourteen}>{fourteen}</option>
            <option value={fifteen}>{fifteen}</option>
            <option value={sixteen}>{sixteen}</option>
            <option value={seventeen}>{seventeen}</option>
            <option value={eighteen}>{eighteen}</option>
            <option value={nineteen}>{nineteen}</option>
            <option value={twenty}>{twenty}</option>
            <option value={twentyone}>{twentyone}</option>
            <option value={twentytwo}>{twentytwo}</option>
            <option value={twentythree}>{twentythree}</option>
            <option value={twentyfour}>{twentyfour}</option>
            <option value={twentyfive}>{twentyfive}</option>
            <option value={twentysix}>{twentysix}</option>
            <option value={twentyseven}>{twentyseven}</option>
            
        </select>
       
        
        // <select 
        //     name="category" 
        //     id="category"
        //     className={className}
        //     value={addList.category}
        // >

        //     <option value={addList.category}>{one}</option>
        //     <option value={addList.category}>{two}</option>
        //     <option value={addList.category}>{three}</option>
        //     <option value={addList.category}>{four}</option>
        //     <option value={addList.category}>{five}</option>
        //     <option value={addList.category}>{six}</option>
        //     <option value={addList.category}>{seven}</option>
        //     <option value={addList.category}>{eight}</option>
        //     <option value={addList.category}>{nine}</option>
        //     <option value={addList.category}>{ten}</option>
        //     <option value={addList.category}>{eleven}</option>
        //     <option value={addList.category}>{twelve}</option>
        //     <option value={addList.category}>{thirteen}</option>
        //     <option value={addList.category}>{fourteen}</option>
        //     <option value={addList.category}>{fifteen}</option>
        //     <option value={addList.category}>{sixteen}</option>
        //     <option value={addList.category}>{seventeen}</option>
        //     <option value={addList.category}>{eighteen}</option>
        //     <option value={addList.category}>{nineteen}</option>
        //     <option value={addList.category}>{twenty}</option>
        //     <option value={addList.category}>{twentyone}</option>
        //     <option value={addList.category}>{twentytwo}</option>
        //     <option value={addList.category}>{twentythree}</option>
        //     <option value={addList.category}>{twentyfour}</option>
        //     <option value={addList.category}>{twentyfive}</option>
        //     <option value={addList.category}>{twentysix}</option>
        //     <option value={addList.category}>{twentyseven}</option>
        // </select>
    );
}