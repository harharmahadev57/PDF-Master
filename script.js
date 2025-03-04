document.addEventListener("DOMContentLoaded", function() {
    let dropArea = document.querySelector(".upload-section");

    dropArea.addEventListener("dragover", function(e) {
        e.preventDefault();
        dropArea.style.border = "2px solid green";
    });

    dropArea.addEventListener("dragleave", function() {
        dropArea.style.border = "2px dashed #aaa";
    });

    dropArea.addEventListener("drop", function(e) {
        e.preventDefault();
        dropArea.style.border = "2px dashed #aaa";
        let files = e.dataTransfer.files;
        if (files.length > 0) {
            document.getElementById("pdfUpload").files = files;
            alert("PDF अपलोड हो गई: " + files[0].name);
        }
    });
});

function mergePDF() {
    alert("PDF मर्ज हो रही है!");
}

function splitPDF() {
    alert("PDF स्प्लिट हो रही है!");
}

function renamePDF() {
    let newName = prompt("नया नाम डालें:");
    if (newName) {
        alert("PDF का नाम बदला गया: " + newName);
    }
}

function pdfToJPG() {
    alert("PDF से JPG में बदला जा रहा है!");
}

function jpgToPDF() {
    alert("JPG से PDF में बदला जा रहा है!");
}

function wordToPDF() {
    alert("Word से PDF में बदला जा रहा है!");
}

function pdfToWord() {
    alert("PDF से Word में बदला जा रहा है!");
}

function addText() {
    alert("टेक्स्ट जोड़ा जा रहा है!");
}

function removeText() {
    alert("टेक्स्ट हटाया जा रहा है!");
}

function addImage() {
    alert("इमेज जोड़ी जा रही है!");
}

function removeLogo() {
    alert("लोगो हटाया जा रहा है!");
}

function processFile() {
    let fileInput = document.getElementById("pdfUpload");
    let file = fileInput.files[0];

    if (file) {
        alert("प्रोसेसिंग: " + file.name);
    } else {
        alert("कृपया फाइल अपलोड करें।");
    }
}
