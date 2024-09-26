window.addEventListener("load", function () {
  //호출영역
  this.document.querySelector("#family h2").innerHTML = family.d1text;

  let familylist = "";

  // for(x in family.familysite){
  // familylist += `<li>${family.familysite[x].atext}</li>`;}

  for (x of family.familysite) {
    familylist += `<li>${x.atext}</li>`;
  }

  this.document.querySelector("#family ul").innerHTML = familylist;


  //family 노출
  this.document.querySelector("#family").addEventListener
  ('click', function(){
    this.classList.toggle('open')
  })

  
});



//함수 제작
