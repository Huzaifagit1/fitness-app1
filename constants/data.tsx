import { ImageSourcePropType } from "react-native";


export type ImageSliderType ={
    title: string
    image: ImageSourcePropType
    description:string
};    
export const ImageSlider = [  
    {
        title: 'Chest game strong!',
        image: {uri :"https://t3.ftcdn.net/jpg/01/93/73/18/360_F_193731868_afOYcVHhGIsrKB6IaO0kkQRVIXU47nvY.jpg"},
        description: 'Big chest, big presence—press hard, grow harder!',
        path:'/chestexercise'
    },
    {
        title: 'Lats like wings!',
        image: {uri :"https://media.istockphoto.com/id/610576810/photo/athlete-muscular-fitness-male-model-pulling-up-on-horizontal-bar.jpg?s=612x612&w=0&k=20&c=k01ldxDTJQK88DwlBpp4T8tEB0XSBHdhcervDUvJvjU="},        

        description: 'A wide back demands hard pulls and relentless dedication!'
    },
    {
        title: 'No pain, just gains!',
        image: {uri :"https://hips.hearstapps.com/hmg-prod/images/young-man-training-on-a-leg-machine-in-the-gym-royalty-free-image-1704212901.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*"},
        description: 'Leg day separates the committed from the casual!'
    },
    {
        title: 'Curls for the girls!',
        image: {uri :"https://d3k81ch9hvuctc.cloudfront.net/company/NjgsMz/images/d73eb8c2-6b2b-4366-8d2f-5ff7c1d8a499.jpeg"},
        description: 'Curls don’t lie—bigger arms, bigger confidence, bigger game!'
    },
]     