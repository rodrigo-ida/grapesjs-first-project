export default function(editor){

  editor.BlockManager.add("testBlock3", {
    label: "plugin-customizado",
    category: 'customizado',

    attributes: { class: "gjs-fonts gjs-f-b1" },
    content: { type: "customizado" }
  });
}
