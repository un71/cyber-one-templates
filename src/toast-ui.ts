// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Editor from "@toast-ui/editor";

const initEditor = (editorId: string, textareaId: string) => {
  const el = document.querySelector(`#${editorId}`);
  const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;

  if (!el || !textarea) {
    console.error(`Editor not found: #${editorId} or field #${textareaId}`);
    return null;
  }

  return new Editor({
    el: el,
    height: "400px",
    initialEditType: "markdown",
    previewStyle: "tab",
    usageStatistics: false,
    toolbarItems: [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote", "ul", "ol", "task"],
      ["table", "link", "image"],
      ["code", "codeblock"],
      ["scrollSync"],
    ],
    initialValue: textarea.value || "",
  });
};

const editors = {
  rulesProgram: initEditor("rules-program", "rules-program-textarea"),
  reportDesc: initEditor("report-desc", "report-desc-textarea"),
  reportInfluence: initEditor("report-influence", "report-influence-textarea"),
  appDesc: initEditor("app-desc", "app-desc-textarea"),
};

document.getElementById("report-form")?.addEventListener("submit", (event) => {
  let isEmpty = false;

  Object.entries(editors).forEach(([key, editor]) => {
    if (editor) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const textarea = document.getElementById(`${key}-textarea`);
      if (textarea) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        textarea.value = editor.getMarkdown();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!textarea.value) isEmpty = true;
      }
    }
  });

  if (isEmpty) {
    event.preventDefault();
    alert("Editor fields cannot be empty.");
  }
});
