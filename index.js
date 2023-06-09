//  let str = "abcadeecfb";
//  const s = new Set() ;
//  for(let i=0;i<str.length;i++){
//     s.add(str[i]);
//  }
//  console.log(...s); 
let word = "abcadeecfb" ;
let map = new Map();
for(let i=0;i<word.length;i++){
    if(map.has(word[i])){
        map.set(word[i],Number(map.get(word[i]))+1);
    }
    else{
        map.set(word[i],1);
    }
}
// console.log(map);
for(const [key,value] of map){
    console.log(key + "=" + value);
}