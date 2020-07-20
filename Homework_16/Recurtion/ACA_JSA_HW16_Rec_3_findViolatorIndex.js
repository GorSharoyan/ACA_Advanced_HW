function findViolatorIndex(arr,index=0){
    const [first,...rest]=arr;
    index++;
 if(first>rest[0]){
     return index
 } 
 if(arr.length===0){
   return -1
 }
 return findViolatorIndex(rest,index)  
}
