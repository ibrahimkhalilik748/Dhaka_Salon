import react, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Map.css'



export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <div className="maps">
                <h2>location</h2>
                <Map google={this.props.google}
                    onClick={this.onMapClicked}>
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBLVHqBpK4PTUHkxRLctTj6a3nHrtid-uI")
})(MapContainer)