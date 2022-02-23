const array=[5,3,8,4,7];
let kth_value=4
let a=1;
for (i = array.length-1; i >= 0; i--){
    if(a==kth_value){
        console.log('result'+ " "+array[i]);
        break;
    }
    a++;
}