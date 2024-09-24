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
console.log(family.familysite[1].atext, family.familysite[1].href)

const mytag = `<a href="${family.familysite[1].href}">${family.familysite[1].atext}</a>`;

console.log(mytag);

//셀렉트형 네비게이션 DB 분리하고 접근하기/ ECMA 6기법
