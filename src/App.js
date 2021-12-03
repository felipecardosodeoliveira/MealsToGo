import React from 'react';

import { View, SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';

// const isAndroid = Platform.OS === 'android';

function App() {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={style.search}>
                    <Text>
                        Search
                    </Text>
                </View>
                <View style={style.list}>
                    <Text>List</Text>
                </View>
            </SafeAreaView>
            <StatusBar style="auto" />
        </>
    )
}

const style = StyleSheet.create({
    search: {
        backgroundColor: 'green',
        padding: 18
    },
    list: {
        backgroundColor: 'blue',
        flex: 1,
        padding: 18
    }
})

export default App;