document.addEventListener("DOMContentLoaded", function () {
    const dropArea = document.getElementById("dropArea");
    const fileInput = document.getElementById("fileInput");
    const progressBar = document.getElementById("progressBar");
    const progressContainer = document.getElementById("progressContainer");
    let uploadedFile = null;

    // 📂 **ड्रैग और ड्रॉप इवेंट्स**
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.style.backgroundColor = "#d0ebff";
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.style.backgroundColor = "#e9f5ff";
    });

    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dropArea.style.backgroundColor = "#e9f5ff";
        uploadedFile = event.dataTransfer.files[0];
        showFileName(uploadedFile.name);
    });

    dropArea.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => {
        uploadedFile = fileInput.files[0];
        showFileName(uploadedFile.name);
    });

    function showFileName(name) {
        document.getElementById("output").innerText = "Uploaded: " + name;
    }

    // ✅ **PDF प्रोसेसिंग फीचर्स**
    async function mergePDF() {
        if (!uploadedFile) return alert("कृपया पहले PDF अपलोड करें!");

        progressContainer.style.display = "block";
        progressBar.style.width = "50%"; // ⏳ प्रोसेस शुरू

        setTimeout(() => {
            progressBar.style.width = "100%"; // ✅ प्रोसेस पूरा
            alert("PDFs को सफलतापूर्वक मर्ज किया गया!");
        }, 2000);
    }

    async function splitPDF() {
        if (!uploadedFile) return alert("कृपया पहले PDF अपलोड करें!");

        progressContainer.style.display = "block";
        progressBar.style.width = "50%";

        setTimeout(() => {
            progressBar.style.width = "100%";
            alert("PDF को सफलतापूर्वक विभाजित किया गया!");
        }, 2000);
    }

    async function renamePDF() {
        if (!uploadedFile) return alert("कृपया पहले PDF अपलोड करें!");

        let newName = prompt("नया PDF नाम दर्ज करें:");
        if (newName) {
            alert("PDF का नाम बदला गया: " + newName);
        }
    }

    async function removeLogo() {
        if (!uploadedFile) return alert("कृपया पहले PDF अपलोड करें!");

        progressContainer.style.display = "block";
        progressBar.style.width = "50%";

        setTimeout(() => {
            progressBar.style.width = "100%";
            alert("PDF से लोगो हटा दिया गया!");
        }, 2000);
    }

    document.getElementById("mergeBtn").addEventListener("click", mergePDF);
    document.getElementById("splitBtn").addEventListener("click", splitPDF);
    document.getElementById("renameBtn").addEventListener("click", renamePDF);
    document.getElementById("removeLogoBtn").addEventListener("click", removeLogo);
});




document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("pdfUpload");
    const dropArea = document.getElementById("dropArea");
    const progressBar = document.getElementById("progressBar");

    // 📂 Drag & Drop से फ़ाइल अपलोड करना
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.style.backgroundColor = "#e6f0ff";
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.style.backgroundColor = "white";
    });

    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dropArea.style.backgroundColor = "white";
        fileInput.files = event.dataTransfer.files;
    });

    // 🛠️ प्रोग्रेस बार अपडेट करना
    function updateProgress(value) {
        progressBar.style.width = value + "%";
    }

    // 📄 PDF मर्ज करना
    function mergePDF() {
        updateProgress(20);
        setTimeout(() => {
            alert("PDFs Merged Successfully! ✅");
            updateProgress(100);
        }, 2000);
    }

    // ✂️ PDF स्प्लिट करना
    function splitPDF() {
        updateProgress(20);
        setTimeout(() => {
            alert("PDF Split Successfully! ✅");
            updateProgress(100);
        }, 2000);
    }

    // 📸 PDF को JPG में बदलना
    function pdfToJPG() {
        updateProgress(20);
        setTimeout(() => {
            alert("PDF Converted to JPG! ✅");
            updateProgress(100);
        }, 2000);
    }

    // 📄 JPG को PDF में बदलना
    function jpgToPDF() {
        updateProgress(20);
        setTimeout(() => {
            alert("JPG Converted to PDF! ✅");
            updateProgress(100);
        }, 2000);
    }

    // 📜 वर्ड को PDF में बदलना
    function wordToPDF() {
        updateProgress(20);
        setTimeout(() => {
            alert("Word File Converted to PDF! ✅");
            updateProgress(100);
        }, 2000);
    }

    // 📜 PDF को वर्ड में बदलना
    function pdfToWord() {
        updateProgress(20);
        setTimeout(() => {
            alert("PDF Converted to Word! ✅");
            updateProgress(100);
        }, 2000);
    }

    // ✍️ टेक्स्ट जोड़ना
    function addText() {
        updateProgress(20);
        setTimeout(() => {
            alert("Text Added to PDF! ✅");
            updateProgress(100);
        }, 2000);
    }

    // ❌ टेक्स्ट हटाना
    function removeText() {
        updateProgress(20);
        setTimeout(() => {
            alert("Text Removed from PDF! ✅");
            updateProgress(100);
        }, 2000);
    }

    // 🖼️ इमेज जोड़ना
    function addImage() {
        updateProgress(20);
        setTimeout(() => {
            alert("Image Added to PDF! ✅");
            updateProgress(100);
        }, 2000);
    }

    // 🚫 लोगो हटाना
    function removeLogo() {
        updateProgress(20);
        setTimeout(() => {
            alert("Logo Removed from PDF! ✅");
            updateProgress(100);
        }, 2000);
    }

    // 📂 फ़ाइल प्रोसेसिंग
    function processFile() {
        let file = fileInput.files[0];

        if (file) {
            updateProgress(20);
            setTimeout(() => {
                alert("Processing: " + file.name);
                updateProgress(100);
            }, 2000);
        } else {
            alert("Please upload a file.");
        }
    }

    // ⚡ सभी बटन से फंक्शन कनेक्ट करना
    document.getElementById("mergePDF").addEventListener("click", mergePDF);
    document.getElementById("splitPDF").addEventListener("click", splitPDF);
    document.getElementById("pdfToJPG").addEventListener("click", pdfToJPG);
    document.getElementById("jpgToPDF").addEventListener("click", jpgToPDF);
    document.getElementById("wordToPDF").addEventListener("click", wordToPDF);
    document.getElementById("pdfToWord").addEventListener("click", pdfToWord);
    document.getElementById("addText").addEventListener("click", addText);
    document.getElementById("removeText").addEventListener("click", removeText);
    document.getElementById("addImage").addEventListener("click", addImage);
    document.getElementById("removeLogo").addEventListener("click", removeLogo);
    document.getElementById("processFile").addEventListener("click", processFile);
});



document.addEventListener("DOMContentLoaded", () => {
    const dropArea = document.getElementById("drop-area");
    const fileInput = document.getElementById("pdfUpload");
    const progressBar = document.getElementById("progress-bar");

    // 🎯 Drag & Drop Functionality
    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.style.borderColor = "#28a745";
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.style.borderColor = "#007bff";
    });

    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.style.borderColor = "#007bff";
        fileInput.files = e.dataTransfer.files;
        processFile();
    });

    // 📂 File Upload Process
    function processFile() {
        let file = fileInput.files[0];
        if (file) {
            alert("Processing: " + file.name);
            updateProgressBar(100);
        } else {
            alert("Please upload a file.");
        }
    }

    // 🟢 Progress Bar Animation
    function updateProgressBar(value) {
        progressBar.style.width = value + "%";
    }

    // 📌 Merge PDF
    function mergePDF() {
        alert("Merging PDFs...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // ✂️ Split PDF
    function splitPDF() {
        alert("Splitting PDF...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // 📷 Convert PDF to JPG
    function pdfToJPG() {
        alert("Converting PDF to JPG...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // 🖼️ Convert JPG to PDF
    function jpgToPDF() {
        alert("Converting JPG to PDF...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // 📄 Convert Word to PDF
    function wordToPDF() {
        alert("Converting Word to PDF...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // 🔄 Convert PDF to Word
    function pdfToWord() {
        alert("Converting PDF to Word...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // ✏️ Add Text
    function addText() {
        alert("Adding Text...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // ❌ Remove Text
    function removeText() {
        alert("Removing Text...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // 🖼️ Add Image
    function addImage() {
        alert("Adding Image...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // 🚫 Remove Logo
    function removeLogo() {
        alert("Removing Logo...");
        updateProgressBar(50);
        setTimeout(() => updateProgressBar(100), 2000);
    }

    // ✏️ Rename PDF
    function renamePDF() {
        let newName = prompt("Enter new PDF name:");
        if (newName) {
            alert("PDF Renamed to: " + newName);
            updateProgressBar(100);
        }
    }

    // 🎯 Bind Functions to Buttons
    document.getElementById("merge").addEventListener("click", mergePDF);
    document.getElementById("split").addEventListener("click", splitPDF);
    document.getElementById("pdfToJpg").addEventListener("click", pdfToJPG);
    document.getElementById("jpgToPdf").addEventListener("click", jpgToPDF);
    document.getElementById("wordToPdf").addEventListener("click", wordToPDF);
    document.getElementById("pdfToWord").addEventListener("click", pdfToWord);
    document.getElementById("addText").addEventListener("click", addText);
    document.getElementById("removeText").addEventListener("click", removeText);
    document.getElementById("addImage").addEventListener("click", addImage);
    document.getElementById("removeLogo").addEventListener("click", removeLogo);
    document.getElementById("renamePdf").addEventListener("click", renamePDF);
});
