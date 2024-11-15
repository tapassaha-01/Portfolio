// import {images} from "../../../assets/images/content.png"

export interface tableData{
    patient:string;
    date:string;
    status:string;
    image:string //if you are taking image is binary then use blob
    doctor:string;
}

export const data:tableData[]=[
    {
      patient:"abcd",
      date:'11-12-2024',
      status:'sceduled',
      image:'/assets/images/Logo.png',
      doctor:'cfsdgscs'
    },
    {
        patient:"abcd",
        date:'11-12-2024',
        status:'sceduled',
        image:'../../../assets/images/images',
        doctor:'cfsdgscs'
      }
      ,{
        patient:"abcd",
        date:'11-12-2024',
        status:'sceduled',
        image:'../../../assets/images/images',
        doctor:'cfsdgscs'
      }
      ,
      {
        patient:"abcd",
        date:'11-12-2024',
        status:'sceduled',
        image:'../../../assets/images/images',
        doctor:'cfsdgscs'
      },
      {
        patient:"abcd",
        date:'11-12-2024',
        status:'sceduled',
        image:'../../../assets/images/images',
        doctor:'cfsdgscs'
      }
]