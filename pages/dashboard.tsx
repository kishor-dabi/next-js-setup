import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Form, Field } from 'react-final-form'
const inter = Inter({ subsets: ['latin'] })
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, login } from "../store/actions/authActions";
import { useEffect } from 'react'
import { AppDispatch } from '@/store/store'
import { composeValidators, emailFieldValidation, minValue, mustBeNumber, Required } from '@/validations';
import { RenderTextField } from '@/component/input';

export default function Home(props: any) {
    // console.log(props)
    const dispatch = useDispatch<AppDispatch>();
    const authData = useSelector((state: any) => state.authData);
    const { data } = authData;
    // console.log({ data })
    useEffect(() => {
        dispatch(getAuthData());
    }, [dispatch]);

    const onSubmit = (data: {usernameOrEmail: string, password: string}) =>{
        console.log(data);
        dispatch(login(data))
    }

    
    return (
        <>
            Home page
        </>
    )
}

// export const getServerSideProps = async () => {
//     const res = await fetch('https://api.vootkids.com/app/ui/v4/tabs.json?os=android&deviceType=phone');
//     const repo = await res.json();
//     return { props: repo };
//   };