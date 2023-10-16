import React from 'react';

function Circler({name}){
    return (
        <div class="circler">{name}
        <div class="align-right">
          <button class="profile">Pr</button>
          <button class="dm">Dm</button>
        </div>
      </div>

    )
}
function CirclerHolder({circlers, onProfile, onMessage}){
    return (
        <div class="holder"></div>
    )
}
export default CirclerHolder;
export {Circler};