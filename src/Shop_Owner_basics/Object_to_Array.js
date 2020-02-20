import React from 'react'
import { fire } from '../config/fire'

const Object_to_Array = (tblname) => {
    const data = firebase.database().ref("/"+tblname);
    var obj = data
var result = Object.keys(obj).map(function(key) {
  return [obj[key]];
});

return result;

}

export default Object_to_Array;