const funcao = function() {
  this.addEventListener("click", () => {
    this.style.background = "black";
  });
  this.addEventListener("mouseenter", () => {
    this.style.background = "red";
  });
  this.addEventListener("mouseleave", () => {
    this.style.background = "white";
  });
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => (this.innerHTML = json.title));
};

export const myNewComponentTypes = editor => {
  editor.Components.addType("customizado", {
    // isComponent: el => el.tagName === "",

    model: {
      // Default properties
      defaults: {
        script: funcao,
        tagName: "nav",
        // draggable: true, // Can be dropped only inside `form` elements
        // droppable: true, // Can drop other elements inside

        components: `
        <ul><li>usuario sendo carregado...</li></ul>`
      }
    }
  });
};

