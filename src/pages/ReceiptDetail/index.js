import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {IReceiptEmpty} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts, numberFormat} from '../../utils';

class ReceiptDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  handleGetTotal(cartItems) {
    let total = 0;
    cartItems.map(cartItem => {
      total += cartItem.price;
    });

    return total;
  }

  render() {
    const {cartItems, navigation, customer} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleHead}>Order detail</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.emptyCartAct}>Lanjut belanja</Text>
            </TouchableOpacity>
          </View>
          {cartItems.length > 0 ? (
            <>
              <ScrollView>
                <View style={styles.products}>
                  {cartItems.map((product, index) => {
                    return (
                      <View key={index} style={styles.productItem}>
                        <Image
                          style={styles.productImage}
                          source={{uri: product.thumbnailId}}
                        />
                        <View style={styles.productItemRight}>
                          <Text style={styles.productTitle}>
                            {product.title}
                          </Text>
                          <View style={styles.productAction}>
                            <Text style={styles.productPrice}>
                              {numberFormat(product.price)}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
                <View style={styles.divider} />
                <View style={styles.customerInfo}>
                  <Text style={styles.titleCustomerInfo}>Nama Lengkap</Text>
                  <Text style={styles.descCustomerInfo}>
                    {customer.fullName}
                  </Text>
                </View>
                <View style={styles.customerInfo}>
                  <Text style={styles.titleCustomerInfo}>Nomor Telephone</Text>
                  <Text style={styles.descCustomerInfo}>
                    {customer.numberPhone}
                  </Text>
                </View>
                <View style={styles.customerInfo}>
                  <Text style={styles.titleCustomerInfo}>Email</Text>
                  <Text style={styles.descCustomerInfo}>{customer.email}</Text>
                </View>
                <View style={styles.customerInfo}>
                  <Text style={styles.titleCustomerInfo}>Alamat Rumah</Text>
                  <Text style={styles.descCustomerInfo}>
                    {customer.address}
                  </Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.total}>
                  <Text style={styles.textTotal}>Banyaknya pembelian</Text>
                  <Text style={styles.textTotal}>
                    {this.props.cartItems.length} Item
                  </Text>
                </View>
                <View style={styles.total}>
                  <Text style={styles.textTotal}>Total</Text>
                  <Text style={styles.textTotal}>
                    {numberFormat(this.handleGetTotal(cartItems))}
                  </Text>
                </View>
                <Gap height={30} />
              </ScrollView>
            </>
          ) : (
            <View style={styles.products}>
              <View style={styles.productWrap}>
                <IReceiptEmpty />
                <Text style={styles.textCartEmpty}>Order tidak ditemukan</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.order.order.items,
  customer: state.order.order.customer,
});
export default connect(mapStateToProps)(ReceiptDetail);

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleHead: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  emptyCartAct: {
    fontSize: 16,
    fontFamily: fonts.primary[800],
    color: colors.text.secondary,
  },
  products: {
    flex: 1,
    flexDirection: 'column',
  },
  productItem: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  productItemRight: {
    marginLeft: 20,
    flex: 1,
  },
  productTitle: {
    fontSize: 12,
    height: 30,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  productPrice: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
  productAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: 50,
  },
  textTotal: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: fonts.primary[600],
    height: 30,
  },
  productWrap: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  textCartEmpty: {
    marginTop: 18,
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
  },
  btnQty: {
    width: 20,
    height: 20,
    backgroundColor: colors.secondary,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnQtyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  textQty: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
  customerInfo: {
    marginBottom: 10,
  },
  titleCustomerInfo: {
    fontFamily: fonts.primary[800],
    color: colors.text.secondary,
  },
  descCustomerInfo: {
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
