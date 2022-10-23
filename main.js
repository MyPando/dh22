import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    })
    new ImageLayer({
      visible: false,
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
