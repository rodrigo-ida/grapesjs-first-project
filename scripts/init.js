import { editor } from './grapesInit.js'
import customSection from './customBlocks/customSection.js'
import customDiv from './customBlocks/customDiv.js'
import customTable from './customBlocks/customTable.js'
import customColumn from './customBlocks/customColumn.js'
import customButton from './customBlocks/customButton.js'
import customNavbar from './customBlocks/customNavbar.js'
import customPlugin from './customPlugins/dinamicPlugin.js'
import customCarousel from './customPlugins/customCarouselButton.js'
import {topPanel, innerPanel} from './customPanels/topPanel.js'



customSection(editor)
customDiv(editor)
customTable(editor)
customColumn(editor)
customButton(editor)

customCarousel(editor)

customNavbar(editor)
customPlugin(editor)
topPanel(editor)
innerPanel(editor)
const cssComposer = editor.CssComposer;

var sm = editor.SelectorManager;
var sel1 = sm.add('secao');
var rule = cssComposer.add([sel1]);
rule.set('style', {
  width: '100px',
  height: '100px',
  background: 'black',
});








