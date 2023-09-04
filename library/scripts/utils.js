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

  export function checkIfUserWasRegistered(key){
    
    for (let i = 0; i < localStorage.length; i++) {
       if(localStorage.key(i).split(',')[0] === key){
          return true;
      } 
      
    }
    return false;  
  }

  export function getUserKeyFromLocalStorage(login){
    
    for (let i = 0; i < localStorage.length; i++) {
       if(localStorage.key(i).includes(login)){
                return localStorage.key(i);
      }
    }
    return null;
  } 


  export function getSimpleValueFromLocalStorage(key){
     return localStorage.getItem(`${key}`)
  }

  export function getUserValueFromLocalStorage(login, value){
    // console.log('[['+login+']]');//!del
    // console.log('[['+value+']]');
    
    const user = JSON.parse(localStorage.getItem(`${login}`))
      let ret = user[`${value}`];
    //  console.log('['+ret+']');
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

 export function getUserFullName(userLogin){
    if(userLogin){
      return getUserValueFromLocalStorage(userLogin, 'firstName').concat(' ', getUserValueFromLocalStorage(userLogin, 'secondName'))
    }
 }

 export function getSingleDomElementByClass(elClass){
      return (document.querySelector(`.${elClass}`));
 }

export function setUserFieldInLocalstorage(login, key, val){ //change one field in userObject
  const user = JSON.parse(localStorage.getItem(`${login}`)); //get current user
  user[`${key}`] = val; //set new param

  localStorage.setItem(`${login}`, JSON.stringify(user));
}



export function increaseCounterInLocalStorage(login, counter, increment){
    let i = getUserValueFromLocalStorage(login, counter); //current value
    i = Number.parseInt(i) + increment;
    setUserFieldInLocalstorage(login, `${counter}`, i)
}

export function addBookIntoUserAccount(login, book){
  
    //check if user have this book
  if(!isBookInUserBookList(login, book)){
    const user = JSON.parse(localStorage.getItem(`${login}`));
    let booksList = user.booksList;
    booksList.push(book);
    user.booksList = booksList;
    localStorage.setItem(`${login}`, JSON.stringify(user));
  }
 

}

export function isBookInUserBookList(login, book){
    if(isSomeoneLogIn()){
      const user = JSON.parse(localStorage.getItem(`${login}`));
      let booksList = user.booksList;

      return (booksList.includes(book));
    }
    else
      return false;
   
}

// export function isUserWasRegistered(userToCheck){
//     let user = localStorage.key(userToCheck);
//     console.log("is user registered: " + userToCheck);
// }
