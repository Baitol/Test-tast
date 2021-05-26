1) create js file where import transformed data from data.js
2) your function must return array like result.js
get data from data.js and transfrom this data like in result.js.
result.js fields type : price: NUMBER, productUrl:string, id:string, rank: NUMBER,
expected result
3) create HTML file and put tarnsformed data to DOM (ol> li)


let finalData = [];
for(let i = 0; i < toChangeData.length;i++){
    let tempObj = toChangeData[i];
    if (Object.keys(tempObj).length == 1 && Object.keys(tempObj)[0] == 'group') {
        let group = tempObj.group;
        finalData.push({'group':[]})
        let finalGroup = finalData.group;
        for(let j = 0; j < group.length; j++){
            let tempObj = group[j];
            let finalTempObj = finalGroup[j]
            for(let k = 0; k < Object.keys(tempObj).length; k++){
                if(Object.keys(tempObj)[k] == 'price'){
                   finalTempObj.price = []
                }
                if(Object.keys(tempObj)[k] == 'productUrl'){
                    finalTempObj.productUrl = []
                 }
                 if(Object.keys(tempObj)[k] == 'rank'){
                    finalTempObj.rank = []
                 }

            }
        }
    }
    
    //console.log('-----------------------------')
}
console.log(finalData)
