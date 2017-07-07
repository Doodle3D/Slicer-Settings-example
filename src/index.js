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
