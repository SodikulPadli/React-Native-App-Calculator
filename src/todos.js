import React, { useState, useEffect } from 'react';
import { Text, Box, Input, Button, View, HStack, IconButton, Icon, Checkbox } from 'native-base';
import kontenbase from './config/config';
import { Entypo, Feather } from '@expo/vector-icons';

export default function MyList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const getData = async () => {
    const data = await kontenbase.service('TodoApp').find();
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
      setItems(data.data);
    }
  };
  console.log(items);
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    const data = await kontenbase.service('TodoApp').create({ name: value, checked: false });
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
      getData();
    }
  };

  const handleDelete = async (item) => {
    const data = await kontenbase.service('TodoApp').deleteById(item._id);
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
      getData();
    }
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleStatusChange = async (item) => {
    const data = await kontenbase.service('TodoApp').updateById(item._id, {
      checked: true,
    });
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
      getData();
    }
  };

  return (
    <Box bg="danger.200" flex={1} p={5} alignItems="center">
      <Text fontSize={30} color="black" marginBottom={5}>
        App Todo With Kontenbase
      </Text>
      <HStack space={2}>
        <Input color={'black'} placeholder="Add Schedule" fontSize={20} value={value} onChange={handleChangeValue} />
        <IconButton
          borderRadius="sm"
          variant="solid"
          icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />}
          onPress={() => {
            handleSubmit(value);
            setValue('');
          }}
        />
      </HStack>

      {items.map((item) => (
        <HStack space={2} key={item._id} p={2} marginTop={2}>
          <Text fontSize={20} color={'black'} m="auto">
            {item.name}
          </Text>
          <Checkbox isChecked={item.checked} onChange={() => handleStatusChange(item)} value={item.checked} m="auto">
            <Text
              strikeThrough={item.isChecked}
              _light={{
                color: item.isChecked ? 'gray.400' : 'coolGray.800',
              }}
              _dark={{
                color: item.isChecked ? 'gray.400' : 'coolGray.50',
              }}
            >
              {item.checked}
            </Text>
          </Checkbox>
          <IconButton
            size="sm"
            m="auto"
            colorScheme="danger"
            icon={<Icon as={Entypo} name="minus" size="lg" color="danger.400" />}
            onPress={() => {
              handleDelete(item);
            }}
          />
        </HStack>
      ))}
    </Box>
  );
}
