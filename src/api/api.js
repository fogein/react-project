import axios from 'axios'
export async function getBeers (data,page){
let main_url= `https://api.punkapi.com/v2/beers?beer_name=${data}&page=${1}&per_page=9`
if (data === '') {
  main_url=`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
}
  let response = await axios.get(main_url);

  return response.data;
}


