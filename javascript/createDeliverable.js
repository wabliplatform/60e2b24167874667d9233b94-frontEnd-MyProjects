let apiDeliverableApi = new TempApi.DeliverableApi();import TempApi from '../src/index';let deliverable = new TempApi.Deliverable();document.getElementById('iskq').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('i62kh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('ibwdb').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('ijl2k').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('ic0w6').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('ihrbj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('imrfm').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('itfu6').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewDeliverables' ;}};$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('iwh0h').onclick = (event) => {
    event.preventDefault();
    deliverable['dName'] = document.querySelector("[annotationname = 'dName']").value;deliverable['dStatus'] = document.querySelector("[annotationname = 'dStatus']").value;deliverable['dDate'] = document.querySelector("[annotationname = 'dDate']").value;apiDeliverableApi.createdeliverable( deliverable, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/homePage/'+response.body.query._id+'' ;}}});};window.onload = () => {};