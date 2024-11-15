import { Text, View } from 'react-native';

export default function Explore() {


  return (
    <View
      className='flex-1 bg-black'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Text className='text-white text-2xl'>Explore</Text>
    </View>
  );
}
