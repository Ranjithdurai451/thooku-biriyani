'use client';
import { useForm } from 'react-hook-form';

import { useState } from 'react';

// import { setUser } from '@/store/slices/authSlice';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { findUser, signUp } from '../../../../backend/Actions/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/Store/store';
import { setUserInfo } from '@/Store/Slices/userSlice';

const signupSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  username: z
    .string()
    .nonempty({ message: 'Username is required' })
    .min(3, { message: 'Username must be at least 3 characters' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' }),
});

type signUpSchemaType = z.infer<typeof signupSchema>;

const SignUp = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<signUpSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });
  async function submitHandler(data: signUpSchemaType) {
    setIsPending(true);

    const userExists = await findUser({
      email: data.email,
    });

    if (userExists) {
      setErrorMsg('User already exists');
      setIsPending(false);
      return;
    }
    const signupAction = await signUp({
      email: data.email,
      username: data.username,
      password: data.password,
    });
    if (signupAction?.message) {
      setIsPending(false);
      reset();
      setErrorMsg(signupAction?.message);
      setTimeout(() => {
        setErrorMsg('');
      }, 5000);
      return;
    }
    if (signupAction) {
      const userInfo = await findUser({ email: data.email });
      dispatch(
        setUserInfo({
          id: userInfo?._id,
          username: userInfo?.username,
          email: userInfo?.email,
          profileImg: userInfo?.profileImg,
        })
      );
      router.push('/');
      setIsPending(false);
    }
  }

  return (
    <Card className="mx-auto sm:w-[340px]  w-[95dvw] max-w-[340px] border-opacity-15">
      <form onSubmit={handleSubmit(submitHandler)}>
        <CardHeader>
          <CardTitle className="text-2xl text-customGreen ">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <div className="grid gap-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="vimal"
                {...register('username')}
              />
              {errors.username && (
                <p className="text-xs text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
            <Button
              type="submit"
              className="w-full disabled:cursor-not-allowed disabled:opacity-45 bg-customGreen text-white hover:bg-green-700 duration-200 mt-2"
              disabled={isPending}
            >
              {isPending ? 'Signing up...' : 'Sign Up'}
            </Button>
          </div>
          <div className="mt-4 text-sm text-center">
            Already have an account?{' '}
            <Link href="/auth/login" className="underline text-customGreen">
              Sign in
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default SignUp;
