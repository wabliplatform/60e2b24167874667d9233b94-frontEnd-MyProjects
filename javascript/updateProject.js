let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiWorkpackageApi = new TempApi.WorkpackageApi();document.getElementById('icaj').onclick = (event) => {
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
    liValue: item['wName']
  }));
}
document.addEventListener('alignpWorkpackage', function(e) {
  const advanceSelect = document.getElementById('im1p3y');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i7w1n').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/updateProject/','');let project = new TempApi.Project();project['pImage'] = {
        data: document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pImage']").src,
        name: document.querySelector("[annotationname = 'pImage']").getAttribute("name")
      };project['pTitle'] = document.querySelector("[annotationname = 'pTitle']").value;project['pStart'] = document.querySelector("[annotationname = 'pStart']").value;project['pWebsite'] = document.querySelector("[annotationname = 'pWebsite']").value;project['pEnd'] = document.querySelector("[annotationname = 'pEnd']").value;project['pDuration'] = document.querySelector("[annotationname = 'pDuration']").value;project['pGA'] = document.querySelector("[annotationname = 'pGA']").value;project['pAbstract'] = document.querySelector("[annotationname = 'pAbstract']").value;project['pWorkpackage'] = arrayib5cm3.map(item => item.value); let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); 
      if(response.body.query.pImage !== undefined){

        if(document.querySelector('[annotationname = pImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pImage]').setAttribute('data-image-base64',response.body.query.pImage.data);
        }
        else{
          document.querySelector('[annotationname = pImage]').src = response.body.query.pImage.data;
        }
        document.querySelector('[annotationname = pImage]').name = response.body.query.pImage.name;
      }
      document.querySelector('[annotationname = pTitle]').value = response.body.query.pTitle ;document.querySelector('[annotationname = pStart]').value = response.body.query.pStart ;document.querySelector('[annotationname = pWebsite]').value = response.body.query.pWebsite ;document.querySelector('[annotationname = pEnd]').value = response.body.query.pEnd ;document.querySelector('[annotationname = pDuration]').value = response.body.query.pDuration ;document.querySelector('[annotationname = pGA]').value = response.body.query.pGA ;document.querySelector('[annotationname = pAbstract]').value = response.body.query.pAbstract ;initializearrayib5cm3(response.body.query.pWorkpackage|| []) ; }});};window.onload = () => {let projectId = window.location.pathname.replace('/updateProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = pTitle]').value = response.body.query.pTitle; } catch (e) { console.log(e) };try { 
      if(response.body.query.pImage !== undefined){
        if(document.querySelector('[annotationname = pImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pImage]').setAttribute('data-image-base64',response.body.query.pImage.data);
          let fileName = response.body.query.pImage.name;
          let file = new File([response.body.query.pImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = pImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = pImage]').src = response.body.query.pImage.data ;
        }
        document.querySelector('[annotationname = pImage]').name = response.body.query.pImage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pWebsite]').value = response.body.query.pWebsite; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pStart]').value = response.body.query.pStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pEnd]').value = response.body.query.pEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pDuration]').value = response.body.query.pDuration; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pGA]').value = response.body.query.pGA; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pAbstract]').value = response.body.query.pAbstract; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = pWorkpackage]').setAttribute('selected-element',response.body.query.pWorkpackage.wName);document.dispatchEvent(new Event("alignpWorkpackage"));
        const insideSubdocument = document.querySelector("[annotationname = 'pWorkpackage']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.pWorkpackage;
    initializearrayib5cm3(tableData); 
 refreshULixe5wc();
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wName']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wName;
      }
    }
    catch(e) {console.log(e);};
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.pWorkpackage._id){
        map.set(
          document.querySelector(
            "[annotationname = 'pWorkpackage']"
          ).getAttribute("id"),
          response.body.query.pWorkpackage
        );
      }
     } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = pDeliverable]').setAttribute('selected-element',response.body.query.pDeliverable.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'pDeliverable']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.pDeliverable;
    
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
      
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.pDeliverable._id){
        map.set(
          document.querySelector(
            "[annotationname = 'pDeliverable']"
          ).getAttribute("id"),
          response.body.query.pDeliverable
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});apiWorkpackageApi.getAllworkpackage((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("if2wp").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; i <=  data.length - subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = parentNode.childNodes[0].cloneNode(true);
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'wName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].wName;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'wName'){
        subDataElements[i].textContent = data[data.length -i -1].wName;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignpWorkpackage"))
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};