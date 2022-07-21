import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {ICartEmpty} from '../../assets';
import {Button, Gap, Input} from '../../components';
import {colors, fonts, numberFormat} from '../../utils';
import {emptyCart, removeItem} from '../../redux/actions/cart';
import {addOrder} from '../../redux/actions/orderAction';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      numberPhone: '',
      email: '',
      noteToSeller: '',
      address: '',
    };
    this.setValue = this.setValue.bind(this);
  }

  setOpen(open) {
    this.setState({
      open,
    });
  }

  setValue(callback) {
    this.setState(state => ({
      value: callback(state.value),
    }));
  }

  setItems(callback) {
    this.setState(state => ({
      items: callback(state.items),
    }));
  }

  getCart() {
    return this.props.cartItems;
  }

  removeToCart(product, index) {
    product.index = index;
    this.props.removeItem(product);
  }

  pay() {
    const {fullName, numberPhone, noteToSeller, email, address} = this.state;
    const {cartItems, navigation, addOrder, emptyCart} = this.props;
    if (!fullName) {
      this.alert('Nama Lengkap harus dilengkapi!');
    }

    if (!numberPhone) {
      this.alert('Nomor telephone harus dilengkapi!');
    }

    if (!address) {
      this.alert('Alamat harus dilengkapi!');
    }

    let orderTime = new Date().toLocaleString();
    let customer = {
      fullName,
      numberPhone,
      noteToSeller,
      email,
      address,
      orderTime,
    };
    addOrder({cartItems: cartItems, customer: customer});
    emptyCart();
    this.setState({fullName: ''});
    this.setState({numberPhone: ''});
    this.setState({noteToSeller: ''});
    this.setState({email: ''});
    this.setState({address: ''});
    navigation.navigate('ReceiptDetail');
  }

  alert(message) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }

  render() {
    const {cartTotal} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleHead}>Cart</Text>
            <TouchableOpacity onPress={() => this.props.emptyCart()}>
              <Text style={styles.emptyCartAct}>Kosongkan Keranjang</Text>
            </TouchableOpacity>
          </View>
          {this.getCart().length > 0 ? (
            <>
              <ScrollView>
                <View style={styles.products}>
                  {this.getCart().map((product, index) => {
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

                            <Text style={styles.productPrice}>
                              <TouchableOpacity
                                onPress={() => {
                                  this.removeToCart(product, index);
                                }}
                                style={styles.btnQty}>
                                <Text style={styles.btnQtyText}>-</Text>
                              </TouchableOpacity>
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
                <View style={styles.form}>
                  <Input
                    label="Pesan untuk penjual"
                    currentValue={this.props.noteToSeller}
                    setCurrentValue={value =>
                      this.setState({noteToSeller: value})
                    }
                  />
                  <Gap height={50} />
                  <Input
                    label="Nama Lengkap"
                    currentValue={this.props.fullName}
                    setCurrentValue={value => this.setState({fullName: value})}
                  />
                  <Gap height={10} />
                  <Input
                    label="Nomor telephone"
                    currentValue={this.props.numberPhone}
                    setCurrentValue={value =>
                      this.setState({numberPhone: value})
                    }
                  />
                  <Gap height={10} />
                  <Input
                    label="Email"
                    currentValue={this.props.email}
                    setCurrentValue={value => this.setState({email: value})}
                  />
                  <Gap height={10} />
                  <Input
                    label="Alamat Rumah"
                    currentValue={this.props.address}
                    setCurrentValue={value => this.setState({address: value})}
                  />
                  <Gap height={10} />
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
                    {numberFormat(cartTotal)}
                  </Text>
                </View>
                <Button
                  title="Bayar"
                  onPress={() => this.pay()}
                  type="submit"
                />
                <Gap height={30} />
              </ScrollView>
            </>
          ) : (
            <View style={styles.products}>
              <View style={styles.productWrap}>
                <ICartEmpty />
                <Text style={styles.textCartEmpty}>Keranjang Kosong</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
});
export default connect(mapStateToProps, {addOrder, removeItem, emptyCart})(
  Cart,
);

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
});
