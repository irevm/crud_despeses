import { saveDespesa, getDespeses, onGetDespeses } from './firebase.js'

const despeses = [];
const despesesForm = document.getElementById("despeses-form");
const despesesContainer = document.getElementById("despeses-container");

function addEventListenerToSaveDespesa () {
    despesesForm.addEventListener("submit", (e)=>{
        e.preventDefault();

        const concepte = despesesForm["despesa-concepte"].value;
        const quantia = despesesForm["despesa-quantia"].value;
        const pagatPer = despesesForm["despesa-pagat-per"].value;

        const despesa = { concepte, quantia, pagatPer};

        console.log(despesa);

        saveDespesa(despesa)
          .then( (despesaId) =>{
            console.log(despesaId);
            despesa.id = despesaId;
            despeses.push(despesa);
            console.log(despesa);
          });

          despesesForm.reset();
    });
}

async function readAndRenderDespeses () {
  let html = "";
  const querySnapshot = await getDespeses();

  querySnapshot.forEach(doc => {
    const despesa = doc.data();
    despesa.id = doc.id;

    despeses.push(despesa);

    html += `
      <div>
        <h3>${despesa.concepte}</h3>
        <p>Import: ${despesa.quantia}</p>
        <p>Pagat per: ${despesa.pagatPer}</p>
        <button class="delete-despesa-btn" data-id="${despesa.id}">Elimina</button>
      </div>    
    `;
    
  });

  despesesContainer.innerHTML = html;
  console.log(despeses);
}

function readAndRenderDespesesV2 () {
  onGetDespeses((querySnapshot) => {
    let html = "";

    querySnapshot.forEach(doc => {
      const despesa = doc.data();
      despesa.id = doc.id;
  
      despeses.push(despesa);
  
      html += `
        <div>
          <h3>${despesa.concepte}</h3>
          <p>Import: ${despesa.quantia}</p>
          <p>Pagat per: ${despesa.pagatPer}</p>
          <button class="delete-despesa-btn" data-id="${despesa.id}">Elimina</button>
        </div>    
      `;
      
    });

    despesesContainer.innerHTML = html;

  });
}


window.addEventListener("DOMContentLoaded", ()=>{

    addEventListenerToSaveDespesa();

    //readAndRenderDespeses();

    readAndRenderDespesesV2();

});