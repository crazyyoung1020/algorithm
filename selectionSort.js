
/**
 * @description 选择排序
 * @param {String} arrStr  输入数组字符串
 * @return {String} 返回一个排序好的数组字符串
 */

function selectionSort(arrStr){
    let arr = arrStr.split(',').map(Number)
    let minIndex
    for(let i=0;i<arr.length;i++){
        minIndex = i;
        for(let j= i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j  // 如果比最小项还小，就存下它的索引，也可以去存下最小的值，都一样
            }
        }
        if(minIndex !== i){
            [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]] // 当最小值是不循环起始值时，就交换一下起始值和最小值
        }
    }
    return arr.join(',')
}



document.getElementById('button').onclick= ()=>{
    let inputVal = document.getElementById('inputVal').value
    let result = selectionSort(inputVal)
    document.getElementById('resultDiv').innerText = result
}