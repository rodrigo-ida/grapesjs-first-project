export default function(editor) {
  editor.Blocks.add("navbar-custom", {
    label: "navbar-customizado",
    category: 'customizado',

    content: {
      tagName: "nav",
      components: [
        {
          tagName: "ul",
          style: {display: 'flex' },
          components: 
  
            [
              {tagName: "li",
              content: "Início"
              },
              {tagName: "li",
              content: "Sobre nós"
              },
              {tagName: "li",
              content: "Contato"
              },
            ]
          
        }
      ]
    }
  });
}
