export type TypeLocation = {
    city: string,
    country: {
        rus: string,
        eng: string
    }
}

export type TypeSlug = {
    _type: string,
    current: string
}


export interface IPlace {
    slug: TypeSlug
    location: TypeLocation
    imagePath: string
    description: string
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    duration: string
    distance: number
    _id: string
}

export interface IFav {
    slug: string
    name: string
}