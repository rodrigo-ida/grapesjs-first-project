export default function(editor) {
  editor.Blocks.add("custom-column", {
    label: "Coluna",
    category: 'customizado',
    content: {
      tagName: "div",
      style: { padding: '20px' }
    }
  });
}
