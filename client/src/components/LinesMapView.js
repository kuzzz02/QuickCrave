import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from "prop-types";

export default class LinesMapView extends Component {
  render() {
    return (
      <LinesMap
        {...this.props}
      />
    );
  }
}


LinesMapView.propTypes = {
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired
  }),
  polyline: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  })),
  marker: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
}


const LinesMap = requireNativeComponent('LinesMapView', LinesMapView);

