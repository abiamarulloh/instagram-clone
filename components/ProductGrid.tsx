import { FontAwesome } from "@expo/vector-icons";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));

export default function ProductGrid() {
  return (
    <View style={styles.wrap}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: 'https://raw.githubusercontent.com/abiamarulloh/simple-ecommerce/master/assets/images/produk-1.png' }} ></Image>
        <View style={styles.cardFooter}>
          <View style={styles.cardFooterLeft}>
            <Text style={{fontWeight: 'bold'}}>Produk 1</Text>
            <Text style={{fontSize: 11}}>Rp 90.000,-</Text>
          </View>
          <View style={styles.cardFooterRight} >
            <TabBarIcon name="heart-o" color="black" />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: 'https://raw.githubusercontent.com/abiamarulloh/simple-ecommerce/master/assets/images/produk-2.png' }} ></Image>
        <View style={styles.cardFooter}>
          <View style={styles.cardFooterLeft}>
            <Text style={{fontWeight: 'bold'}}>Produk 2</Text>
            <Text style={{fontSize: 11}}>Rp 50.000,-</Text>
          </View>
          <View style={styles.cardFooterRight} >
            <TabBarIcon name="heart-o" color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20}   {...props} />;
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: width,
    height: height - 60,
    borderRadius: 10
  },
  cardFooter: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardFooterLeft: {
    marginLeft: 10
  },
  cardFooterRight: {
    marginRight: 10
  }
});
