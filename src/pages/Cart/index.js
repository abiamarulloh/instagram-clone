import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {ICartEmpty} from '../../assets';
import {colors, numberFormat} from '../../utils';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  getCart() {
    const uniqueIds = [];
    const count = {};
    const unique = this.props.cartItems.filter(cart => {
      const isDuplicate = uniqueIds.includes(cart.id);
      if (!isDuplicate) {
        uniqueIds.push(cart.id);

        return true;
      }

      count[cart.id] = (count[cart.id] || 0) + 1;
      return false;
    });

    unique.filter(uniqueItem => {
      uniqueItem.quantity = count[uniqueItem.id];
    });
    return unique;
  }

  render() {
    const {cartTotal} = this.props;
    console.log('ini halaman cart ', this.getCart().length);
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.titleHead}>Cart</Text>
          {this.getCart().length > 0 ? (
            <>
              <ScrollView>
                <View style={styles.products}>
                  {this.getCart().map(product => {
                    return (
                      <View key={product.id} style={styles.productItem}>
                        <Image
                          style={styles.productImage}
                          source={{uri: product.thumbnailId}}
                        />
                        <Text style={styles.productTitle}>{product.title}</Text>
                        <View style={styles.productAction}>
                          <Text style={styles.productPrice}>
                            {numberFormat(product.price)}
                          </Text>

                          <Text style={styles.productPrice}>
                            x{product.quantity}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
                <View style={styles.total}>
                  <Text style={styles.textTotal}>Total</Text>
                  <Text style={styles.textTotal}>
                    {numberFormat(cartTotal)}
                  </Text>
                </View>
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
export default connect(mapStateToProps)(Cart);

const {Height} = Dimensions.get('window');
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
    fontFamily: 'bold',
    marginBottom: 20,
    color: colors.text.primary,
  },
  products: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: 180,
    height: 'auto',
    marginBottom: 25,
  },
  productTitle: {
    fontSize: 12,
    marginBottom: 5,
    marginTop: 10,
    height: 30,
  },
  productImage: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  productPrice: {
    fontSize: 12,
  },
  productAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productATC: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTotal: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: 50,
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
  },
});
