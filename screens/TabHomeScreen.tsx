import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabHomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
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
      <View style={styles.header}>
        <Text style={styles.title}>Instagram</Text>
        <View style={styles.tabHeader}>
          <TabBarIcon name="plus" color="grey" />
          <TabBarIcon name="heart-o" color="grey" />
          <TabBarIcon name="comments" color="grey" />
        </View>
      </View>

      <SafeAreaView>     
        <View style={{height: 100}}>
          <ScrollView style={styles.containerStories} horizontal={true} >
              {isLoading ? <Text>Loading...</Text>  : dataStories.map(ItemView) }
          </ScrollView>
        </View>

        <View style={{marginTop: 10}}>
            <ScrollView style={styles.containerFeeds}>
              <View>
                <View>
                  <Image source={{uri: "https://avatars.githubusercontent.com/u/32256117?v=4"}} />
                  <Text>Abi Amarulloh</Text>
                </View>
                <Image source={{uri: "https://images.unsplash.com/photo-1518986762393-2a8362ee6fb9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"}} />
              </View>
            </ScrollView>
        </View>
      </SafeAreaView>
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  tabHeader: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
    alignItems: 'center',
  },
  containerStories: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  storyUserImg: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },
  containerFeeds: {
    paddingLeft: 15,
    paddingRight: 15,
  }
  
});

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{marginRight: 15}}  {...props} />;
}
