import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from "../../../../components/header";

import styles from './styles';
import ProfileLabel from '../../../../components/profile_label';

export default function HomeAdmin() {
    
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Home" />
            <ProfileLabel />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home Admin</Text>
            </View>
        </SafeAreaView>
    );
}

