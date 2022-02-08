const SUPABASE_URL = 'https://rkpkbgcxtxmmqwaozrit.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrcGtiZ2N4dHhtbXF3YW96cml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NzksImV4cCI6MTk1OTkxNzQ3OX0.BlZaNNVLhHKpWOLgA-78IfDScamHmyZyr18toNO8npQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
    // return the list of all movies
    const resp = await client.from('movies').select('*');
    return checkError(resp);
}

export async function getMoviesWithDirector() {
    // return the list of all the movies with their director
    const resp = await client.from('movies').select('*, directors(*)');
    console.log(resp);
    return checkError(resp);
}

export async function getDirectorNames() {
    // return the list of the director's names
    const names = await client.from('directors').select('name');
    return checkError(names);
}

export async function getMovieById(id) {
    // return the movie with the given id
    const ID = await client.from('movies').select('*').eq('id', id).single();
    console.log(ID);
    return checkError(ID);
}

export async function getMovieByTitle(title) {
    // return the movie with the given title
    const Title = await client
        .from('movies')
        .select('*')
        .eq('title', title)
        .single();
    return checkError(Title);
}

export async function getOldestMovie() {
    // return the oldest movie (assume the database is not sorted)
    const oldest = await client
        .from('movies')
        .select('*')
        .order('year')
        .limit(1)
        .single();
    return checkError(oldest);
}

export async function getMoviesAfter(year) {
    // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
    // return movie with the highest box office total
}
