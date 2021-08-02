const funcao = function() {
  

};

export default function( editor ) {
  editor.Components.addType("custom-carousel", {
    // isComponent: el => el.tagName === "",

    model: {

      defaults: {
        script: funcao,
        tagName: "div",
        // draggable: true, // Can be dropped only inside `form` elements
        // droppable: true, // Can drop other elements inside

        components: `
          <ul>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
          </ul>`
      }
    }
  });
};

