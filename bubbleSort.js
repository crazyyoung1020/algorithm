/**
 * @description 冒泡排序
 * @param {Array} arr  输入数组
 * @return {Array} 返回一个排序好的数组
 */

// 初次通过的代码
function bubbleSort(arr){
    // let temp
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                // temp = arr[j]
                // arr[j] = arr[i]
                // arr[i] = temp
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr
}

// 菜鸟教程给的示例省略 

document.getElementById('button').onclick= ()=>{
    let inputVal = document.getElementById('inputVal').value
    let result = bubbleSort(inputVal.split(',').map(Number))
    document.getElementById('resultDiv').innerText = result
}