import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";


export default function SubHeader(props: any) {
  return (
     <View style={styles.subHeader}>
          <TabBarIcon name={props?.icon} color={props?.IconColor ? props?.IconColor : 'black'} />
          <Text style={styles.subHeaderTitle}>{props?.title}</Text>
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
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 15
  },
  subHeaderTitle: {
    fontSize: 14,
    paddingLeft: 15,
  },
});
