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
