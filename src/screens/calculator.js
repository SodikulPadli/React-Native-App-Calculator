import React, { useState } from 'react';
import { Text, Box, Pressable, View } from 'native-base';

export default function Calculator() {
  // Init State
  const [counter, setCounter] = useState({
    hitung: 0,
  });

  //  Creat variabel Masukang Angka
  const masukanAngka = (value) => {
    if (counter.hitung == 0) {
      return setCounter({
        hitung: value,
      });
    } else {
      return setCounter({
        hitung: counter.hitung + '' + value,
      });
    }
  };

  // Creat Variabel Menghitung Hasil
  const menghitungHasil = () => {
    let hasil = eval(counter.hitung);
    return setCounter({ hitung: hasil });
  };

  const clearData = () => {
    return setCounter({
      hitung: 0,
    });
  };

  return (
    <Box bg="danger.300" flex={1} alignItems="center" justifyContent="center" p={10}>
      <View flex={1} marginTop={3}>
        <Text fontSize={20} color="black" textAlign={'center'}>
          App Calculator
        </Text>
      </View>

      <View flex={1} bg="danger.100" width={'100%'} margin={5} justifyContent="center">
        <Text fontSize={20} color="black" textAlign={'center'}>
          {counter.hitung}
        </Text>
      </View>
      <View flexDirection={'row'}>
        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(1);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            1
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(2);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            2
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.600"
          onPress={() => {
            masukanAngka('-');
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            -
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.600"
          onPress={() => {
            masukanAngka('+');
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            +
          </Text>
        </Pressable>
      </View>
      <View flexDirection={'row'}>
        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(3);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            3
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(4);
          }}
          r
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            4
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.600"
          onPress={() => {
            masukanAngka('/');
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            /
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.600"
          onPress={() => {
            masukanAngka('*');
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            *
          </Text>
        </Pressable>
      </View>
      <View flexDirection={'row'}>
        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(5);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            5
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(6);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            6
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.600"
          onPress={() => {
            masukanAngka('%');
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            %
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.600"
          onPress={() => {
            menghitungHasil();
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            =
          </Text>
        </Pressable>
      </View>
      <View flexDirection={'row'}>
        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(7);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            7
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(8);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            8
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(9);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            9
          </Text>
        </Pressable>

        <Pressable
          flex={1}
          p={3}
          margin={3}
          bg="danger.400"
          onPress={() => {
            masukanAngka(0);
          }}
        >
          <Text fontSize={20} color="black" textAlign={'center'}>
            0
          </Text>
        </Pressable>
      </View>
      <Pressable
        flex={0.5}
        p={2}
        margin={2}
        bg="danger.600"
        width={'100%'}
        onPress={() => {
          clearData();
        }}
      >
        <Text fontSize={20} color="black" textAlign={'center'}>
          Clear
        </Text>
      </Pressable>
    </Box>
  );
}
