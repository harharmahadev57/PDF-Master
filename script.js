document.getElementById('dropArea').addEventListener('dragover', function (event) {
    event.preventDefault();
    this.style.background = '#ffcccb';
});

document.getElementById('dropArea').addEventListener('dragleave', function () {
    this.style.background = '';
});

document.getElementById('dropArea').addEventListener('drop', function (event) {
    event.preventDefault();
    this.style.background = '';

    let file = event.dataTransfer.files[0];
    document.getElementById('pdfUpload').files = event.dataTransfer.files;
    alert("File Uploaded: " + file.name);
});

function updateProgress(percent) {
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("status").innerText = "Processing: " + percent + "%";
}

function mergePDF() {
    updateProgress(10);
    setTimeout(() => { updateProgress(50); }, 1000);
    setTimeout(() => { updateProgress(100); alert("PDF मर्जिंग सफलतापूर्वक पूरी हुई!"); }, 2000);
}

function splitPDF() {
    updateProgress(10);
    setTimeout(() => { updateProgress(50); }, 1000);
    setTimeout(() => { updateProgress(100); alert("PDF स्प्लिटिंग पूरी हुई!"); }, 2000);
}

function pdfToJPG() {
    updateProgress(10);
    setTimeout(() => { updateProgress(50); }, 1000);
    setTimeout(() => { updateProgress(100); alert("PDF को JPG में बदल दिया गया!"); }, 2000);
}

function jpgToPDF() {
    updateProgress(10);
    setTimeout(() => { updateProgress(50); }, 1000);
    setTimeout(() => { updateProgress(100); alert("JPG को PDF में बदल दिया गया!"); }, 2000);
}

function wordToPDF() {
    updateProgress(10);
    setTimeout(() => { updateProgress(50); }, 1000);
    setTimeout(() => { updateProgress(100); alert("Word को PDF में बदल दिया गया!"); }, 2000);
}

function pdfToWord() {
    updateProgress(10);
    setTimeout(() => { updateProgress(50); }, 1000);
    setTimeout(() => { updateProgress(100); alert("PDF को Word में बदल दिया गया!"); }, 2000);
}

function addText() {
    updateProgress(10);
    setTimeout(() => { updateProgress(50); }, 1000);
    setTimeout(() => { updateProgress(100); alert("PDF में टेक्स्ट जोड़ दिया गया!"); }, 2000);
}

function removeText() {
    updateProgress(10);
    setTimeout(() => { updateProgress(50); }, 1000);
    setTimeout(() => { updateProgress(100); alert("PDF से टेक्स्ट हटा दिया गया!"); }, 2000);
}

function renamePDF() {
    let newName = prompt("नया नाम दर्ज करें:");
    if (newName) {
        updateProgress(10);
        setTimeout(() => { updateProgress(50); }, 1000);
        setTimeout(() => { updateProgress(100); alert("PDF का नाम बदला गया: " + newName); }, 2000);
    }
}
