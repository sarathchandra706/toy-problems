function deepEqual(v1,v2){
    if (v1 === v2) return true;
    if (v1 == null || typeof v1!= 'object' || v2 == null || typeof v2 != 'object')
    return false;
    var c1 =0,c2 =0;
    for (var i in v1){
     c1 += 1;
    }
    for (var i in v2){
        c2 += 1;
    }
    if (!( i in v1) || !(deepEqual(v1[i],v2[i])))
      return false
}
    
    let a={
        name :"sunny",
        phn :9640361756,
        dist :"nlr",
        clg : "iiit"
    }

    let b={
        name :"sunny",
        phn :9640361756,
        dist :"nlr",
        clg : "iiit"
    }

  console.log(deepEqual(a,b))  