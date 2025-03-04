async function mergePDFs() {
    const { PDFDocument } = PDFLib;
    const files = document.getElementById("pdfUpload").files;
    if (files.length < 2) {
        alert("Please select at least 2 PDFs to merge.");
        return;
    }
    const mergedPdf = await PDFDocument.create();
    for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    const mergedPdfBytes = await mergedPdf.save();
    downloadPDF(mergedPdfBytes, "Merged.pdf");
}

async function splitPDF() {
    alert("Splitting PDFs - Feature under development!");
}

async function pdfToJPG() {
    alert("Converting PDF to JPG - Feature under development!");
}

async function jpgToPDF() {
    alert("Converting JPG to PDF - Feature under development!");
}

async function wordToPDF() {
    alert("Converting Word to PDF - Feature under development!");
}

async function pdfToWord() {
    alert("Converting PDF to Word - Feature under development!");
}

function addText() {
    const doc = new jsPDF();
    doc.text("Sample Text", 20, 30);
    doc.save("Edited.pdf");
}

function removeText() {
    alert("Removing Text - Feature under development!");
}

async function addImage() {
    alert("Adding Image - Feature under development!");
}

async function removeLogo() {
    alert("Removing Logo - Feature under development!");
}

function renamePDF() {
    const fileInput = document.getElementById("pdfUpload");
    const file = fileInput.files[0];
    const newName = document.getElementById("newPdfName").value;
    if (!file || !newName) {
        alert("Please upload a PDF and enter a new name.");
        return;
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = newName + ".pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const dropZone = document.getElementById("dropZone");
dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = "#f0f0f0";
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = "#fff";
    const files = event.dataTransfer.files;
    alert("File Uploaded: " + files[0].name);
});

function downloadPDF(pdfBytes, fileName) {
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
