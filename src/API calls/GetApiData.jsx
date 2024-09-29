export const getMoviesData = async(imdbID)=>{
    const id = imdbID;
    const url = `http://www.omdbapi.com/?s=${id}&apikey=b77816cb`
    try {
        const respose = await fetch(url);
        const result = await respose.json();
        return result;
    } catch (error) {
        console.log("Error fetching Movies Data :",error);
    }
}