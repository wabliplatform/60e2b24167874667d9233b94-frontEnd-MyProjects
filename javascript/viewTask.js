let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('if28b').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ipazs').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ip0lr').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i1hvi').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i8xqk').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('iyhvh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i66eh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('isjdt').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('iwq7u').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ihfax').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ihz33').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ihz33")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('iufax').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTask/','');
      if(taskId === '/viewTask' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iufax")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/' ;}}});};document.getElementById('izi4y').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("izi4y")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('iga5c').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iga5c")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('infuw').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("infuw")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('i2rmi').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i2rmi")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('i6jx7').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i6jx7")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};window.onload = () => {let taskId = window.location.pathname.replace('/viewTask/','');apiTaskApi.gettask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = tName]').textContent = response.body.query.tName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tStart]').textContent = response.body.query.tStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tEnd]').textContent = response.body.query.tEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tPMs]').textContent = response.body.query.tPMs; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tDescription]').textContent = response.body.query.tDescription; } catch (e) { console.log(e) };}});apiTaskApi.getAlltask((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iuo4o").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'tName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].tName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'tName'){
        subDataElements[i].textContent = data[data.length -i -1].tName;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};