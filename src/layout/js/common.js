window.addEventListener('load', function(){
  //햄버거버튼
  const allMenubtn = this.document.querySelector("#hd_allmenu_bby");
  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen')
  })
  this.window.addEventListener("scroll", scrollTpos);
  function scrollTpos(){
    console.log("Scroll position", this.scrollTop || window.scrollY, 
      window.innerHeight, typeof window.innerHeight);
    const pagetop = this.scrollTop || scrollY; //웹표준
    const targetscrolleffect = window.innerHeight / 3; //화면의 절반
    if(pagetop > targetscrolleffect ){
      //0 대신에 50vh 로 하고싶음
      document.body.classList.add('scrolldown')
    }else{
      document.body.classList.remove('scrolldown')
    }

  }

});