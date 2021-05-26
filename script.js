import arrayData from './result.js';
import toChangeData from './data.js';
let container = document.getElementById('container')

let finalData = [];
for(let i = 0; i < toChangeData.length;i++){
    let tempObj = toChangeData[i];
    if (Object.keys(tempObj).length == 1 && Object.keys(tempObj)[0] == 'group') {
        let group = tempObj.group;
        finalData.push({'group':[{}]})
        for(let j = 0; j < group.length; j++){
            let tempObj = group[i];
            for(let k = 0; k < Object.keys(tempObj).length; k++){
                if(Object.keys(tempObj)[k] == 'price'){
                   finalData[i].group['price'] = [];
                }
                if(Object.keys(tempObj)[k] == 'productUrl'){
                    //finalData[i].group[k].p = [''];
                 }
                 if(Object.keys(tempObj)[k] == 'rank'){
                    finalData[i].group['rank'] = [];
                 }
            }
        }
    }
    
    console.log('-----------------------------')
}
console.log(finalData)








    for(let i = 0; i < arrayData.length; i++){
        let tempObj = arrayData[i];
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
