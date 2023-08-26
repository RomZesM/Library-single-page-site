"strict mode"

export function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
	console.log("---------------- " + _x + " " + _y);
    return { top: _y, left: _x };
}

export function changeCSSproperty(element, prop, value){
	const stylesheet = document.styleSheets[2];
let elementRules;

// looping through all its rules and getting your rule
for(let i = 0; i < stylesheet.cssRules.length; i++) {
  if(stylesheet.cssRules[i].selectorText === `${element}`) {
    elementRules = stylesheet.cssRules[i];
  }
}
// modifying the rule in the stylesheet
elementRules.style.setProperty(`${prop}`, `${value}`);
}