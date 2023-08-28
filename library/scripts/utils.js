"strict mode"

export function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
	//console.log("---------------- " + _x + " " + _y);
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

export function testForm(){
  const formL = document.querySelector('.')
}

export function checkIfKeyExistInLocalStorage(key){
  for (let i = 0; i < localStorage.length; i++) {
    if(key === localStorage.key(i)){
       return true;
    }
     
  }
  return false;  
  }

  export function getSimpleValueFromLocalStorage(key){
     return localStorage.getItem(`${key}`)
  }

  export function getUserValueFromLocalStorage(login, value){
      const user = JSON.parse(localStorage.getItem(`${login}`))
      let ret = user[`${value}`];
     // console.log('['+ret+']');
    return ret;
 }

 export function isSomeoneLogIn(){
  if(getSimpleValueFromLocalStorage('loggedInUser') != '')
    return true;
  else
    return false;
 }

 export function getCurrentUserLogin(){
  if(isSomeoneLogIn){
    const userLogin = getSimpleValueFromLocalStorage('loggedInUser');
       return userLogin
  }
  else 
     return 'unregistered user'
 }

