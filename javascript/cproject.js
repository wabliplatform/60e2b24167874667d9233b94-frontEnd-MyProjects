let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let apiProjectApi = new TempApi.ProjectApi();let project = new TempApi.Project();document.getElementById('icaj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/homePage' ;}};document.getElementById('ix1q7').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createTask' ;}};document.getElementById('i2lyj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createWorkpackage' ;}};document.getElementById('i4jic').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createEmployee' ;}};document.getElementById('ipanfc').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createDeliverable' ;}};document.getElementById('i35mv3').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewEmployees' ;}};document.getElementById('isu5yw').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewWorkpackages' ;}};document.getElementById('ilhnff').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewDeliverables' ;}};$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );let arrayio47ds = [];
document.getElementById("iehmy6").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("ioi4x2")
  arrayio47ds.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULizpu4r();
};

function refreshULizpu4r() {
let e=``;
for (let y=0; y<arrayio47ds.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayio47ds[y].value}'><p style="display: inline-block">${arrayio47ds[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("izpu4r").innerHTML = e;
}

document.getElementById("izpu4r").addEventListener("click", event => {
  event.preventDefault();
  arrayio47ds = arrayio47ds.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULizpu4r();
});
function initializearrayio47ds(data) {
  arrayio47ds = data.map(item => ({
    value: item._id,
    liValue: item['wName']
  }));
}
document.addEventListener('alignpWorkpackage', function(e) {
  const advanceSelect = document.getElementById('ioi4x2');
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
    project['pTitle'] = document.querySelector("[annotationname = 'pTitle']").value;project['pStart'] = document.querySelector("[annotationname = 'pStart']").value;project['pEnd'] = document.querySelector("[annotationname = 'pEnd']").value;project['pGA'] = document.querySelector("[annotationname = 'pGA']").value;project["pWorkpackage"] = [...document.querySelector("[annotationname = 'pWorkpackage']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/homePage' ;}}});};window.onload = () => {apiWorkpackageApi.getAllworkpackage((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i0eu5q").querySelectorAll( "[dataitem='true']" )].filter(
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