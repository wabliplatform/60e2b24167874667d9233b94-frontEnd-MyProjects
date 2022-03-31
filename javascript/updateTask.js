let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('iskq').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i62kh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i5kjk').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ibwdb').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ijl2k').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ibkvq').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ic0w6').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('inq1b').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('iiv8u').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ik4gi').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('iwh0h').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/updateTask/','');let task = new TempApi.Task();task['tName'] = document.querySelector("[annotationname = 'tName']").value;task['tStart'] = document.querySelector("[annotationname = 'tStart']").value;task['tEnd'] = document.querySelector("[annotationname = 'tEnd']").value;task['tPMs'] = document.querySelector("[annotationname = 'tPMs']").value;task['tDescription'] = document.querySelector("[annotationname = 'tDescription']").value; let opts = {task};apiTaskApi.updatetask( taskId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = tName]').value = response.body.query.tName ;document.querySelector('[annotationname = tStart]').value = response.body.query.tStart ;document.querySelector('[annotationname = tEnd]').value = response.body.query.tEnd ;document.querySelector('[annotationname = tPMs]').value = response.body.query.tPMs ;document.querySelector('[annotationname = tDescription]').value = response.body.query.tDescription ;{  location.href= '//'+response.body.query._id+'' ;}}});};window.onload = () => {let taskId = window.location.pathname.replace('/updateTask/','');apiTaskApi.gettask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = tName]').value = response.body.query.tName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tStart]').value = response.body.query.tStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tEnd]').value = response.body.query.tEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tPMs]').value = response.body.query.tPMs; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tDescription]').value = response.body.query.tDescription; } catch (e) { console.log(e) };}});};