import { blockClickHandler } from "./BlockClick";
export default function cleanup() {
  document.querySelectorAll(".grid .block").forEach((block) => {
    block.removeEventListener("click", blockClickHandler);
  });
  document.removeEventListener("click", document.fn);
}
