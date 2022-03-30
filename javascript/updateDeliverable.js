let apiDeliverableApi = new TempApi.DeliverableApi();import TempApi from '../src/index';document.getElementById('iskq').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('i62kh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('ibwdb').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('ijl2k').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('i56lm').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createDeliverable' ;}};document.getElementById('ic0w6').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('ihrbj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('imrfm').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('islj3').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewDeliverables' ;}};$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('iwh0h').onclick = (event) => {
    event.preventDefault();
    let deliverableId = window.location.pathname.replace('/updateDeliverable/','');let deliverable = new TempApi.Deliverable();deliverable['dName'] = document.querySelector("[annotationname = 'dName']").value;deliverable['dStatus'] = document.querySelector("[annotationname = 'dStatus']").value;deliverable['dDate'] = document.querySelector("[annotationname = 'dDate']").value; let opts = {deliverable};apiDeliverableApi.updatedeliverable( deliverableId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = dName]').value = response.body.query.dName ;document.querySelector('[annotationname = dStatus]').value = response.body.query.dStatus ;document.querySelector('[annotationname = dDate]').value = response.body.query.dDate ;{  location.href= '/homePage/'+response.body.query._id+'' ;}}});};window.onload = () => {let deliverableId = window.location.pathname.replace('/updateDeliverable/','');apiDeliverableApi.getdeliverable( deliverableId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = dName]').value = response.body.query.dName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = dDate]').value = response.body.query.dDate; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = dStatus]').value = response.body.query.dStatus; } catch (e) { console.log(e) };}});};