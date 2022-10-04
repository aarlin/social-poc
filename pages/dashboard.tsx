import type { NextPage } from "next";
import { faker } from "@faker-js/faker";
import Item, { ItemProps } from "../components/item";
import { useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard: NextPage = () => {
  const [itemData, setItemData] = useState<ItemProps[]>([]);
  const userName: string = "Blah";
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  // Generate some fake items.
  useEffect(() => {
    const items: ItemProps[] = [];
    for (let i = 0; i < 3; i++) {
      items.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        seller: faker.name.findName(),
      });
    }
    setItemData(items);
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    router.push('/');
    return <div>Please sign in to continue</div>
  }

  const itemElements = [];
  for (let i = 0; i < itemData.length; i++) {
    const item = <Item key={i} {...itemData[i]} />;
    itemElements.push(item);
  }

  return (
    <div>
      <div className="text-left mb-6 text-sm bg-sky-100 p-3">
        <div className="mb-1 text-blue-500">Signed in as: {userName}</div>
        <button onClick={() => auth.signOut()} className="hover:underline ">
          Sign Out
        </button>
      </div>
      <div className="text-center flex flex-col gap-6 items-center">
        {itemElements}
      </div>
      <div className="mt-8 w-full flex">
        <button className="text-center bg-blue-600 text-white rounded-md p-2 w-48">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
