import ky from "ky";
import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/slices/forecast";
import { useTypedDispatch } from "../store/hooks";

export const useGeolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: Infinity,
    });

  return {
    geoAvailable: isGeolocationAvailable && isGeolocationEnabled,
    lat: coords?.latitude,
    lon: coords?.longitude,
  };
};
