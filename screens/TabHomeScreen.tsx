import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabHomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [isLoading, setLoading] = useState(true);
  const [dataStories, setDataStories] = useState([]);
  const getMovies = async () => {
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
    getMovies();
  }, []);

  const ItemView = (item: any, key: any) => {
    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <LinearGradient key={key} style={styles.storyUserWrap} colors={['orange', 'red']}>
            <View style={styles.storyUser}>

            </View>
        </LinearGradient> 
        <Text>{item.username}</Text>
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

      <SafeAreaView style={styles.containerStories}>
        <ScrollView horizontal={true}>
           {isLoading ? <Text>Loading...</Text>  : dataStories.map(ItemView) }
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
    border: 1,
    borderRadius: 100,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyUser: {
    width: 56,
    height: 56,
    border: 1,
    borderRadius: 100,
  },
  containerStories: {
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
