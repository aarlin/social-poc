import type { NextPage } from 'next';
import { faker } from '@faker-js/faker';
import Item, { ItemProps } from '../../components/item';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps(context: any): Promise<void> {
  // Fetch necessary data for the blog post using params.id
  console.log(context);
}

const Dashboard: NextPage = () => {
  const [itemData, setItemData] = useState<ItemProps[]>([]);
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const userName: string = user?.displayName ?? '';
  const photoImage = user?.photoURL ?? '';

  // Generate some fake items.
  useEffect(() => {
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push('/');
    return <div>Please sign in to continue</div>;
  }

  return (
    <div>
      <div className="text-left mb-6 text-sm bg-sky-100 p-3">

      </div>
      
    </div>
  );
};

export default Dashboard;
