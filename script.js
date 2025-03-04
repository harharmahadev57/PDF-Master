function processFile() {
    let fileInput = document.getElementById("pdfUpload");
    let file = fileInput.files[0];

    if (file) {
        alert("Processing: " + file.name);
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    } else {
        alert("Please upload a file.");
    }
}

// 🔹 Progress Bar Animation
function updateProgressBar(value) {
    document.getElementById("progress-bar").style.width = value + "%";
}

// 🔹 Merge PDFs
async function mergePDF() {
    const pdfDoc = await PDFLib.PDFDocument.create();
    const fileInput = document.getElementById("pdfUpload").files;
    if (fileInput.length < 2) {
        alert("Please select at least 2 PDFs to merge.");
        return;
    }

    for (let file of fileInput) {
        const arrayBuffer = await file.arrayBuffer();
        const loadedPdf = await PDFLib.PDFDocument.load(arrayBuffer);
        const copiedPages = await pdfDoc.copyPages(loadedPdf, loadedPdf.getPageIndices());
        copiedPages.forEach(page => pdfDoc.addPage(page));
    }

    const mergedPdfBytes = await pdfDoc.save();
    downloadPDF(mergedPdfBytes, "Merged_PDF.pdf");
}

// 🔹 Split PDF (Extract First Page)
async function splitPDF() {
    const file = document.getElementById("pdfUpload").files[0];
    if (!file) {
        alert("Please upload a PDF first.");
        return;
    }

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    const newPdf = await PDFLib.PDFDocument.create();
    const [firstPage] = await newPdf.copyPages(pdfDoc, [0]);
    newPdf.addPage(firstPage);
    const splitPdfBytes = await newPdf.save();
    downloadPDF(splitPdfBytes, "Split_PDF.pdf");
}

// 🔹 Convert PDF to JPG (First Page)
async function pdfToJPG() {
    alert("PDF to JPG conversion is in development!");
}

// 🔹 Convert JPG to PDF
async function jpgToPDF() {
    alert("JPG to PDF conversion is in development!");
}

// 🔹 Add Text to PDF
async function addText() {
    alert("Adding text to PDF is in development!");
}

// 🔹 Remove Text from PDF
async function removeText() {
    alert("Removing text from PDF is in development!");
}

// 🔹 Add Image to PDF
async function addImage() {
    alert("Adding an image to PDF is in development!");
}

// 🔹 Remove Logo from PDF
async function removeLogo() {
    alert("Removing logo from PDF is in development!");
}

// 🔹 Rename PDF
function renamePDF() {
    let newName = prompt("Enter new name for the PDF:");
    if (newName) {
        alert("PDF renamed to: " + newName);
    }
}

// 🔹 Download PDF File
function downloadPDF(pdfBytes, fileName) {
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}
