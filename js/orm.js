document.getElementById('downloadBtn').addEventListener('click', downloadTexture);
document.getElementById('clearBtn').addEventListener('click', clearCanvas);

// Global variables to store the images
let occlusionImg = null;
let roughnessImg = null;
let metallicImg = null;

function setupDropzones() {
  const dropzoneIds = ['Occlusion', 'Roughness', 'Metallic'];
  dropzoneIds.forEach(id => {
    const dropzone = document.getElementById(id);
    dropzone.addEventListener('dragover', handleDragOver);
    dropzone.addEventListener('dragleave', handleDragLeave);
    dropzone.addEventListener('drop', function(event) {
      handleDrop(event, id); // Pass the dropzone id
    });
  });
}

function handleDragOver(event) {
  event.preventDefault();
  event.target.classList.add('dragover');
}

function handleDragLeave(event) {
  event.target.classList.remove('dragover');
}

function handleDrop(event, dropzoneId) {
  event.preventDefault();
  event.target.classList.remove('dragover');
  
  const file = event.dataTransfer.files[0];
  const reader = new FileReader();
  
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      // Store the image in the corresponding global variable
      if (dropzoneId === 'Occlusion') {
        occlusionImg = img;
      } else if (dropzoneId === 'Roughness') {
        roughnessImg = img;
      } else if (dropzoneId === 'Metallic') {
        metallicImg = img;
      }
      
      displayImageInDropzone(dropzoneId, img);
      mergeTextures(); // Update the ORM texture immediately after loading the image
    };
    img.src = evt.target.result;
  };
  
  reader.readAsDataURL(file);
}

function displayImageInDropzone(dropzoneId, img) {
  const dropzone = document.getElementById(dropzoneId);
  dropzone.style.backgroundImage = `url(${img.src})`;
  dropzone.textContent = ''; // Remove any placeholder text
}

function mergeTextures() {
  const canvas = document.getElementById('ormCanvas');
  const ctx = canvas.getContext('2d');

  // Determine canvas size based on the first image loaded
  const width = occlusionImg ? occlusionImg.width : (roughnessImg ? roughnessImg.width : (metallicImg ? metallicImg.width : 1024));
  const height = occlusionImg ? occlusionImg.height : (roughnessImg ? roughnessImg.height : (metallicImg ? metallicImg.height : 1024));
  
  canvas.width = width;
  canvas.height = height;

  // Create fallback images for missing textures
  const occlusionData = getImageDataOrBlank(occlusionImg, width, height, [255, 255, 255]);
  const roughnessData = getImageDataOrBlank(roughnessImg, width, height, [255, 255, 255]);
  const metallicData = getImageDataOrBlank(metallicImg, width, height, [255, 255, 255]);

  // Create the ORM texture
  const ormData = ctx.createImageData(width, height);
  for (let i = 0; i < ormData.data.length; i += 4) {
    ormData.data[i] = occlusionData.data[i]; // Occlusion in the Red channel
    ormData.data[i + 1] = roughnessData.data[i]; // Roughness in the Green channel
    ormData.data[i + 2] = metallicData.data[i]; // Metallic in the Blue channel
    ormData.data[i + 3] = 255; // Alpha channel (transparency)
  }

  // Update the canvas with the generated ORM texture
  ctx.putImageData(ormData, 0, 0);
}

// Function to get image data or create a blank image (fallback)
function getImageDataOrBlank(img, width, height, defaultColor) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;

  if (img) {
    ctx.drawImage(img, 0, 0, width, height);
    return ctx.getImageData(0, 0, width, height);
  } else {
    // If there's no image, return a blank texture
    const blankData = ctx.createImageData(width, height);
    for (let i = 0; i < blankData.data.length; i += 4) {
      blankData.data[i] = defaultColor[0]; // Red (Occlusion)
      blankData.data[i + 1] = defaultColor[1]; // Green (Roughness)
      blankData.data[i + 2] = defaultColor[2]; // Blue (Metallic)
      blankData.data[i + 3] = 255; // Alpha
    }
    return blankData;
  }
}

function downloadTexture() {
  const canvas = document.getElementById('ormCanvas');
  const link = document.createElement('a');
  link.download = 'texture.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// Function to clear the canvas and reset the image variables
function clearCanvas() {
  // Clear the canvas
  const canvas = document.getElementById('ormCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Reset image variables
  occlusionImg = null;
  roughnessImg = null;
  metallicImg = null;

  // Clear dropzones
  resetDropzone('Occlusion');
  resetDropzone('Roughness');
  resetDropzone('Metallic');
}

function resetDropzone(dropzoneId) {
  const dropzone = document.getElementById(dropzoneId);
  dropzone.style.backgroundImage = '';  // Clear the background image
  dropzone.textContent = dropzoneId;  // Restore placeholder text
}

setupDropzones();
