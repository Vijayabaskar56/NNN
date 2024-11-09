import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { local_db } from '../../lib/db/index';
import { usersTable } from '../../lib/db/schema';
import migrations from '../../lib/drizzle/migrations';
export default function App() {
  const { success, error } = useMigrations(local_db, migrations);
  const [items, setItems] = useState<typeof usersTable.$inferSelect[] | null>(null);
  console.log(success, error);
  useEffect(() => {
    if (!success) return;

    (async () => {
      await db.delete(usersTable);

      await db.insert(usersTable).values([
        {
          name: 'John',
          age: 30,
          email: 'john@example.com',
        },
      ]);

      const users = await db.select().from(usersTable);
      setItems(users);
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
        <Text key={item.id}>{item.email}</Text>
      ))}
    </View>
  );
}
