import React from 'react';

function Circle({name}){
    return (
        <div class="circle" id="circle">{name}</div>
    )
}
function CircleHolder({circles}){
    return (
        <div id="circle-holder">
            
        </div>
    
    )
}
export default CircleHolder;
export {Circle};
