'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { joiResolver } from '@hookform/resolvers/joi';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { account } from '../../../../backend/config';
import { useRouter } from 'next/navigation';
import { findUser, login } from '../../../../backend/Actions/actions';
import { AppDispatch } from '@/Store/store';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '@/Store/Slices/userSlice';

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' }),
});
type loginSchemaType = z.infer<typeof loginSchema>;
const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });
  async function submitHandler(data: loginSchemaType) {
    setIsPending(true);
    const userExists = await findUser({
      email: data.email,
    });

    if (!userExists) {
      setErrorMsg('User does not exist');
      setIsPending(false);
      return;
    }

    const loginAction = await login({
      email: data.email,
      password: data.password,
    });
    // console.log(loginAction);
    const user = await account.get();
    console.log(user);
    if (loginAction?.message) {
      setErrorMsg(loginAction?.message);
      setTimeout(() => {
        setErrorMsg('');
      }, 3000);
      setIsPending(false);
      return;
    }
    if (loginAction) {
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
    } else {
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Card className="sm:w-[320px] w-[95dvw] max-w-[320px] border-opacity-15">
        <CardHeader>
          <CardTitle className="text-2xl text-customGreen ">Login</CardTitle>
          <CardDescription>
            Sign in with email address and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div className="grid gap-2">
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
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="inline-block ml-auto text-xs underline text-customGreen"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}
            <Button
              type="submit"
              className="w-full disabled:cursor-not-allowed disabled:opacity-45 bg-customGreen text-white hover:bg-green-700 duration-200"
              disabled={isPending}
            >
              {isPending ? 'Logging in...' : 'Login'}
            </Button>
          </div>
          <div className="mt-4 text-xs text-center">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="underline text-customGreen">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default Login;
