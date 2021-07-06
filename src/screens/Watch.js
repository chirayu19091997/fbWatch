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
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

// Component Imports
import Content from "./Content";
import Related from "../components/Related";

// Component
const Watch = (props) => {
  const [tiles, setTiles] = React.useState([]);
  const [quality, setQuality] = React.useState("d");
  const [trim, setTrim] = React.useState(true);
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
        <View style={styles.banner}>
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + tiles.poster_path,
            }}
            style={styles.imagesss}
          />

          <View style={styles.rbcontainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("video", {
                  data: { id: id },
                });
              }}
            >
              <View style={styles.rbbutton}>
                <Text style={styles.rbtext}>
                  <Ionicons
                    name="play"
                    style={{
                      fontSize: 24,
                      textAlign: "center",
                    }}
                  />
                  Watch
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("video", {
                  data: { id: id },
                });
              }}
            >
              <View style={styles.rbbutton}>
                <Text style={styles.rbtext}>
                  <Ionicons
                    name="download"
                    style={{ fontSize: 24, textAlign: "center" }}
                  />
                  Download
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
            // onPress={() => {
            //   props.navigation.navigate("video", {
            //     data: { id: id },
            //   });
            // }}
            >
              <Menu>
                <MenuTrigger>
                  <View style={styles.rbbutton}>
                    {quality === "d" ? (
                      <Text style={styles.rbtext}>
                        <MaterialIcons
                          name="hd"
                          style={{ fontSize: 24, textAlign: "center" }}
                        />
                        Quality
                      </Text>
                    ) : quality === "sd" ? (
                      <Text style={styles.rbtext}>
                        <MaterialIcons
                          name="sd"
                          style={{ fontSize: 24, textAlign: "center" }}
                        />
                        720p
                      </Text>
                    ) : (
                      <Text style={styles.rbtext}>
                        <MaterialIcons
                          name="hd"
                          style={{ fontSize: 24, textAlign: "center" }}
                        />
                        1080p
                      </Text>
                    )}
                  </View>
                </MenuTrigger>

                <MenuOptions>
                  {quality !== "sd" ? (
                    <MenuOption onSelect={() => setQuality("sd")}>
                      <Text style={styles.rbtext}>
                        <MaterialIcons
                          name="sd"
                          style={{ fontSize: 18, textAlign: "center" }}
                        />
                        720p
                      </Text>
                    </MenuOption>
                  ) : (
                    <MenuOption
                      disabled={true}
                      onSelect={() => setQuality("sd")}
                      style={{ backgroundColor: "gray" }}
                    >
                      <Text style={styles.rbtext}>
                        <MaterialIcons
                          name="sd"
                          style={{ fontSize: 18, textAlign: "center" }}
                        />
                        720p
                      </Text>
                    </MenuOption>
                  )}
                  {quality !== "hd" ? (
                    <MenuOption onSelect={() => setQuality("hd")}>
                      <Text style={styles.rbtext}>
                        <MaterialIcons
                          name="hd"
                          style={{ fontSize: 18, textAlign: "center" }}
                        />
                        1080p
                      </Text>
                    </MenuOption>
                  ) : (
                    <MenuOption
                      disabled={true}
                      onSelect={() => setQuality("hd")}
                      style={{ backgroundColor: "gray" }}
                    >
                      <Text style={styles.rbtext}>
                        <MaterialIcons
                          name="hd"
                          style={{ fontSize: 18, textAlign: "center" }}
                        />
                        1080p
                      </Text>
                    </MenuOption>
                  )}
                </MenuOptions>
              </Menu>
              {/* </View> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ratingcontainer}>
          <View style={styles.ratingui}>
            <Text style={styles.ratingtext}>{tiles.status}</Text>
          </View>
          <View style={styles.ratingui}>
            <Text style={styles.ratingtext}>
              <AntDesign name="star" />
              {tiles.vote_average}
            </Text>
          </View>
          <View style={styles.ratingui}>
            <Text style={styles.ratingtext}>{tiles.vote_count}</Text>
          </View>
        </View>

        <View style={styles.details}>
          <Text
            style={[
              styles.texts,
              { fontWeight: "bold", borderBottomColor: "red" },
            ]}
          >
            {tiles.title}
          </Text>
          <TouchableOpacity onPress={() => setTrim(!trim)}>
            {trim ? (
              <Text style={[styles.texts, { fontSize: 17 }]}>
                {`${tiles.overview}`.slice(0, 150)}...
              </Text>
            ) : (
              <Text style={[styles.texts, { fontSize: 17 }]}>
                {tiles.overview}
              </Text>
            )}
          </TouchableOpacity>
          <Text style={[styles.texts, { fontSize: 14 }]}>
            Original Language: {tiles.original_language}
          </Text>
          <Text style={[styles.texts, { fontSize: 14 }]}>
            Runtime: {tiles.runtime} m
          </Text>
          <Text style={[styles.texts, { fontSize: 14 }]}>
            Tagline : {tiles.tagline}
          </Text>
        </View>
        <Text
          style={[styles.texts, { fontSize: 20, borderBottomColor: "blue" }]}
        >
          Related
        </Text>
        <Related />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  texts: {
    margin: 10,
    marginTop: 1,
    fontSize: 20,
    color: "white",
    borderBottomColor: "grey",
    paddingBottom: 10,
    borderWidth: 2,
  },
  defview: {
    // flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    margin: 0,
    padding: 10,
    // alignContent: "flex-start",
    // justifyContent: "flex-start",
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
    alignSelf: "flex-start",
    width: "40%",
    marginLeft: 20,
    height: 250,
    // resizeMode: "contain",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
  },
  ratingui: {
    width: 80,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "red",
  },
  ratingtext: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 4,
  },
  ratingcontainer: {
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
  },
  rbcontainer: {
    marginTop: 20,
    alignContent: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
  },
  rbbutton: {
    alignSelf: "flex-end",
    width: "65%",
    backgroundColor: "grey",
    marginLeft: 20,
    marginRight: 20,
    height: 60,
    borderWidth: 2,
    borderRadius: 15,
  },
  banner: {
    flex: 1,
    flexDirection: "row",
  },
  rbtext: {
    textAlign: "center",
    fontSize: 18,
    padding: 8,
    fontWeight: "bold",
  },
  popupdialog: {
    borderRadius: 15,
  },
});

export default Watch;
