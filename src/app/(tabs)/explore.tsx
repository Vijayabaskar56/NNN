import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { db } from '../../lib/db/index';
import { users } from '../../lib/db/schema';
import migrations from '../../lib/drizzle/migrations';
export default function Explore() {
  const { success, error } = useMigrations(db, migrations);
  const [items, setItems] = useState<typeof users.$inferSelect[] | null>(null);
  console.log(success, error);
  useEffect(() => {
    if (!success) return;

    (async () => {
      await db.delete(users);

      await db.insert(users).values([
        {
          fullName: 'John Doe',
          phone: '123-456-7890',
        },
      ]);

      const userss = await db.select().from(users);
      setItems(userss);
    })();
  }, [success]);

  if (error) {
    return (
      <View className='flex-1 bg-white'>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View className='flex-1 bg-white'>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  if (items === null || items.length === 0) {
    return (
      <View className='flex-1 bg-white'>
        <Text>Empty</Text>
      </View>
    );
  }

  return (
    <View
      className='flex-1 bg-white'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {items.map((item) => (
        <Text key={item.id}>{item.fullName}</Text>
      ))}
    </View>
  );
}
