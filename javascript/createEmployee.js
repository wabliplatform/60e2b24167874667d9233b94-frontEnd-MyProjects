let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiEmployeeApi = new TempApi.EmployeeApi();let employee = new TempApi.Employee();document.getElementById('i8nj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('i6sjj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('i4ual').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createTask' ;}};document.getElementById('iq041').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('ikvd4').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('ieulg').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createDeliverable' ;}};document.getElementById('i63k3').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('inokz').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('izpik').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('icz5f').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewDeliverables' ;}};
 const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        return base64;
      };const convertBase64 = (file) => {
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
            let imageBase64 = await uploadImage(e);
        document.getElementById('formFile').setAttribute('data-image-base64' ,imageBase64);
        document.getElementById('formFile').setAttribute('name',e.target.files[0].name)
        });
document.addEventListener('aligneProject', function(e) {
  const advanceSelect = document.getElementById('i7ttv');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});const arrayi7iaf = [];
document.getElementById("i5zsp").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("i1k2c")
  arrayi7iaf.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
    let e=``;
   for (let y=0; y<arrayi7iaf.length; y++)
   {
     e += `<li arrayvalue='${arrayi7iaf[y].value}'>${arrayi7iaf[y].liValue}</li>`;
   }
   document.getElementById("itv8a").innerHTML = e;
};document.addEventListener('aligneProject', function(e) {
  const advanceSelect = document.getElementById('i1k2c');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i1wf6').onclick = (event) => {
    event.preventDefault();
    employee['eName'] = document.querySelector("[annotationname = 'eName']").value;employee['eSurname'] = document.querySelector("[annotationname = 'eSurname']").value;employee['eImage'] = {
        data: document.querySelector("[annotationname = 'eImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'eImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'eImage']").src,
        name: document.querySelector("[annotationname = 'eImage']").getAttribute("name")
      };
      employee["eProject"] = [...document.querySelector("[annotationname = 'eProject']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiEmployeeApi.createemployee( employee, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/homePage/'+response.body.query._id+'' ;}}});};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i3ffa").querySelectorAll( "[dataitem='true']" )].filter(
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
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pTitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].pTitle;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pTitle'){
        subDataElements[i].textContent = data[data.length -i -1].pTitle;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("aligneProject"))
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};