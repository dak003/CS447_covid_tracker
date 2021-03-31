import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Heatmap extends React.Component {
    static defaultProps = {
        center: {
        lat: 39.39,
        lng: -76.49
        },
        zoom: 20
    };

    render() {

        var heatMapData = {
            positions: [
                {lat: 39.45, lng: -76.64},
                {lat: 39.48, lng: -76.20},
            ],
            options: {   
                radius: 100,   
                opacity: 0.6,
            }
        };

        return (
        // Important! Always set the container height explicitly
        <GoogleMapReact
            ref={(el) => this._googleMap = el}
            bootstrapURLKeys={{ key: "API_KEY" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            heatmapLibrary={true}          
            heatmap={heatMapData}          
            >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            />
            </GoogleMapReact>
        );
    }
}

export default Heatmap;
