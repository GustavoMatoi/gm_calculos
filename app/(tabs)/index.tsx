import { Button, Icon, Input, ScrollView, Stack, Text, Image } from 'native-base';
import React, { useState } from 'react';
import Produto from '@/model/produto';
import Historico from '@/model/history';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
export default function HomeScreen() {
  const produto = new Produto('', 0, 0, 0, 0)
  const [valoresProduto, setValoresProduto] = useState({})

  return (
    <ScrollView bg="#03052d" style={style.container}>
      <View style={style.caixaImagem}>
        <Image
          width={125}
          height={125}
          source={require('../../assets/images/iconeGM.png')}
        />
      </View>

      <View style={[style.caixa]}>
        <View style={[style.caixaInput]}>
          <Text fontSize="lg" bold color={'white'}>Nome do produto:</Text>
          <Input color='white' size="lg" placeholder="Informe o nome do produto" onChangeText={(valor) => produto.setNome(valor)} />
        </View>
        <View style={[style.caixaInput]}>
          <Text fontSize="lg" bold color={'white'}>Preço do filamento (reais):</Text>
          <Input color='white'  size="lg" placeholder="Informe o preço do filamento" onChangeText={(preco) => produto.setPrecoFilamento(parseFloat(preco))} />
        </View>
        <View style={[style.caixaInput]}>
          <Text fontSize="lg" bold color={'white'}>Quantidade de material gasto (gramas):</Text>
          <Input color='white'  size="lg" placeholder="Informe a quantidade de material" onChangeText={(qnt) => produto.setQuantidadeMaterial(parseFloat(qnt))} />
        </View>
        <View style={[style.caixaInput]}>
          <Text fontSize="lg" bold color={'white'}>Tempo de impressão (horas):</Text>
          <Input color='white'  size="lg" placeholder="Informe o tempo de impressão" onChangeText={(horas) => produto.setTempoImpressao(parseFloat(horas))} />
        </View>
        <View style={[style.caixaInput]}>
          <Text fontSize="lg" bold color={'white'}>Porcentagem de lucro:</Text>
          <Input color='white'  size="lg" placeholder="Informe a margem de lucro" onChangeText={(porcentagem) => produto.setMargemLucro(parseFloat(porcentagem))} />
        </View>

        <View style={[style.caixaInput]}>
          <Text fontSize='2xl' bold color={'white'}>Valor do produto: {valoresProduto.valorFinal}</Text>

        </View>
        <Stack style={style.areaBotoes} direction={{
          base: "row",
        }} space={4}>
          <Button
            bg="#FFC107"
            leftIcon={<FontAwesome5 name="money-bill" size={24} color="white" />}
            onPress={() => {
              const valores = produto.calcularValor();
              setValoresProduto(valores);
            }}
          >
            <Text fontSize="lg" bold color={'white'}>CALCULAR</Text>
          </Button>


          <Button bg='#db2777' variant="subtle" leftIcon={<Feather name="save" size={24} color="white" />}>
            <Text fontSize="lg" bold color={'white'}>SALVAR</Text>
          </Button>
        </Stack>

      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  caixa: {
    width: '90%',
    marginLeft: '5%'
  },
  caixaInput: {
    marginBottom: '10%'
  },
  caixaImagem: {
    width: '100%',
    alignItems: 'center',
    marginTop: '5%'
  },
  areaBotoes: {
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: '5%'
  }
})