export const exerciseOptions = {

  method: 'GET',
  params: {limit: '1000'},
  headers: {
    'X-RapidAPI-Key': 'bdff66d5bfmsha6b120b80df685dp19edd1jsnd5e8f666557b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }

}





export const fetchData = async(url,options) =>
{
    const response = await fetch(url,options);
    const data = await response.json()

    return data

}