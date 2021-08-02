export default function(editor){

  editor.BlockManager.add("custom-carousel-block", {
    label: "carousel",
    category: 'customizado',

    attributes: { class: "gjs-fonts gjs-f-b1" },
    content: { type: "custom-carousel" }
  });
}
