// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Editor from "@toast-ui/editor";

// Функция для инициализации редактора (если элемент существует)
const initEditor = (selector: string) => {
  const el = document.querySelector(selector);
  if (!el) return; // Если элемент не найден, просто выходим

  return new Editor({
    el: el,
    height: "237px",
    initialEditType: "markdown",
    previewStyle: "vertical",
  });
};

// Инициализируем редакторы
const rulesProgramEditor = initEditor("#rules-program");
const reportDesc = initEditor("#report-desc");
const reportInfluence = initEditor("#report-influence");

// Получаем Markdown (если редактор инициализирован)
if (rulesProgramEditor) rulesProgramEditor.getMarkdown();
if (reportDesc) reportDesc.getMarkdown();
if (reportInfluence) reportInfluence.getMarkdown();
