import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../images/map-marker.png';


const ServiceArea = () => {
    useEffect(() => {
        const map = L.map('map').setView([35.4107, -80.8428], 9);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const customIcon = L.icon({
            iconUrl: markerIcon,
            iconSize: [32, 32], // Size of the icon
            iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
            popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
        });

        const locations = [
            { name: "Catawba", coords: [35.7079, -81.0734] },
            { name: "Statesville", coords: [35.7826, -80.8873] },
            { name: "China Grove", coords: [35.5718, -80.5817] },
            { name: "Marshville", coords: [34.9885, -80.3678] },
            { name: "Kings Mountain", coords: [35.2451, -81.3412] },
            { name: "Shelby", coords: [35.2924, -81.5356] },
            { name: "Charlotte", coords: [35.2271, -80.8431] },
            { name: "Concord", coords: [35.4088, -80.5795] },
            { name: "Cornelius", coords: [35.4868, -80.8601] },
            { name: "Davidson", coords: [35.4993, -80.8487] },
            { name: "Denver", coords: [35.5315, -81.0292] },
            { name: "Huntersville", coords: [35.4107, -80.8428] },
            { name: "Indian Trail", coords: [35.0768, -80.6698] },
            { name: "Kannapolis", coords: [35.4874, -80.6217] },
            { name: "Marshville", coords: [34.9885, -80.3678] },
            { name: "Mount Holly", coords: [35.2987, -81.0156] },
            { name: "Sherrills Ford", coords: [35.6154, -80.9787] },
            { name: "Troutman", coords: [35.6999, -80.8884] },
            { name: "Gastonia", coords: [35.2621, -81.1873] },
        ];

        const polyloc = [
            { name: "Catawba", coords: [35.7079, -81.0734] },
            { name: "Statesville", coords: [35.7826, -80.8873] },
            { name: "China Grove", coords: [35.5718, -80.5817] },
            { name: "Marshville", coords: [34.9885, -80.3678] },
            { name: "Kings Mountain", coords: [35.2451, -81.3412] },
            { name: "Shelby", coords: [35.2924, -81.5356] },
        ]

        locations.forEach(location => {
            L.marker(location.coords, {icon: customIcon}).addTo(map).bindPopup(location.name);
        });

        const serviceAreaCoords = polyloc.map(location => location.coords);
        L.polygon(serviceAreaCoords, { color: '#7D2F26', fillColor: 'rgba(125, 47, 38, .2)', fillOpacity: 0.5 }).addTo(map);
    }, []);

    const serviceAreas = [
        "Catawba",
        "Charlotte",
        "China Grove",
        "Concord",
        "Cornelius",
        "Davidson",
        "Denver",
        "Huntersville",
        "Indian Trail",
        "Kannapolis",
        "Kings Mountain",
        "Marshville",
        "Mount Holly",
        "Shelby",
        "Sherrills Ford",
        "Statesville",
        "Troutman",
        "Gastonia"
    ];

    return (
        <>
            <div className="my-4 py-4" id='servicearea'>
                <h2 className="my-2 text-center text-3xl text-red uppercase font-bold">Service Areas</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-red mb-8'></div>
                </div>
                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex justify-center">
                            <div id="map" style={{ width: '640px', height: '480px', position: 'relative', zIndex: 1 }}></div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Service Area Locations</h3>
                            <div className="service-area-list grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4 overflow-y-scroll">
                                {serviceAreas.map((location, index) => (
                                    <div key={index} className="mb-2">{location}</div>
                                ))}
                            </div>
                            <p className="mt-4 text-gray-700">
                                If you're located outside these areas and in North Carolina, please don’t hesitate to reach out -- we’d be happy to discuss potential arrangements.
                            </p>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default ServiceArea;