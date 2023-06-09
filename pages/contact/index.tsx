
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { AppDispatch } from '@/store/store'
import ContactLayout from "./layout";

export default function Contact(props: any) {
    // console.log(props)
    const dispatch = useDispatch<AppDispatch>();
    const authData = useSelector((state: any) => state.authData);
    const { data } = authData;
    // console.log({ data })
    


    
    return (
        <>
        <ContactLayout>

            contact page
        </ContactLayout>
        </>
    )
}