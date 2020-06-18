const findContentChildren = (children, cookies) => {
  let count = 0;
  const numCookies = cookies.length;
   for(let index = 0; index < numCookies; index++) {
     // if all the cookies have been matched to children
     if(cookies.length === 0) break;
     // cycle through available cookies to see if one to satisfy child
     for (let index1 = 0; index1 < cookies.length; index1++) {
       // if there is a match remove cookie from possibilites
       // and increase the match count
       if (cookies[index1] >= children[index]) {
         count++;
         cookies.splice(index, 1);
         break;
       }
     }
   }
  return count;
}

const children = [1,2]; // cookie size preference for each child
const cookies = [1,2,3]; // size of each cookie
findContentChildren(children, cookies);