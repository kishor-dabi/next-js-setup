import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Form, Field } from 'react-final-form'
const inter = Inter({ subsets: ['latin'] })
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, login } from "../../store/actions/authActions";
import { useEffect } from 'react'
import { AppDispatch } from '@/store/store'
import { composeValidators, emailFieldValidation, minValue, mustBeNumber, Required } from '@/validations';
import { RenderTextField } from '@/component/input';
import { useRouter } from 'next/router';

export default function Login(props: any) {
    // console.log(props)
    const router = useRouter();

    const dispatch = useDispatch<AppDispatch>();
    const authData = useSelector((state: any) => state.authData);
    const { data, userData } = authData;
    // console.log({ data })
    useEffect(() => {
        dispatch(getAuthData());
    }, [dispatch]);

    useEffect(() => {
        console.log(props);
        if (userData?.accessToken) {
            console.log("navigate from login");
            //   navigate("/home")
            router.push('/');

        }
    }, [props, userData?.accessToken, router])


    const onSubmit = (data: { usernameOrEmail: string, password: string }) => {
        console.log(data);
        dispatch(login(data))
    }


    return (
        <>

            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='container col-4 mt-5 login-form' >
                            <div className='mb-2 border-bottom text-center font-monospace'> <h4>Please login to continue...</h4> </div>
                            <div className="mb-4">
                                <Field
                                    name="usernameOrEmail" validate={composeValidators(emailFieldValidation, Required)}
                                    component={RenderTextField} id="email"
                                    label="Email"
                                    type="text"
                                />
                            </div>
                            <div >
                                <Field
                                    name="password" validate={Required}
                                    component={RenderTextField}
                                    label="Password"
                                    type="password"
                                />
                            </div>
                            <div className='mt-4 text-center '>
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>

                                <button onClick={() => form.reset} className="btn btn-primary ms-5"> reset
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            />

            {/* {data}
            <h1>Login page here</h1>
            {props.assets?.map((data:any,i:any)=>{
         return (
                <li key={i}>
                    
                    <Image width={24} height={24} src={data.tabIconSelected} alt=""></Image> {data.tabId}
                </li>
        )
    })} */}
        </>
    )
}

// export const getServerSideProps = async () => {
//     const res = await fetch('https://api.vootkids.com/app/ui/v4/tabs.json?os=android&deviceType=phone');
//     const repo = await res.json();
//     return { props: repo };
//   };