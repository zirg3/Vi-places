export const API_URL = 'http://localhost:3000/api'
export const SANITY_QUERIES = {
    getPlaces: `*[_type == 'place']`,
    getPlace: (slug: any) => `*[_type == 'place' && slug.current == "${slug}"][0]`
}