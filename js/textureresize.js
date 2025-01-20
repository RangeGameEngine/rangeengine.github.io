const dropArea = document.getElementById('dropArea');
const outputDiv = document.getElementById('output');
const downloadAllBtn = document.getElementById('downloadAllBtn');
const globalWidthInput = document.getElementById('globalWidth');
const globalHeightInput = document.getElementById('globalHeight');
const applyGlobalBtn = document.getElementById('applyGlobalBtn');
const resizeAllBtn = document.getElementById('resizeAllBtn');

let globalResolution = null;

// Drag over event to highlight the drop area
dropArea.addEventListener('dragover', e => {
    e.preventDefault();
    dropArea.style.borderColor = 'red';
});

// Drag leave event to reset the drop area highlight
dropArea.addEventListener('dragleave', () => dropArea.style.borderColor = '#ccc');

// Drop event to handle dropped files
dropArea.addEventListener('drop', e => {
    e.preventDefault();
    dropArea.style.borderColor = 'red';
    processFiles(e.dataTransfer.files);
});

// Apply global resolution to all textures
applyGlobalBtn.addEventListener('click', () => {
    const globalWidth = parseInt(globalWidthInput.value);
    const globalHeight = parseInt(globalHeightInput.value);
    if (globalWidth && globalHeight) {
        globalResolution = { width: globalWidth, height: globalHeight };
        document.querySelectorAll('.texture-container').forEach(container => {
            const newWidthInput = container.querySelector('.newWidth');
            const newHeightInput = container.querySelector('.newHeight');
            newWidthInput.value = globalWidth;
            newHeightInput.value = globalHeight;
        });
    } else {
        alert('Please enter valid global resolution values.');
    }
});

// Resize all textures using the global resolution
resizeAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.texture-container').forEach(container => {
        const img = container.querySelector('.texture-image');
        const filePath = container.querySelector('.image-name').textContent;
        const downloadBtn = container.querySelector('.download-btn');
        const newWidth = container.querySelector('.newWidth');
        const newHeight = container.querySelector('.newHeight');
        const resizeBtn = container.querySelector('.resize-btn');
        resizeTexture(img, filePath, newWidth.value, newHeight.value, downloadBtn, resizeBtn);
        downloadAllBtn.style.display = 'flex';
        
    });
});

// Process each file that was dropped
function processFiles(files) {
    [...files].forEach(file => loadTexture(file, createTextureContainer));
}

// Load the texture image and pass it to the callback function
function loadTexture(file, callback) {
    const reader = new FileReader();
    reader.onload = event => {
        const img = new Image();
        img.onload = () => callback(img, file.name);
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

// Create texture container with inputs for resizing
function createTextureContainer(img, fileName) {
    const container = document.createElement('div');
    container.className = 'texture-container';
    
    const previewImg = document.createElement('img');
    previewImg.src = img.src;
    previewImg.className = `texture-image`;

    const imgName = document.createElement('p');
    imgName.textContent = fileName;
    imgName.className = `image-name`;
    imgName.style.display = 'none';
    
    const originalResolution = document.createElement('p');
    originalResolution.textContent = `${img.width}x${img.height}`;
    originalResolution.className = 'original-res'

    const newWidthInput = document.createElement('input');
    newWidthInput.type = 'number';
    newWidthInput.placeholder = 'Width';
    newWidthInput.min = 1;
    newWidthInput.className = 'newWidth';
    if (globalResolution) newWidthInput.value = globalResolution.width;

    const newHeightInput = document.createElement('input');
    newHeightInput.type = 'number';
    newHeightInput.placeholder = 'Height';
    newHeightInput.min = 1;
    newHeightInput.className = 'newHeight';
    if (globalResolution) newHeightInput.value = globalResolution.height;

    const resInputsDiv = document.createElement('div');
    resInputsDiv.className = 'res-inputs';

    resInputsDiv.append(newWidthInput, newHeightInput);

    const resizeBtn = document.createElement('button');
    resizeBtn.className = 'resize-btn';
    
    const resizeIco = document.createElement('i');
    resizeIco.className = `material-symbols-outlined`;
    resizeIco.textContent = `Update`;
    resizeBtn.append(resizeIco);
    
    const resizedPreview = document.createElement('img');
    resizedPreview.style.display = 'none';

    const downloadBtn = document.createElement('a');
    downloadBtn.className = 'download-btn';

    // Resize image when button is clicked
    resizeBtn.addEventListener('click', () => {
        resizeTexture(img, fileName, newWidthInput.value, newHeightInput.value, downloadBtn, resizeBtn);
    });

    container.append(previewImg, imgName, originalResolution, resInputsDiv, resizeBtn, downloadBtn);
    outputDiv.appendChild(container);
}

// Resize the texture and update the preview and download button
function resizeTexture(img, fileName, newWidth, newHeight, downloadBtn, resizeBtn) {
    if (!newWidth || !newHeight) {
        alert('Please enter new dimensions.');
        return;
    }

    const canvas = document.getElementById('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    const fileExtension = fileName.split('.').pop();

    let mimeType = 'image/png'; // default to PNG 
    if (fileExtension === 'jpg' || fileExtension === 'jpeg') { mimeType = 'image/jpeg'; } 
    else if (fileExtension === 'webp') { mimeType = 'image/webp'; }
    
    const resizedImgSrc = canvas.toDataURL(mimeType);

    downloadBtn.href = resizedImgSrc;
    downloadBtn.download = `${fileName.replace(/\.[^/.]+$/, "")}_resized.${fileExtension}`;

    resizeBtn.style.display = 'none';

    const downIco = document.createElement('i');
    downIco.className = `material-symbols-outlined`;
    downIco.textContent = `Download`;

    downloadBtn.append(downIco);
}

// Download all resized images as a ZIP file
function downloadAll() {
    const zip = new JSZip();
    document.querySelectorAll('.download-btn').forEach(downloadBtn => {
        const fileName = downloadBtn.download;
        const imgData = downloadBtn.href.replace(/^data:image\/(png|jpg);base64,/, "");
        zip.file(fileName, imgData, { base64: true });
    });

    zip.generateAsync({ type: 'blob' }).then(content => saveAs(content, 'resized_textures.zip'));
}

// Add event listener for the "Download All" button
downloadAllBtn.addEventListener('click', downloadAll);