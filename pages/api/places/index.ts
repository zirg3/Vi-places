// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {IPlace} from "../../../app/types/place";



export const index: IPlace[] = [
  {
    slug: 'tokyo',
    location: {
      city: 'Киото',
      country: 'Япония'
    },
    imagePath: 'http://localhost:3000/images/places/japan.jpg',
    description: 'awda awdad awd',
    rating: 5,
    duration: '10 days',
    distance: 11534,
    googleMapLink: 'awdaw',
    mapImage: 'awdawd'
  },{
    slug: 'venezia',
    location: {
      city: 'Венеция',
      country: 'Италия'
    },
    imagePath: 'http://localhost:3000/images/places/italy.jpg',
    description: 'awda awdad awd',
    rating: 7,
    duration: '6 days',
    distance: 7534,
    googleMapLink: 'awdaw',
    mapImage: 'awdawd'
  },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  res.status(200).json(index)
}
