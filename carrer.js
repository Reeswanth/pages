const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('resume');

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('drag-over');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('drag-over');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    fileInput.files = files;
});

dropArea.addEventListener('click', () => fileInput.click());
