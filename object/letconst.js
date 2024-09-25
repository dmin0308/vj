const family = {
  d1text: "Realativesite",
  familysite: [
    {
      atext: "git",
      href: "https://github.com/dmin0308",
    },
    {
      atext: "설화수",
      href: "https://dmin-project-test.notion.site/ccba52a8ff4542aa9e39856a6cd22c72?v=d4da144b490c4cf5b953f01020014903&pvs=4",
    },
    {
      atext: "피그마",
      href: "https://www.figma.com/design/Aw7jOFG239btKXJsnBIFYx/project_sulwhasoo?node-id=0-1&t=wiU0mNpZG4hRJEWf-1",
    },
  ],
};

// window.onload = function(){
//   //화면로딩이 완료시 처리

// }
// window.addEventListener('load', function(){
//   document.body.innerHTML += family.d1text;
//   //특정 태그안에 태그를 삽입하기

// })

window.addEventListener('load', function(){
  document.querySelector("#family h2").innerHTML += family.d1text;
  //특정 태그안에 태그를 삽입하기

})

