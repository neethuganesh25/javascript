arr=[10,11,12,3,2,4,5,1]
//1) sort thegiven array in ascending order
count=0
search=1
issearch=false
low=0
up=arr.length-1
arr.sort((a,b)=> a-b)
console.log(arr);
while(low<=up){
  mid=Math.floor((low+up)/2)
if(search==arr[mid] ){
  count++
  issearch=true
  break
  
}
else if(arr[mid]>search){
  up=mid-1
    
}
else {
    low=mid+1
}
}
console.log(count);
console.log(issearch?`${search} is present`:`${search} is not  present`);