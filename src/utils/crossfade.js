import { quintOut } from "svelte/easing";
import { crossfade } from "svelte/transition";

const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 300),
  fallback(node, params) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    // const width = parseFloat(style.width);
    // const display = style.display ? "none" : style.transform;
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      delay: 200,
      duration: 600,
      easing: quintOut,
      css: t => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `
    };
  },
});

export { send, receive };
