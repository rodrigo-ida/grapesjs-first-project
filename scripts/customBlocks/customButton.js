export default function(editor) {
  editor.Blocks.add("custom-button", {
    label: "Botão",
    // droppable: "form",
    category: 'customizado',

    content: {
      tagName: "button",
      style: { 
        padding: '10px',
        width:'100px',
        height: '50px',
        background: '#31a2ff',
        color: 'white',
        border: 'none'  },
        components: '<span>seu texto</span>'
    }
  });
}
