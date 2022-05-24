import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Gap from '../components/Gap';
import HeaderTopBar from '../components/HeaderTopBar';
import ProductGrid from '../components/ProductGrid';
import SubHeader from '../components/SubHeader';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabHomeScreen({ navigation }: RootTabScreenProps<'TabHome'>) {
  const [isLoading, setLoading] = useState(true);
  const [dataStories, setDataStories] = useState([]);
  const getUserStories = async () => {
     try {
        const response = await fetch('https://raw.githubusercontent.com/abiamarulloh/instagram-clone/master/assets/data/stories.json');
        const json = await response.json();
        setDataStories(json.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    getUserStories();
  }, []);

  const ItemView = (item: any) => {
    return (
      <View key={item.id} style={{ flexDirection: 'column', alignItems: 'center' }}>
        <LinearGradient style={styles.storyUserWrap} colors={['orange', 'red']}>
            <View style={styles.storyUser}>
             <Image
                style={styles.storyUserImg}
                source={{
                  uri: item?.image
                }}
              />
            </View>
        </LinearGradient> 
        <Text>{item?.username}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Gap height={10} />

      <HeaderTopBar />

      <SafeAreaView>   
        <ScrollView>
          <Image style={styles.bannerImage} source={{ uri: 'https://raw.githubusercontent.com/abiamarulloh/simple-ecommerce/master/assets/images/banner-tokopedia.jpeg' }}></Image>
          
          <Gap height={20} />

          <SubHeader title="Toko yang sedang live!" icon="tv" />  
          <View style={{height: 100}}>
            <ScrollView style={styles.containerStories} horizontal={true} >
                {isLoading ? <Text>Loading...</Text>  : dataStories.map(ItemView) }
            </ScrollView>
          </View>

          <Gap height={20} />
          <SubHeader title="List Produk Terbaru!" icon="list" />  
          <ProductGrid />
          <Gap height={200} />

        </ScrollView> 
      </SafeAreaView>
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  storyUserWrap: {
    width: 60,
    height: 60,
    borderRadius: 100,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyUser: {
    width: 56,
    height: 56,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStories: {
    paddingLeft: 15,
    paddingRight: 15
  },
  storyUserImg: {
    width: 52,
    height: 52,
    borderRadius: 100
  },
  containerFeeds: {
    paddingLeft: 15,
    paddingRight: 15
  },
  bannerImage: {
    flexDirection: 'column',
    height: 140
  }
});

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20}   {...props} />;
}
