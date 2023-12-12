
import React from 'react'


const Calc = () => {


function myAdd(a,b){
    let sum=a+b;
    return sum;
}
function mySub(a,b){
    let sub=a-b;
    return sub;
}
function myMul(a,b){
    let mul=a*b;
    return mul;
}
function myDiv(a,b){
    let div=a/b;
    div=div.toFixed(2);
    return div;
}
  return (
    <>
  <ul>
    <li>The sum of two number is {myAdd(40,4)}</li>
    <li>The sum of two number is {mySub(40,4)}</li>
    <li>The sum of two number is {myMul(40,4)}</li>
    <li>The sum of two number is {myDiv(40,3)}</li>
  </ul>

    </>
  );
}

export default Calc


