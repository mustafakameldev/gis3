import GeoTiffLayer from './GeoTiffLayer';
import xmlFile from '../public/TMSTILES/TMS.xml';
import { MapContainer, TileLayer } from 'react-leaflet'; //Marker, Popup,
const Main = () => {
  // const tiffUrl = '/GeoTIFF.tif';

  // const tiffUrl = '/t.tiff';
  // '/LC08_L1TP_045032_20180811_20180815_01_T1_B5.tiff';
  const center = [39.8282, -98.5795];
  const zoom = 3;

  const options = {
    pixelValuesToColorFn: (values) => {
      // transforming single value into an rgba color
      const nir = values[0];

      if (nir === 0) return;
      // console.log("nir:", nir);
      const r = (nir / 20000) * 255;
      const g = 0;
      const b = 0;
      return `rgba(${r},${g},${b}, 1)`;
    },
    resolution: 64,
    opacity: 1,
  };
  console.log(xmlFile);
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoTiffLayer url={tiffUrl} options={options} />
    </MapContainer>
  );
};

export default Main;
