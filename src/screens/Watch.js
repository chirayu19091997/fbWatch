import React from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Component Imports
import Content from "./Content";

// Component
const Watch = (props) => {
  const [tiles, setTiles] = React.useState([]);
  let id = props.route.params.id;

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=70ff3f0b91ef9042cccf0562ca7af840`
      )
      .then((res) => {
        setTiles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.defview}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("video", {
              data: { id: id },
            });
          }}
        >
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + tiles.poster_path,
            }}
            style={styles.imagesss}
          />
        </TouchableOpacity>
        <View style={styles.details}>
          <Text
            style={[
              styles.texts,
              { fontWeight: "bold", borderBottomColor: "red" },
            ]}
          >
            {tiles.title}
          </Text>
          <Text style={[styles.texts, { fontSize: 17 }]}>
            {`${tiles.overview}`.slice(0, 150)}...
          </Text>
          <Text style={[styles.texts, { fontSize: 14 }]}>
            Original Language: {tiles.original_language}
          </Text>
          <Text style={[styles.texts, { fontSize: 14 }]}>
            Runtime: {tiles.runtime} m
          </Text>
          <Text style={[styles.texts, { fontSize: 14 }]}>
            Revenue : {tiles.revenue} $
          </Text>
        </View>
        <Text
          style={[styles.texts, { fontSize: 20, borderBottomColor: "blue" }]}
        >
          Related
        </Text>
        <Content />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  texts: {
    margin: 10,
    fontSize: 20,
    color: "white",
    borderBottomColor: "grey",
    paddingBottom: 10,
    borderWidth: 2,
  },
  defview: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    margin: 0,
    padding: 10,
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  details: {
    backgroundColor: "black",
    margin: 10,
    padding: 10,
    alignContent: "center",
    justifyContent: "flex-start",
  },
  imagesss: {
    marginTop: 20,
    alignContent: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    width: "100%",
    height: 300,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
  },
});

export default Watch;
