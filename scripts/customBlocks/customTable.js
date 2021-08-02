export default function(editor) {
  editor.Blocks.add("custom-table", {
    label: "Tabela",
    category: 'customizado',
    content: {
      tagName: "div",
      style: { padding: '20px', display: 'flex', flexDirection: 'column' }
    }
  });
}
