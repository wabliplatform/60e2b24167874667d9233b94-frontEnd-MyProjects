let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';let task = new TempApi.Task();document.getElementById('iskq').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('i62kh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('ibwdb').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('ijl2k').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('ihvyh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createDeliverable' ;}};document.getElementById('ic0w6').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('ihrbj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('imrfm').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('ifc7h').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewDeliverables' ;}};$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('iwh0h').onclick = (event) => {
    event.preventDefault();
    task['tName'] = document.querySelector("[annotationname = 'tName']").value;task['tStart'] = document.querySelector("[annotationname = 'tStart']").value;task['tEnd'] = document.querySelector("[annotationname = 'tEnd']").value;task['tPMs'] = document.querySelector("[annotationname = 'tPMs']").value;task['tDescription'] = document.querySelector("[annotationname = 'tDescription']").value;apiTaskApi.createtask( task, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/homePage/'+response.body.query._id+'' ;}}});};window.onload = () => {};