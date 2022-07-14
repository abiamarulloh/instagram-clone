import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../utils';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    //GET request
    fetch(
      'https://gitlab.com/abiamarulloh/simple-ecommerce/-/raw/master/api/products.json',
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(result => {
        this.setState({products: result.data});
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  };

  render() {
    return (
      <>
        <View style={styles.page}>
          <View style={styles.container}>
            <ScrollView>
              {this.state.products.content.map(product => {
                return (
                  <>
                    <View style={styles.productItem}>
                      <Text>{product.title}</Text>
                    </View>
                  </>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

export default Home;
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
});
