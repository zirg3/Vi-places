// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {IPlace} from "../../../app/types/place";



// export const index: IPlace[] = [
//   {
//     _id: 'awdwad31',
//     slug: 'tokyo',
//     location: {
//       city: 'Киото',
//       country: {
//         rus: 'Япония',
//         eng: 'Japan'
//       }
//     },
//     imagePath: 'http://localhost:3000/images/places/japan.jpg',
//     description: 'awda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd',
//     rating: 5,
//     duration: '10 days',
//     distance: 11534,
//   },
//   {
//     _id: 'aw13dwad31',
//     slug: 'venezia',
//     location: {
//       city: 'Венеция',
//       country: {
//         rus: 'Италия',
//         eng: 'Italy'
//       }
//     },
//     imagePath: 'http://localhost:3000/images/places/italy.jpg',
//     description: 'awda awdad awd',
//     rating: 7,
//     duration: '6 days',
//     distance: 7534,
//   },
//   {
//     _id: 'awdadawdwad31',
//     slug: 'venezias',
//     location: {
//       city: 'Венеция',
//       country: {
//         rus: 'Италия',
//         eng: 'Italy'
//       }
//     },
//     imagePath: 'http://localhost:3000/images/places/italy.jpg',
//     description: 'awda awdad awd',
//     rating: 7,
//     duration: '6 days',
//     distance: 7534,
//   },
//   {
//     _id: 'awdwf4214ad31',
//     slug: 'france',
//     location: {
//       city: 'Париж',
//       country: {
//         rus: 'Франция',
//         eng: 'France'
//       }
//     },
//     imagePath: 'http://localhost:3000/images/places/usa.jpg',
//     description: 'awda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd awda awdad awd awda awdad awd awda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awdawda awdad awd',
//     rating: 3,
//     duration: '12 days',
//     distance: 51534,
//   },
// ]
//
//
// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//   res.status(200).json(index)
// }
