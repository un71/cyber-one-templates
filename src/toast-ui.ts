// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Editor from "@toast-ui/editor";

const editor = new Editor({
  el: document.querySelector("#rules-program"),
  height: "237px",
  initialEditType: "markdown",
  previewStyle: "vertical",
});

editor.getMarkdown();
