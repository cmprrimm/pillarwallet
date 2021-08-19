
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
const { ethers } = require("ethers");





const itx = new ethers.providers.InfuraProvider('ropsten', '1059e9e195ec419bb3e38c1e38fcefde')
const signer = new ethers.Wallet('f5107d482b2c19083e4c128bf1c4f31f1ff2c69df2e9355f0c5849c690aab483', itx)

async function accConnect() {
  alert(`Wallet connected : ${signer.address}`);
}

async function getBalance() {
  try {
    const response = await itx.send('relay_getBalance', [signer.address])
    alert(`Your current ITX balance is ` + ethers.utils.formatEther(response.balance))
  } catch (e) {
    alert(e);
  }
}

async function transfer() {
  try {
    const tx = await signer.sendTransaction({
      to: '0x015C7C7A7D65bbdb117C573007219107BD7486f9',
      value: ethers.utils.parseUnits("0.001", "ether"),
    });
    await tx.wait().then(alert(`Transaction Complete`))
  } catch (e) {
    alert(e);
  }
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttons} onPress={() => accConnect()}>
        <Text style={{ color: 'white' }}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => transfer()}>
        <Text style={{ color: 'white' }}>send 0.1 eth?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => getBalance()}>
        <Text style={{ color: 'white' }}>Balance</Text>
      </TouchableOpacity>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 100
  }
});

// sound loan engage theme modify addict cable audit type scout choice today
