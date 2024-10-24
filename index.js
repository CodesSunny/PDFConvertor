// import { jsPDF } from "jspdf";  //with npm
const { jsPDF } = window.jspdf;  // with cdn
const button = document.getElementById("btn");
const input = document.getElementById("text");
const textArea= document.getElementById("text-area");
let inputFileText="";

const createPdf=()=>{
    const doc = new jsPDF();  // create instance
    // Coordinates for the text starting point
    const x = 10;
    const y = 20;
    const maxWidth = 190;  // The width from x = 10 to x = 100
    const areaText=textArea.value;
    if(areaText){    // textarea to pdf
        // Split the text into multiple lines to fit within the specified width
        const wrappedText = doc.splitTextToSize(areaText, maxWidth);
        doc.text(wrappedText, x, y);
        doc.save("doc1.pdf"); //download pdf file
    }else if(inputFileText){   // input file to pdf
        const wrappedText = doc.splitTextToSize(inputFileText, maxWidth);
        doc.text(wrappedText, x, y);      
        doc.save("doc1.pdf"); //download pdf file           
    }else{
        alert("Either upload a file or type text")
    }
}

input.addEventListener("change",(e)=>{
    textArea.value = ""; //empty textarea
    const uploadedFile = e.target.files[0];
    const reader = new FileReader(); //create instance
    reader.onload = function(e) {
        inputFileText = e.target.result;
      };
    reader.readAsText(uploadedFile);
})

button.addEventListener("click",createPdf)