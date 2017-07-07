This is an example repository of the new profile settings for the Doodle3D-Slicer.
We now have 4 different YAML files (default, printer, material, quality) that are merged together whereafter the user can customize these settings before they're supplied to the slicer.

Webpack is used instead of JSPM as an experiment.

# Install
```bash
npm install
npm start
# open http://localhost:8080/ in your browser
# open your console to see the merged result
```

# Essentials
## index.js
```js
import defaultSettings  from './settings/default.yml';
import printerSettings  from './settings/printer.yml';
import materialSettings from './settings/material.yml';
import qualitySettings  from './settings/quality.yml';

console.log({
  ...defaultSettings,
  ...printerSettings['ultimaker2go'],
  ...materialSettings['pla'],
  ...qualitySettings['low'],
});
```
## default.yml
```yaml
...
dimensions:
  x: 200
  y: 200
  z: 200
temperature: 210
bedTemperature: 70
travelSpeed: 200.0
layerHeight: 0.15
heatedBed: false
nozzleDiameter: 0.4
filamentThickness: 2.85
...
```

## printer.yml
```yaml
...
ultimaker:
  title: Ultimaker
ultimaker2:
  title: Ultimaker 2
  heatedBed: true
ultimaker2go:
  title: Ultimaker 2 Go
  dimensions:
    x: 120
    y: 120
    z: 112
ultimaker_original_plus:
  title: Ultimaker Original Plus
  heatedBed: true
vision_3d_printer:
  title: Vision 3D Printer
wanhao_duplicator4:
  title: Wanhao Duplicator 4
  filamentThickness: 1.75
  heatedBed: true
  dimensions:
    x: 210
    y: 140
    z: 140
...
```

## material.yml
```yaml
pla:
  title: PLA
  temperature: 210
abs:
  title: ABS
  temperature: 240
```

## quality.yml
```yaml
low:
  layerHeight: .2
medium:
  layerHeight: .15
height:
  layerHeight: .1
```

# Result
```json
{
  "dimensions": {
    "x": 120,
    "y": 120,
    "z": 112
  },
  "temperature": 210,
  "bedTemperature": 70,
  "travelSpeed": 200,
  "layerHeight": 0.2,
  "heatedBed": false,
  "nozzleDiameter": 0.4,
  "filamentThickness": 2.85,
  "retraction": {
    "amount": 3,
    "enabled": true,
    "speed": 50,
    "minDistance": 0
  },
  "support": {
    "acceptanceMargin": 1.5,
    "distanceY": 0.4,
    "enabled": false,
    "gridSize": 6,
    "margin": 2,
    "plateSize": 4,
    "flowRate": 0.8,
    "speed": 40
  },
  "outerLine": {
    "flowRate": 1,
    "speed": 40
  },
  "innerLine": {
    "flowRate": 1,
    "speed": 50
  },
  "fill": {
    "flowRate": 1,
    "speed": 50,
    "overlap": 0,
    "gridSize": 5
  },
  "brim": {
    "flowRate": 1,
    "speed": 40,
    "offset": 4
  },
  "top": {
    "thickness": 0.8
  },
  "bottom": {
    "flowRate": 1.2,
    "speed": 40,
    "thickness": 0.4
  },
  "shell": {
    "thickness": 0.4
  },
  "title": "PLA"
}
```
