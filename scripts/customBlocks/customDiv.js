export default function(editor) {
  editor.Blocks.add("custom-div", {
    label: "Linha",
    category: 'customizado',
    content: {
      tagName: "div",
      style: { padding: '20px' }
    }
  });
}
