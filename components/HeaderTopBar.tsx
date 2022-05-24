import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderTopBar() {
  return (
     <View style={styles.header}>
        <Text style={styles.title}>Simple E-commerce</Text>
        <View style={styles.tabHeader}>
          <TabBarIcon name="bell-o" color="black" />
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
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
  },
  tabHeader: {
    marginRight: 15,
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
