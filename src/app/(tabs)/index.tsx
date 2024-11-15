import { Text, View } from 'react-native';

export default function Home() {

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
      <Text>Home</Text>
    </View>
  );
}
