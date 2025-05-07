import { saveDespesa } from './firebase.js'

window.addEventListener("DOMContentLoaded", ()=>{
    saveDespesa({
        concepte: "Sopar", 
        quantia: "34,5",
        pagatPer: "Joan"
    });
});