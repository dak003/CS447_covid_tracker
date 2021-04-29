import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Heatmap extends React.Component {
    static defaultProps = {
        center: {
        lat: 39.1,
        lng: -97.8
        },
        zoom: 5
    };

    render() {

        var heatMapData = {
            positions: [
                {lat: 39.45, lng: -76.64},
                {lat: 39.48, lng: -76.20},
            ],
            options: {   
                radius: 15,   
                opacity: 0.6,
            }
        };

        return (
        <GoogleMapReact
            ref={(el) => this._googleMap = el}
            bootstrapURLKeys={{ key: "API-key" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            heatmapLibrary={true}          
            heatmap={heatMapData}          
            >
            <AnyReactComponent
                lat={39.45}
                lng={-76.64}
                text="My Marker"
            />
            </GoogleMapReact>
        );
    }
}

export default Heatmap;
