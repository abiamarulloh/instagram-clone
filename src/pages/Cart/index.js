import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {ICartEmpty, IconTrash} from '../../assets';
import {Button, Gap, Input} from '../../components';
import {colors, fonts, numberFormat} from '../../utils';
import {emptyCart, removeItem} from '../../redux/actions/cart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: null,
      items: [
        {
          label: 'COD',
          value: 1,
        },
        {
          label: 'Kurir',
          value: 2,
        },
      ],
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
    // const uniqueIds = [];
    // const count = [];
    // const unique = this.props.cartItems.filter(cart => {
    //   const isDuplicate = uniqueIds.includes(cart.id);
    //   if (!isDuplicate) {
    //     uniqueIds.push(cart.id);

    //     return true;
    //   }

    //   count[cart.id] = (count[cart.id] || 0) + 1;
    //   cart.quantity = count[cart.id];
    //   return false;
    // });
    return this.props.cartItems;
  }

  removeToCart(product, index) {
    product.index = index;
    this.props.removeItem(product);
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
                  <Input label="Pesan untuk penjual" />
                  <Gap height={50} />
                  <Input label="Nama Lengkap" />
                  <Gap height={10} />
                  <Input label="Nomor telephone" />
                  <Gap height={10} />
                  <Input label="Alamat Rumah" />
                  <Gap height={10} />
                  {/* <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={this.setOpen}
                    setValue={this.setValue}
                    setItems={this.setItems}
                    theme="DARK"
                  /> */}
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
                <Button title="Bayar" type="submit" />
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
export default connect(mapStateToProps, {removeItem, emptyCart})(Cart);

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
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  productPrice: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
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
  },
});
