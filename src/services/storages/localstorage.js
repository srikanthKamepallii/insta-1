
//set local storage
export function setlocalstorageitem(key,value){
    if(typeof(value) == 'object'){
        value = JSON.stringify(value)
    }
    localStorage.setItem(key,value);
}

//getlocal storage
export function getlocalstorageitem(key){
    return localStorage.getItem(key);
}

//remove local storage
export function removelocalstorageitem(key){
    localStorage.removeItem(key)
}