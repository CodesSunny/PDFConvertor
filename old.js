// import { jsPDF } from "jspdf";  //with npm
const { jsPDF } = window.jspdf;  // with cdn
const button = document.getElementById("btn");
const input = document.getElementById("text");
const textArea= document.getElementById("text-area");
let inputFileText="";

const createPdf=()=>{
    // textarea to pdf
    const doc = new jsPDF();  // create instance
    const areaText=textArea.value;
    if(areaText){
        doc.text(areaText, 10, 10);
        doc.save("doc1.pdf"); //download pdf file
    }else if(inputFileText){
        // input file to pdf
        doc.text(inputFileText, 10, 10);
        doc.save("doc1.pdf"); //download pdf file           
    }else{
        alert("Either upload a file or type text")
    }
}

input.addEventListener("change",(e)=>{
    const uploadedFile = e.target.files[0];
    const reader = new FileReader(); //create instance
    reader.onload = function(e) {
        inputFileText = e.target.result;
      };
    reader.readAsText(uploadedFile);
})

button.addEventListener("click",createPdf)