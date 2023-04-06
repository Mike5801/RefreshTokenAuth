import { useState } from 'react'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import AuthLogo from "../../assets/auth.png"
import Input from '../../components/Input'
import Button from '../../components/Button'
import { SignIn, SignUp } from '../../interfaces/Auth'
import { useNavigate } from "react-router-dom"
import { useSignUpQuery, useSignInQuery } from '../../services/sessionQueryHooks'
import Checkbox from './Checkbox'
import { useAppSelector } from '../../hooks/reduxHooks'


interface FormInputs {
  user: string,
  email?: string,
  password: string,
  occupation?: string,
  birthDate?: Date,
  image?: FileList | undefined
}

type Props = {}

const LoginPage = (props: Props) => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true)
  const persist = useAppSelector((state) => state.auth.persist)
  const signUp = useSignUpQuery()
  const signIn = useSignInQuery()
  const navigate = useNavigate()
  const methods = useForm<FormInputs>()
  const reset = methods.reset

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    const { user, password, email, birthDate, occupation, image } = data
    const signInData: SignIn = {
      user,
      password,
    }
    const signUpData: SignUp = {
      user,
      password,
      email: email as string,
      birthDate: birthDate as Date,
      occupation: occupation as string,
      image
    }
    
    if (isSignIn) {
      try {
        await signIn(signInData)
        navigate("/home")
      } catch (err) {
        console.log(err)
      }
      
    } else {
      try {
        signUp(signUpData)
        navigate("/home")
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='flex flex-col h-[80%] w-[28rem] bg-slate-300 rounded-lg overflow-hidden shadow-lg'>
        <div className='flex justify-center items-center gap-1 bg-slate-50 h-16 border-b-2 border-b-slate-300'>
          <h1 className='text-lg font-semibold'>AuthApp</h1>
          <img className='w-9 h-9' src={ AuthLogo } alt="Logo" />
        </div>
        <FormProvider {...methods}>
          <form className='relative flex flex-col justify-center items-center gap-3 px-6 overflow-y-auto w-full h-full' onSubmit={methods.handleSubmit(onSubmit)}>
            {!isSignIn && <Input type='email' label='Email' placeholder='mike@test.com' name="email" required={true}/>}
            <Input type='text' label='Username' placeholder='Mike' name="user" required={true}/>
            <Input type='password' label='Password' placeholder='*****' name="password" required={true}/>
            {!isSignIn && <Input type='text' label='Occupation' placeholder='Software Engineer' name="occupation" required={false}/>}
            {!isSignIn && <Input type='date' label='Birth of Date' placeholder='' name="birthDate" required={false}/>}
            {!isSignIn && <Input type='file' label='Profile picture' placeholder='' name="image" required={false}/>}
            {isSignIn && <Checkbox label='Persist your login?' persist={ persist } name="persist"/>}
            <Button text={ isSignIn ? "Sign In" : "Sign Up" }/>
            <button 
              className={`${ isSignIn ? "bg-slate-800 text-white py-[0.1rem] pointer-events-none" : "bg-slate-50 hover:bg-slate-200" } transition-all duration-100 ease-in absolute top-0 right-1/2 text-sm rounded-bl-md rounded-br-md px-2`}
              onClick={ () => { 
                setIsSignIn(!isSignIn) 
                reset()
              }}
            >
              Sign In
            </button>
            <button 
              className={`${ !isSignIn ? "bg-slate-800 text-white py-[0.1rem] pointer-events-none" : "bg-slate-50 hover:bg-slate-200" } transition-all duration-100 ease-in absolute top-0 left-1/2 text-sm bg-slate-50 rounded-bl-md rounded-br-md px-2`}
              onClick={ () => { 
                setIsSignIn(!isSignIn)
                reset()
              }}
            >
              Sign Up
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default LoginPage