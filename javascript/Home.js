let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("ist9f").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectImage']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].ProjectImage;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'ProjectImage'){
          subDataElements[i].src = data[data.length -i -1].ProjectImage;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectTitle']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectTitle;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'ProjectTitle'){
          subDataElements[i].textContent = data[data.length -i -1].ProjectTitle;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectStart']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectStart;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'ProjectStart'){
          subDataElements[i].textContent = data[data.length -i -1].ProjectStart;
        }
       } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/viewproject/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};