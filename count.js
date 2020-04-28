function countBs(str1){
    let c=0
    for(let i=0; i<str1.length-1; i++){
        if (str1[i] === 'o'){
            c ++
        }
    }
    return c    
}  


w = countBs("popoyee The Sailor Man")
console.log(w)


 function  countChar(str1,char){
     let c = 0
     for(let j=0; j<str1.length-1;j++){
         if (str1[j] === char){
             c++
         }
     }
     return c
 }


 wor = countChar("rajnikanth",'a')
 console.log(wor)