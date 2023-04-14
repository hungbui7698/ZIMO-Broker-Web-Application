import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "./Search.css"
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
const Search = (props) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 52.51651, lng: () => 13.33578 },
      radius: 200 * 1000,
    },
  });

  const chooseLocation = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const result = await getGeocode({ address });
      const { lat, lng } = await getLatLng(result[0]);
      props.panTo({ lat, lng });
      props.setCenter({ lat: lat, lng: lng });
    } catch (error) {
      console.log("error!");
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={chooseLocation}>
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map((place) => (
                <ComboboxOption key={place.place_id} value={place.description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default Search;
