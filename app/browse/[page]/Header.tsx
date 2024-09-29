import { Button } from '@/components/ui/button';
import React from 'react';
import SearchInput from './SearchInput';
import * as actions from '@/actions';
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

const Header = ({ page, searchTerm }: { page: string; searchTerm: string }) => {
  return (
    <div className="flex justify-between p-2">
      <Link href="/browse/1">
        <HomeIcon />
      </Link>
      <div className="flex flex-col items-center">
        <SearchInput searchTerm={searchTerm} />
        <div className={`pt-2 space-x-2 ${searchTerm ? 'hidden' : 'block'}`}>
          <Button variant="outline" asChild>
            <Link href={`/browse/${Number(page) - 1}`}>Prev</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/browse/${Number(page) + 1}`}>Next</Link>
          </Button>
        </div>
      </div>

      <form action={actions.signOut}>
        <Button variant="ghost" type="submit">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default Header;
