function mergePDF() {
    alert("Merging PDFs - This feature will be available soon!");
}

function splitPDF() {
    alert("Splitting PDFs - This feature will be available soon!");
}

function pdfToJPG() {
    alert("Converting PDF to JPG - This feature will be available soon!");
}

function jpgToPDF() {
    alert("Converting JPG to PDF - This feature will be available soon!");
}

function wordToPDF() {
    alert("Converting Word to PDF - This feature will be available soon!");
}

function pdfToWord() {
    alert("Converting PDF to Word - This feature will be available soon!");
}

function addText() {
    alert("Adding Text - This feature will be available soon!");
}

function removeText() {
    alert("Removing Text - This feature will be available soon!");
}

function addImage() {
    alert("Adding Image - This feature will be available soon!");
}

function removeLogo() {
    alert("Removing Logo - This feature will be available soon!");
}

function processFile() {
    let fileInput = document.getElementById("pdfUpload");
    let file = fileInput.files[0];

    if (file) {
        alert("Processing: " + file.name);
    } else {
        alert("Please upload a file.");
    }
}
