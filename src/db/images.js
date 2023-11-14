/*
    0. mobile
    1. dart-heme
    2. light-heme
    3. animation
    4. landing-page
*/

import { tags } from "./tags"
const bucket = 'src/db/buckets'

export const images = [
    {
        name: 'dog',
        path: `${bucket}/image_processing20200727-8706-nri4fx.png`,
        tags: [tags[2], tags[4]],
    },
    {
        name: 'arrival',
        path: `${bucket}/arrival.png`,
        tags: [tags[0], tags[1]],
    },
    {
        name: 'attachment',
        path: `${bucket}/attachment.jpg`,
        tags: [tags[4], tags[3]],
    },
    {
        name: 'game',
        path: `${bucket}/e1e7dfcbf6c43c14b71e857d4c81752d.png`,
        tags: [tags[1], tags[2]],
    },
]

