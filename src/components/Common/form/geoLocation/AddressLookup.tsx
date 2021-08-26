import React, { useState, useEffect, useRef } from "react";
import "../common.css";
import { FieldRenderProps } from "react-final-form";
import "./AddressLookup.css";
import { addressSelectedAction } from "../../../../redux/action/searchAddress/addressSelected";
import { useDispatch } from "react-redux";
type Props = FieldRenderProps<string, any>;

interface foundAddress {
  count: number;
  id: string;
  locationsummary: string;
  summaryline: string;
  type: string;
}

// let autocomplete: google.maps.places.Autocomplete;

const AddressLookup: React.FC<Props> = ({
  input,
  meta: { touched, error },
  onSuggestSelect,
  // initialValue,
  ...rest
}: Props) => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");
  const inputRef = useRef(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  /* When input field is changed update the dropdwon list also when address is selected make a handleSelect function call  */
  useEffect(() => {
    const inputField = document.getElementById("pac-input") as any;
    // console.log(input);
    let autocomplete = new google.maps.places.Autocomplete(
      inputField || inputRef.current,
      {
        componentRestrictions: { country: "UK" },
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place) {
        let payload = {
          postcode: "",
          town: "",
          addressLine1: "",
          addressLine2: "",
          country: "",
          county: "",
          address: "",
        };
        if (place.formatted_address) {
          payload.address = place.formatted_address || "";
          setSearched(place.formatted_address);
        }
        let adressFld = place.address_components?.length || 0;
        let streetNum = "";
        for (let i = 0; i < adressFld; i++) {
          if (place.address_components) {
            for (let j = 0; j < place.address_components[i].types.length; j++) {
              if (place.address_components[i].types[j] === "street_number") {
                streetNum = place.address_components[i].long_name;
              }              
              if (place.address_components[i].types[j] === "route") {
                payload.addressLine1 = place.address_components[i].long_name;
              }
              if (place.address_components[i].types[j] === "sublocality_level_1") { 
                payload.addressLine2 = place.address_components[i].long_name;
              }
              if (
                place.address_components[i].types[j] ===
                "postal_town"
              ) {
                payload.town = place.address_components[i].long_name;
              }                           
              if (
                place.address_components[i].types[j] ===
                "administrative_area_level_2"
              ) {
                payload.county = place.address_components[i].long_name;
              }
              if (place.address_components[i].types[j] === "postal_code") {
                payload.postcode = place.address_components[i].long_name;
              }
              if (place.address_components[i].types[j] === "country") {
                payload.country = place.address_components[i].long_name;
              }
            }
          }
        }
        payload.addressLine1 = streetNum ? `${streetNum}, ${payload.addressLine1}` : payload.addressLine1;
        
        dispatch(addressSelectedAction(payload));
      }
    });
  });

  /* On address get selected by the user update the input field value also make a action call for sending the selected address all fields  */

  return (
    <div className="addresslookup">
      <input
        type="text"
        placeholder="Search address"
        value={searched}
        {...rest}
        id="pac-input"
        ref={inputRef}
        onKeyDown={onKeyDown}
        onChange={(vl) => setSearched(vl.target.value)}
      />
    </div>
  );
};

export default AddressLookup;
