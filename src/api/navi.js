window.addEventListener("load", function () {
  let navitag = ""; // 값변경가능한 변수를 선언
  const navitarget = this.document.querySelector("#navi >ul");

  for (x of mynavi) {
    navitag += `<li class="position-relative">
                <a href="${x.title.link}" class="d-block px-lg-5">${x.title.text}</a>
                <div class="position-absolute">
                  <ul>`;
    for (i of x.subMenu) {
      navitag += `<li><a href="${i.link}" class="text-nowrap">${i.text}</a></li>`;
    }
    navitag += ` </ul>
                </div>
              </li>`;
  }
  navitarget.innerHTML = navitag;

  //호출영역
  this.document.querySelector("#family h2").innerHTML = family.d1text;

  let familylist = "";

  for (x of family.faimilysite) {
    familylist += `<li>${x.atext}</li>`;
  }
  this.document.querySelector("#family ul").innerHTML = familylist;

  //faq

  let faqtag = ""; // 값변경가능한 변수를 선언
  const faqtarget = this.document.querySelector("#faqcontent  .content");

  faqtag += `<dl class="container py-5">`;

  for (x of faqcontent) {
    faqtag += `<dt class="border-bottom py-3 d-flex justify-content-between">
    <span>${x.faqQ}</span> 
    <i class="bi bi-chevron-down"></i>
    </dt>
                   <dd class="py-4 d-none">`;
    const faqcontentArr = x.faqA.split("|");
    for (j of faqcontentArr) {
      faqtag += `<span class='d-block'> ${j} </span>`;
    }
    faqtag += `</dd>`;
  }

  faqtag += `</dl>`;
  faqtarget.innerHTML = faqtag;

  //패밀리노출
  this.document
    .querySelector("#family h2")
    .addEventListener("click", function () {
      this.parentNode.classList.toggle("open");
    });

  //동적객체 = 이벤트에 저장하는 식 불가
  const faqdts = document.querySelectorAll("#faqcontent  .content dt");
  //사전 인터뷰 dt들 저장

  faqdts.forEach((ele, idx) => {
    ele.addEventListener('click', function () {
      
      faqdts.forEach(function (sibling) {
       
        if (sibling == ele) {
          ele.classList.toggle("expand");
        } else {
          sibling.classList.remove("expand");
        }
      });
    });
  });
});
// 함수제작