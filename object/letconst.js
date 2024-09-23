const family = {
  d1text : "패밀리사이트", 
  familysite : [
    "네이버","구글","다음","유튜브","끼야우"
  ] 
}

// console.log(family.familysite[0])

for(let x in family.familysite){
  //index  familysite의 자리 0,1,2,3,4
  console.log(x)
}

for(let x of family.familysite){
  //value familtsite의 값 "네이버","구글","다음","유튜브","끼야우"
  console.log(x)
}