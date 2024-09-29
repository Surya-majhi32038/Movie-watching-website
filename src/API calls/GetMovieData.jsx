export const getMovieDetails = async({params})=>{
    const id = params.movieId;
    // console.log(id);
    const url = `http://www.omdbapi.com/?i=${id}&apikey=b77816cb`;
    try {
        const respose = await fetch(url);
        const result = await respose.json();
        return result;
    } catch (error) {
        console.log("Error fetching Movies Data :",error);
    }
    
}