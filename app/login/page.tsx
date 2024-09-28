'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const LoginPage = () => {
  const [formState, action] = useFormState(actions.signIn, { errors: {} });
  return (
    <form action={action}>
      <div>
        <h1 className="text-3xl font-bold text-blue-200">Login</h1>
      </div>
      <div className="flex flex-col gap-4 p-4 w-80">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Name" />
        <span>{formState.errors.email?.join(', ')}</span>

        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" placeholder="Name" />
        <span>{formState.errors.password?.join(', ')}</span>

        {formState.errors._form ? (
          <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(', ')}</div>
        ) : null}

        <Button variant="outline" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
