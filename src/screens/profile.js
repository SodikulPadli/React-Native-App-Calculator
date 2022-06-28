import { useEffect, useState } from 'react';
import { Box, Image, Pressable, Text, VStack, View } from 'native-base';
import kontenbase from '../config/api';

export default function Profile({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const data = await kontenbase.service('User').find();
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
      setItems(data.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(JSON.stringify(items, null, 2));
  return (
    <Box bg="danger.200" flex={1} alignItems="center" justifyContent="center" p={5}>
      {items.map((item) => (
        <VStack key={item._id}>
          <Image size={200} resizeMode={'contain'} p={3} borderRadius={450} source={item.profile[0].url} alt="Alternate Text" />
          <View marginTop={5}>
            <Text fontSize={20} textAlign="center" color="black">
              {item.name}
            </Text>
            <Text fontSize={20} textAlign="center" color="black">
              <i>{item.skill}</i>
            </Text>
          </View>
        </VStack>
      ))}
      <Pressable
        onPress={() => navigation.navigate('Todos')}
        style={{
          backgroundColor: '#f9f9f9',
          margin: 20,
          borderRadius: 10,
          width: '90%',
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text color={{ color: 'gray' }} fontSize={20}>
          Todo App
        </Text>
      </Pressable>
    </Box>
  );
}
