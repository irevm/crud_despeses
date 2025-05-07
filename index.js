import { saveDespesa } from './firebase.js'

const despesesForm = document.getElementById("despeses-form");

function addEventListenerToSaveDespesa () {
    despesesForm.addEventListener("submit", (e)=>{
        e.preventDefault();

        const concepte = despesesForm["despesa-concepte"].value;
        const quantia = despesesForm["despesa-quantia"].value;
        const pagatPer = despesesForm["despesa-pagat-per"].value;

        const despesa = { concepte, quantia, pagatPer};

        console.log(despesa);

        saveDespesa(despesa);
    });
}


window.addEventListener("DOMContentLoaded", ()=>{
    // saveDespesa({
    //     concepte: "Sopar", 
    //     quantia: "34,5",
    //     pagatPer: "Joan"
    // });

    addEventListenerToSaveDespesa();

});