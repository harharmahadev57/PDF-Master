function processFile() {
    let fileInput = document.getElementById("pdfUpload");
    let file = fileInput.files[0];

    if (file) {
        alert("Processing: " + file.name);
        updateProgress(50);
        setTimeout(() => updateProgress(100), 2000);
    } else {
        alert("Please upload a file.");
    }
}

function mergePDF() {
    alert("Merging PDFs...");
    updateProgress(100);
}

function splitPDF() {
    alert("Splitting PDFs...");
    updateProgress(100);
}

function pdfToJPG() {
    alert("Converting PDF to JPG...");
    updateProgress(100);
}

function jpgToPDF() {
    alert("Converting JPG to PDF...");
    updateProgress(100);
}

function wordToPDF() {
    alert("Converting Word to PDF...");
    updateProgress(100);
}

function pdfToWord() {
    alert("Converting PDF to Word...");
    updateProgress(100);
}

function addText() {
    alert("Adding Text...");
    updateProgress(100);
}

function removeText() {
    alert("Removing Text...");
    updateProgress(100);
}

function addImage() {
    alert("Adding Image...");
    updateProgress(100);
}

function renamePDF() {
    let newName = prompt("Enter new PDF name:");
    if (newName) {
        alert("PDF renamed to " + newName);
        updateProgress(100);
    }
}

function updateProgress(value) {
    document.getElementById("progress-bar").style.width = value + "%";
}
