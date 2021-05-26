import arrayData from './result.js';
import toChangeData from './data.js';
let container = document.getElementById('container')

let finalData = [];
for(let i = 0; i < toChangeData.length; i++){
    let tempObj = toChangeData[i];
    if(Object.keys(tempObj).length == 1 && Object.keys(tempObj)[0] == 'group'){
        let tempGroup = tempObj.group;
        let finalGroup = [];
        for(let j = 0; j < tempGroup.length; j++){
            let tempObj = tempGroup[j];
            finalGroup.push({})
            for(let k = 0; k < Object.keys(tempObj).length; k++){
                let valueObj = {};
                if(Object.keys(tempObj)[k] == 'price'){
                    let tempArray = tempObj.price;
                    if(tempArray.length == 0){
                        finalGroup[j].price = tempArray;
                    }else{
                        tempArray[0].text = tempArray[0].text.replace(/[a-zа-яё$]/gi, '');
                        finalGroup[j].price = tempArray;
                    }
                    
                }
                if(Object.keys(tempObj)[k] == 'productUrl'){
                    let tempArray = tempObj.productUrl;
                    tempArray[0].text = 'https://www.metro.ca'+tempArray[0].text
                    finalGroup[j].productUrl = tempArray;
                    
                }
                if(Object.keys(tempObj)[k] == 'rank'){
                    let tempArray = tempObj.rank;
                    tempArray[0].text = +tempArray[0].text 
                    finalGroup[j].rank = tempArray;
                }
                if(Object.keys(tempObj).includes('id')==false){
                   let tempArray = [{}]
                   tempArray[0].text = createId('067000', 5)
                   finalGroup[j].id = tempArray;
                }
                
            }
           
            
        }

        finalData.push({});
        finalData[i].group = finalGroup;
    }
}
console.log(finalData)

function createId(template, index){
    
    for(let i = 0; i < index; i++){
        template += Math.round(Math.random() * 10 + 1);
    }
    return template;
}





    for(let i = 0; i < finalData.length; i++){
        let tempObj = finalData[i];
        for(let key in tempObj){
            let title = document.createElement('h3');
            title.innerHTML = `${key} ${i+1} `;
            document.querySelector('#container').appendChild(title);
            let group = tempObj.group;
            for(let i = 0; i < group.length; i++){
                let ol = document.createElement('ol');   
                document.querySelector('#container').appendChild(ol);
                let tempObj = group[i];
                for(let key in tempObj){
                    //console.log(key)
                    if(tempObj[key].length == 0 ){
                        let li = document.createElement('li')
                        li.textContent = `${key}: Empty`;
                        ol.appendChild(li);
                    }
                    let tempArray = tempObj[key]
                    for (let i = 0; i < tempArray.length; i++) {
                        let tempObj = tempArray[i]
                        for(let keyn in tempObj){
                            if (key =='productUrl') {
                                let li = document.createElement('li')
                                li.innerHTML = `${key}:<a href="${tempObj[keyn]}"> Link</a>`
                                ol.appendChild(li);
                            } else{
                                if(tempObj[keyn] == ''){
                                    let li = document.createElement('li')
                                    li.textContent = `${key}: Empty`;
                                    ol.appendChild(li);
                                }else{
                                    let li = document.createElement('li')
                                    li.textContent = `${key}: ${tempObj[keyn]}`;
                                    ol.appendChild(li);
                                    //console.log(`${key.toUpperCase()} ${tempObj[keyn]}`)
                                }
                            }
                        }
                       //console.log('-----------------------------')
                    }
                    
                }
                //console.log('-----------------------------')
            }
        }

}
