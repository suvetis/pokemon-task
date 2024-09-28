import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import React from 'react';

const BrowsePage = async () => {
  const session = await auth();
  if (!session?.user) redirect('/login');

  return (
    <div className="p-4">
      <form
        action={async () => {
          'use server';
          await signOut({
            redirect: true,
            redirectTo: '/login',
          });
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default BrowsePage;
