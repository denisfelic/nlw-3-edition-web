import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/OrphanagesMap.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return (
        <div className="page-map">
            <aside className="sidebar">

                <main>
                    <img src={mapMarker} alt="Map Marker" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :{")"}</p>
                </main>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.524727, -46.4296952]}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
            >
                
                {/* default: <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                {/* Mapbox + darker: <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
                } /> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
                    } />
            </Map>

            <Link to="" className="create-orphanage" >
                <FiPlus size={42} color="#FFF" />
            </Link>
        </div>
    );
}



export default OrphanagesMap;