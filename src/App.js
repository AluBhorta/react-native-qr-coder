/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {
  const [scan, setScan] = useState(false);
  const [resultData, setResultData] = useState();
  const [resultType, setResultType] = useState();

  const onSuccess = (data, type) => {
    setResultData(data);
    setResultType(type);
    setScan(false);
  };

  const startScan = () => {
    setScan(true);
    setResultData();
    setResultType();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {scan ? (
              <View style={styles.sectionContainer}>
                <QRCodeScanner
                  reactivate={scan}
                  showMarker={true}
                  onRead={(e) => onSuccess(e.data, e.type)}
                  topContent={
                    <Text style={styles.centerText}>Scan your QRCode!</Text>
                  }
                  bottomContent={
                    <TouchableOpacity
                      style={styles.buttonTouchable}
                      onPress={() => setScan(false)}>
                      <Text style={styles.buttonText}>Cancel Scan</Text>
                    </TouchableOpacity>
                  }
                />
              </View>
            ) : (
              <View style={styles.sectionContainer}>
                <View>
                  <Text style={styles.sectionTitle}> QR Coder </Text>
                </View>
                <View style={styles.sectionDescription}>
                  <Button
                    color="#f114ff"
                    title="Start Scan"
                    onPress={startScan}
                  />
                </View>
              </View>
            )}

            {resultData && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Result</Text>
                <View style={styles.sectionDescription}>
                  <Text style={styles.centerText}>
                    <Text style={styles.textBold}>DATA</Text>: {resultData}
                  </Text>
                  <Text style={styles.centerText}>
                    <Text style={styles.textBold}>TYPE</Text>: {resultType}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff9',
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0009',
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: '#0009',
    margin: 24,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#0009',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  centerText: {
    flex: 1,
    color: '#777',
    fontSize: 18,
  },
  textBold: {
    fontWeight: 'bold',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: '#fff',
  },
  buttonTouchable: {
    padding: 16,
    borderWidth: 2,
    backgroundColor: '#1117',
    borderRadius: 5,
  },
});

export default App;
