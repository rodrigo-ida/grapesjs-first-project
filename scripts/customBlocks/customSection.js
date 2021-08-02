export default function(editor) {
  editor.Blocks.add("custom-section", {
    label: "seção",
    category: 'customizado',
    // style: {backgroundImage: 'url(../../src/image/secao.png)', backgroundColor: 'red'} ,
    attributes: { class: "custom-section-button" },

    content: {
      tagName: "section",
      style: { padding: '20px' }
    }
  });
}
