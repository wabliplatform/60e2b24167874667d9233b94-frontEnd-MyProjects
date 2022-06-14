document.getElementById('icaj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('i4jic').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('ildu5x').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createDeliverable' ;}};document.getElementById('ilshwy').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('i1disx').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewDeliverables' ;}};
 function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;
    
      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.9;
      const file = e.target.files[0]; // get the file
      const blobURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = blobURL;
      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
      };
      img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          async (blob) => {
            const base64 = await convertBase64(blob);
    
            document
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );let arrayib5cm3 = [];
document.getElementById("iyjqci").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("im1p3y")
  arrayib5cm3.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULixe5wc();
};

function refreshULixe5wc() {
let e=``;
for (let y=0; y<arrayib5cm3.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayib5cm3[y].value}'><p style="display: inline-block">${arrayib5cm3[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("ixe5wc").innerHTML = e;
}

document.getElementById("ixe5wc").addEventListener("click", event => {
  event.preventDefault();
  arrayib5cm3 = arrayib5cm3.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULixe5wc();
});
function initializearrayib5cm3(data) {
  arrayib5cm3 = data.map(item => ({
    value: item._id,
    liValue: item[' ']
  }));
}
window.onload = () => {};