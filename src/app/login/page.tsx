'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import React from 'react';

const login = () => {
  return (
    <div className=" w-full h-dvh lg:grid lg:grid-cols-2 overflow-x-hidden">
      <div className="flex items-center justify-center h-full py-12 bg-black ">
        <form>
          <Card className="sm:w-[360px] mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter your number"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
      <div className="hidden bg-muted lg:block bg"></div>
    </div>
  );
};

export default login;
