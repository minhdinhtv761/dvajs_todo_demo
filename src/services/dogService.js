import request from '../utils/request';

export function dogQuery() {
  let res = request('https://dog.ceo/api/breeds/image/random');
  console.log(`res: ` + res);
  
  return res;
}
