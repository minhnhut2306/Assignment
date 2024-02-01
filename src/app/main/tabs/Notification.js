import { SafeAreaView, StatusBar, TouchableOpacity, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Notification = () => {

    const navigation = useNavigation();
    const colorLinear = ['#262B33', 'rgba(38, 43, 51, 0)'];
    const startLinear = { x: 0, y: 0 };
    const endLinear = { x: 0, y: 1 };

    const goToSetting = () => {
        navigation.navigate('CaiDat')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={'#0C0F14'}
            />

            <View style={styles.rowToolBar}>
                <TouchableOpacity>
                    <Image
                        source={require("../../../../assets/images/icback.png")}
                    />
                </TouchableOpacity>

                <Text style={styles.txtLabelScreen}>Order History</Text>

                <TouchableOpacity
                    onPress={goToSetting}>
                    <Image
                        source={require("../../../../assets/images/ic_user.png")}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView

            >
                <View style={styles.spaceItem}>
                    <View style={styles.containerDate}>
                        <View style={styles.flexRowBetween}>
                            <Text style={styles.txtLabelDate}>Order Date</Text>
                            <Text style={styles.txtLabelDate}>Total Amount</Text>
                        </View>
                        <View style={styles.flexRowBetween}>
                            <Text style={styles.txtSizeDate}>20th March 16:23</Text>
                            <Text style={styles.txtSizeTotalPrice}>$ 74.40</Text>
                        </View>
                    </View>

                    {/* Item 1  */}
                    <LinearGradient
                        style={styles.tableItem}
                        colors={colorLinear}
                        start={startLinear}
                        end={endLinear}
                    >
                        {/* row 1 */}
                        <View style={styles.rowDetailInTable}>
                            <Image
                                style={styles.sizeImageInTable}
                                source={require("../../../../assets/images/caffe1.png")}
                            />

                            <View style={styles.rowSumPrice}>
                                <View>
                                    <Text style={styles.txtNameItemInTable}>Cappuccino</Text>
                                    <Text style={styles.txtTypeInTable}>With Steamed Milk</Text>
                                </View>

                                <Text style={styles.charactorDolar}>$ <Text style={styles.txtColorWhite}>37.20</Text></Text>
                            </View>
                        </View>


                        <View style={styles.tableSize}>

                            {/* Size S  */}
                            <View style={styles.rowSize}>
                                <View style={styles.rowSizeAndSinglePrice}>
                                    <Text style={styles.txtSizeSmall}>S</Text>
                                    <Text style={styles.txtPrice}>
                                        <Text style={styles.symbol}>$ </Text>
                                        4.20</Text>
                                </View>

                                <Text style={styles.txtX2}>
                                    <Text style={styles.symbol}>X </Text>
                                    2</Text>

                                <Text style={styles.txtSinglePrice}>8.40</Text>
                            </View>

                            {/* Size M  */}
                            <View style={styles.rowSize}>
                                <View style={styles.rowSizeAndSinglePrice}>
                                    <Text style={styles.txtSizeSmall}>M</Text>
                                    <Text style={styles.txtPrice}>
                                        <Text style={styles.symbol}>$ </Text>
                                        4.20</Text>
                                </View>

                                <Text style={styles.txtX2}>
                                    <Text style={styles.symbol}>X </Text>
                                    2</Text>

                                <Text style={styles.txtSinglePrice}>8.40</Text>
                            </View>

                            {/* Size L  */}
                            <View style={styles.rowSize}>
                                <View style={styles.rowSizeAndSinglePrice}>
                                    <Text style={styles.txtSizeSmall}>L</Text>
                                    <Text style={styles.txtPrice}>
                                        <Text style={styles.symbol}>$ </Text>
                                        4.20</Text>
                                </View>

                                <Text style={styles.txtX2}>
                                    <Text style={styles.symbol}>X </Text>
                                    2</Text>

                                <Text style={styles.txtSinglePrice}>8.40</Text>
                            </View>
                        </View>
                    </LinearGradient>

                    {/* Item 2 */}
                    <LinearGradient
                        style={styles.tableItem}
                        colors={colorLinear}
                        start={startLinear}
                        end={endLinear}
                    >
                        {/* row 1 */}
                        <View style={styles.rowDetailInTable}>
                            <Image
                                style={styles.sizeImageInTable}
                                source={require("../../../../assets/images/caffe2.png")}
                            />

                            <View style={styles.rowSumPrice}>
                                <View>
                                    <Text style={styles.txtNameItemInTable}>Cappuccino</Text>
                                    <Text style={styles.txtTypeInTable}>With Steamed Milk</Text>
                                </View>

                                <Text style={styles.charactorDolar}>$ <Text style={styles.txtColorWhite}>37.20</Text></Text>
                            </View>
                        </View>


                        <View style={styles.tableSize}>

                            {/* Size S  */}
                            <View style={styles.rowSize}>
                                <View style={styles.rowSizeAndSinglePrice}>
                                    <Text style={styles.txtSizeSmall}>S</Text>
                                    <Text style={styles.txtPrice}>
                                        <Text style={styles.symbol}>$ </Text>
                                        4.20</Text>
                                </View>

                                <Text style={styles.txtX2}>
                                    <Text style={styles.symbol}>X </Text>
                                    2</Text>

                                <Text style={styles.txtSinglePrice}>8.40</Text>
                            </View>

                            {/* Size M  */}
                            <View style={styles.rowSize}>
                                <View style={styles.rowSizeAndSinglePrice}>
                                    <Text style={styles.txtSizeSmall}>M</Text>
                                    <Text style={styles.txtPrice}>
                                        <Text style={styles.symbol}>$ </Text>
                                        4.20</Text>
                                </View>

                                <Text style={styles.txtX2}>
                                    <Text style={styles.symbol}>X </Text>
                                    2</Text>

                                <Text style={styles.txtSinglePrice}>8.40</Text>
                            </View>


                        </View>
                    </LinearGradient>
                </View>

                {/* item 3 */}
                <View style={styles.spaceItem}>
                    <View style={styles.containerDate}>
                        <View style={styles.flexRowBetween}>
                            <Text style={styles.txtLabelDate}>Order Date</Text>
                            <Text style={styles.txtLabelDate}>Total Amount</Text>
                        </View>
                        <View style={styles.flexRowBetween}>
                            <Text style={styles.txtSizeDate}>20th March 16:23</Text>
                            <Text style={styles.txtSizeTotalPrice}>$ 74.40</Text>
                        </View>
                    </View>
                    <LinearGradient
                        style={styles.tableItem}
                        colors={colorLinear}
                        start={startLinear}
                        end={endLinear}
                    >
                        {/* row 1 */}
                        <View style={styles.rowDetailInTable}>
                            <Image
                                style={styles.sizeImageInTable}
                                source={require("../../../../assets/images/caffe3.png")}
                            />

                            <View style={styles.rowSumPrice}>
                                <View>
                                    <Text style={styles.txtNameItemInTable}>Liberica Beans</Text>
                                    <Text style={styles.txtTypeInTable}>From Africa</Text>
                                </View>

                                <Text style={styles.charactorDolar}>$ <Text style={styles.txtColorWhite}>37.20</Text></Text>
                            </View>
                        </View>


                        <View style={styles.tableSize}>

                            {/* 250gm  */}
                            <View style={styles.rowSize}>
                                <View style={styles.rowSizeAndSinglePrice}>
                                    <Text style={styles.txtWeight}>250gm</Text>
                                    <Text style={styles.txtPrice}>
                                        <Text style={styles.symbol}>$ </Text>
                                        4.20</Text>
                                </View>

                                <Text style={styles.txtX2}>
                                    <Text style={styles.symbol}>X </Text>
                                    2</Text>

                                <Text style={styles.txtSinglePrice}>8.40</Text>
                            </View>

                            {/* Size M  */}
                            <View style={styles.rowSize}>
                                <View style={styles.rowSizeAndSinglePrice}>
                                    <Text style={styles.txtWeight}>500gm</Text>
                                    <Text style={styles.txtPrice}>
                                        <Text style={styles.symbol}>$ </Text>
                                        4.20</Text>
                                </View>

                                <Text style={styles.txtX2}>
                                    <Text style={styles.symbol}>X </Text>
                                    2</Text>

                                <Text style={styles.txtSinglePrice}>8.40</Text>
                            </View>

                            {/* Size L  */}
                            <View style={styles.rowSize}>
                                <View style={styles.rowSizeAndSinglePrice}>
                                    <Text style={styles.txtWeight}>1Kg</Text>
                                    <Text style={styles.txtPrice}>
                                        <Text style={styles.symbol}>$ </Text>
                                        4.20</Text>
                                </View>

                                <Text style={styles.txtX2}>
                                    <Text style={styles.symbol}>X </Text>
                                    2</Text>

                                <Text style={styles.txtSinglePrice}>8.40</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </View>

            </ScrollView>

            <TouchableOpacity
                style={styles.btnSave}>
                <Text style={styles.btnSignInText}>Download</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Notification

const styles = StyleSheet.create({
    rowToolBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 11
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#0C0F14'
    },
    txtLabelScreen: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    txtLabelDate: {
        fontSize: 14,
        color: 'white',
        fontWeight: '500',
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtSizeTotalPrice: {
        color: '#D17842',
        fontSize: 14
    },
    txtSizeDate: {
        fontSize: 14,
        color: 'white',
    },
    txtLabelScreen: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    tableItem: {
        height: 'auto',
        borderRadius: 23,
        paddingHorizontal: 17,
        paddingTop: 9,
        paddingBottom: 15
    },
    sizeImageInTable: {
        width: 100,
        height: 100,
        borderRadius: 16
    },
    rowDetailInTable: {
        flexDirection: 'row',
        gap: 22
    },
    txtNameItemInTable: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        paddingVertical: 5
    },
    txtTypeInTable: {
        color: '#AEAEAE',
        fontSize: 10
    },
    txtSizeSmall: {
        width: 56,
        backgroundColor: '#0C0F14',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingVertical: 8,
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    txtWeight: {
        width: 56,
        backgroundColor: '#0C0F14',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingVertical: 8,
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    },
    symbol: {
        color: '#D17842',
    },
    txtPrice: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: '#0C0F14',
        paddingVertical: 8,
        width: 85,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: 'center'
    },
    backgroundMinusAndPlus: {
        backgroundColor: '#D17842',
        width: 28.44,
        height: 28.44,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowSize: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sizeIconMinus: {
        width: 8,
        height: 3
    },
    sizeIconPlus: {
        width: 8,
        height: 8
    },
    backgroundQuantity: {
        backgroundColor: '#0C0F14',
        borderWidth: 1,
        borderColor: '#D17842',
        borderRadius: 7,
        width: 50,
        height: 30,
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        paddingVertical: 5,
        textAlign: 'center'
    },
    tableSize: {
        gap: 8,
        marginTop: 10
    },
    containerDate: {
        marginBottom: 8
    },
    rowSumPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 7,
        alignItems: 'center'
    },
    charactorDolar: {
        fontSize: 20,
        color: '#D17842',
        fontWeight: '500'
    },
    txtColorWhite: {
        color: 'white'
    },
    rowSizeAndSinglePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 2
    },
    txtX2: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    txtSinglePrice: {
        color: '#D17842',
        fontSize: 16,
        fontWeight: '500'
    },
    spaceItem: {
        marginVertical: 7
    },
    btnSave: {
        height: 57,
        backgroundColor: '#D17842',
        paddingVertical: 16,
        borderRadius: 20,
        marginVertical: 15
    },
    btnSignInText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
})