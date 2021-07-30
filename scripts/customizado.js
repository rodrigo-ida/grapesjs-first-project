
const funcao = function(){
  this.addEventListener('click', () => { this.style.background = 'black'})
  this.addEventListener('mouseenter', () => { this.style.background = 'red'})
  this.addEventListener('mouseleave', () => { this.style.background = 'white'})
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => this.innerHTML = json.title)
}

const myNewComponentTypes = editor => {
  editor.Components.addType("customizado", {
    // isComponent: el => el.tagName === "",

    model: {
      // Default properties
      defaults: {
        script: funcao,
        tagName: "nav",
        // draggable: true, // Can be dropped only inside `form` elements
        // droppable: true, // Can drop other elements inside
        attributes: {
          // Default attributes
          class: "custom2"
        },
        components: `
        <ul><li>usuario sendo carregado...</li></ul>`
      }
    }
  });
};

var editor = grapesjs.init({
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
  plugins: ["gjs-preset-webpage", myNewComponentTypes],

  styleManager: {
    sectors: [
      {
        name: "General",
        open: false,
        buildProps: [
          "float",
          "display",
          "position",
          "top",
          "right",
          "left",
          "bottom"
        ]
      },
      {
        name: "Flex",
        open: false,
        buildProps: [
          "flex-direction",
          "flex-wrap",
          "justify-content",
          "align-items",
          "align-content",
          "order",
          "flex-basis",
          "flex-grow",
          "flex-shrink",
          "align-self"
        ]
      },
      {
        name: "Dimension",
        open: false,
        buildProps: [
          "width",
          "height",
          "max-width",
          "min-height",
          "margin",
          "padding"
        ]
      },
      {
        name: "Typography",
        open: false,
        buildProps: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          "text-shadow"
        ]
      },
      {
        name: "Decorations",
        open: false,
        buildProps: [
          "border-radius-c",
          "background-color",
          "border-radius",
          "border",
          "box-shadow",
          "background"
        ]
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["transition", "perspective", "transform"]
      }
    ]
  }
});





editor.Blocks.add("secao", {
  label: "seção",
  attributes: { class: 'secao' },
  droppable: 'form', // Can drop other elements inside
  content:{
    tagName: "section",
    // attributes: { style: 'height:200px; background: black;'}

  }

});

editor.Blocks.add("testBlock1", {
  label: "navbar-customizado",
  // attributes: {  },
  content: {
    tagName: "nav",
    components: [
      {
        tagName: "ul",
        components: {
          tagName: "li",
          content: "inicio"
        }
      }
    ]
  }
});

editor.BlockManager.add("testBlock3", {
  label: "plugin-customizado",
  attributes: { class: "gjs-fonts gjs-f-b1" },
  content: {type: 'customizado'}
});


editor.Panels.addPanel({
  id: "panel-top",
  el: ".panel__top"
});
editor.Panels.addPanel({
  id: "basic-actions",
  el: ".panel__basic-actions",
  buttons: [
    {
      id: "visibility",
      active: true, // active by default
      className: "btn-toggle-borders",
      label: "<u>B</u>",
      command: "sw-visibility" // Built-in command
    },
    {
      id: "export",
      className: "btn-open-export",
      label: "Exp",
      command: "export-template",
      context: "export-template" // For grouping context of buttons from the same panel
    },
    {
      id: "show-json",
      className: "btn-show-json",
      label: "JSON",
      context: "show-json",
      command(editor) {
        editor.Modal.setTitle("Components JSON")
          .setContent(
            `<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`
          )
          .open();
      }
    },
    {
      id: "alerta",
      className: "alerta-classe",
      label: "alerta-label",
      context: "alerta-contexto",
      command: "myCommand"
    }
  ]
});

editor.Commands.add("myCommand", {
  run(editor, sender) {
    alert("Hello world!");
  },
  stop(editor, sender) {}
});

editor.Panels.addPanel({
  id: "traits",
  el: ".traits-container",
  buttons: [
    // ...
    {
      id: "show-traits",
      active: true,
      label: "Traits",
      command: "show-traits",
      togglable: false
    }
  ],
  traitManager: {
    appendTo: ".traits-container"
  }
});

editor.Commands.add("show-traits", {
  getTraitsEl(editor) {
    const row = editor.getContainer().closest(".editor-row");
    return row.querySelector(".traits-container");
  },
  run(editor, sender) {
    this.getTraitsEl(editor).style.display = "";
  },
  stop(editor, sender) {
    this.getTraitsEl(editor).style.display = "none";
  }
});
