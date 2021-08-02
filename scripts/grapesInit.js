import { myNewComponentTypes } from './customPlugins/meuPlugin.js';
import  customCarousel  from './customPlugins/customCarousel.js';


export const editor = grapesjs.init({
  showOffsets: 1,
  noticeOnUnload: 0,
  container: "#gjs",
  height: "100%",
  fromElement: true,
  storageManager: {
    id: "gjs-", // Prefix identifier that will be used inside storing and loading
    type: "local", // Type of the storage
    autosave: true, // Store data automatically
    autoload: true, // Autoload stored data on init
    stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
    storeComponents: true, // Enable/Disable storing of components in JSON format
    storeStyles: true, // Enable/Disable storing of rules in JSON format
    storeHtml: true, // Enable/Disable storing of components as HTML string
    storeCss: true // Enable/Disable storing of rules as CSS string
  },
  plugins: ["gjs-preset-webpage", myNewComponentTypes, customCarousel, 'grapesjs-lory-slider'],


  styleManager: []
  // styleManager: {
  //   sectors: [
  //     {
  //       name: "General1",
  //       open: false,
  //       buildProps: [
  //         "float",
  //         "display",
  //         "position",
  //         "top",
  //         "right",
  //         "left",
  //         "bottom"
  //       ]
  //     },
  //     {
  //       name: "Flex",
  //       open: false,
  //       buildProps: [
  //         "flex-direction",
  //         "flex-wrap",
  //         "justify-content",
  //         "align-items",
  //         "align-content",
  //         "order",
  //         "flex-basis",
  //         "flex-grow",
  //         "flex-shrink",
  //         "align-self"
  //       ]
  //     },
  //     {
  //       name: "Dimension",
  //       open: false,
  //       buildProps: [
  //         "width",
  //         "height",
  //         "max-width",
  //         "min-height",
  //         "margin",
  //         "padding"
  //       ]
  //     },
  //     {
  //       name: "Typography",
  //       open: false,
  //       buildProps: [
  //         "font-family",
  //         "font-size",
  //         "font-weight",
  //         "letter-spacing",
  //         "color",
  //         "line-height",
  //         "text-shadow"
  //       ]
  //     },
  //     {
  //       name: "Decorations",
  //       open: false,
  //       buildProps: [
  //         "border-radius-c",
  //         "background-color",
  //         "border-radius",
  //         "border",
  //         "box-shadow",
  //         "background"
  //       ]
  //     },
  //     {
  //       name: "Extra",
  //       open: false,
  //       buildProps: ["transition", "perspective", "transform"]
  //     }
  //   ]
  // }
});
