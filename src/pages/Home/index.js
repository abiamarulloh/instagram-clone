import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cart';
import {colors, numberFormat} from '../../utils';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      carts: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    //GET request
    fetch(
      'https://gitlab.com/abiamarulloh/simple-ecommerce/-/raw/master/api/products.json',
    )
      .then(response => response.json())
      .then(result => this.setState({products: result.data.content}))
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  };

  addToCart(product) {
    this.props.addToCart(product);
  }

  render() {
    return (
      <>
        <View style={styles.page}>
          <View style={styles.container}>
            <Text style={styles.titleHead}>Amarabi Store</Text>
            <ScrollView>
              <View style={styles.products}>
                {this.state.products.map((product, index) => {
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
                        <TouchableOpacity
                          onPress={() => {
                            this.addToCart(product);
                          }}>
                          <Text style={styles.productATC}>Add to cart</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart,
});
export default connect(mapStateToProps, {addToCart})(Home);
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
});
