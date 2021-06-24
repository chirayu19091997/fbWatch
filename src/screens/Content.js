import axios from "axios";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { SectionGrid } from "react-native-super-grid";

// Reusable components
import SearchBar from "../components/SearchBar";
import DropDownPicker from "react-native-dropdown-picker";

const Content = (props) => {
  const [movie, setmovie] = React.useState([]);
  const [search, setsearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([
    {
      label: "All",
      value: "All",
    },
    {
      label: "Movie",
      value: "movie",
    },
    {
      label: "Tv-Series",
      value: "tv",
    },
    {
      label: "Anime",
      value: "Anime",
      disabled: true,
    },
  ]);

  React.useEffect(() => {
    if (search !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=70ff3f0b91ef9042cccf0562ca7af840&query=${search}`
        )
        .then(async (res) => {
          setmovie(await res.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=70ff3f0b91ef9042cccf0562ca7af840`
        )
        .then(async (res) => {
          setmovie(await res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <View style={styles.gridView}>
      <SearchBar search={search} setsearch={setsearch} />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select Category"
        loading={loading}
        style={styles.dropdownf}
        theme="DARK"
        dropDownContainerStyle={{
          width: "30%",
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <SectionGrid
        itemDimension={150}
        // staticDimension={300}
        // fixed
        // spacing={20}
        sections={[
          {
            title: movie.title,
            data: movie,
          },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("watch", {
                id: item.id,
              })
            }
          >
            <View style={styles.itemContainer}>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#363636",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={{
                    uri: "https://image.tmdb.org/t/p/w500" + item.poster_path,
                  }}
                  style={styles.imagesss}
                />

                <Text style={styles.itemName}>
                  {`${item.title || item.name}`.slice(0, 15)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    backgroundColor: "black",
  },
  itemContainer: {
    justifyContent: "flex-end",
    padding: 10,
    height: 350,
    width: "100%",
    backgroundColor: "#363636",
    borderWidth: 2,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    padding: 3,
    fontWeight: "bold",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  imagesss: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 5,
  },
  dropdownf: {
    color: "black",
    width: "30%",
    marginLeft: 20,
    marginTop: 20,
  },
});

export default Content;
