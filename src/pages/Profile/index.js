import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {customer, cartItems, navigation} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.titleHead}>Profile</Text>
            <Gap height={20} />
            <Text style={styles.title}>Hi, Abi Amarulloh</Text>
            <Text style={styles.desc}>+62 89533-7813-520</Text>

            <Gap height={50} />
            <Text style={styles.title}>Riwayat belanja</Text>
            {cartItems.length > 0 ? (
              <TouchableOpacity
                style={styles.history}
                onPress={() => navigation.navigate('ReceiptDetail')}>
                <Text style={styles.historyItemTitle}>Menunggu Pembayaran</Text>
                <Text style={styles.historyItemDesc}>{customer.orderTime}</Text>
              </TouchableOpacity>
            ) : null}

            <View style={styles.history}>
              <Text style={styles.historyItemTitle}>Menunggu Pembayaran</Text>
              <Text style={styles.historyItemDesc}>6/22/2022, 2:59:00 PM</Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.historyItemTitle}>Transaksi Selesai</Text>
              <Text style={styles.historyItemDesc}>4/22/2022, 2:59:00 PM</Text>
            </View>
            <Gap height={40} />
            <Button
              type="button"
              title="Keluar"
              onPress={e => navigation.navigate('Login')}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.order.order.items,
  customer: state.order.order.customer,
});
export default connect(mapStateToProps)(Profile);
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  titleHead: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    marginBottom: 20,
    color: colors.text.primary,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[800],
    marginBottom: 10,
    color: colors.text.secondary,
  },
  desc: {
    fontSize: 15,
    fontFamily: fonts.primary[600],
    marginBottom: 10,
    color: colors.text.secondary,
  },
  history: {
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  historyItemTitle: {
    fontSize: 15,
    fontFamily: fonts.primary[800],
    color: colors.secondary,
  },
  historyItemDesc: {
    fontSize: 15,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
