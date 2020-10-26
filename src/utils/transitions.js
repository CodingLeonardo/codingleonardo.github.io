import { cubicOut, linear } from "svelte/easing";

export function slide(
  node,
  { delay = 300, duration = 500, easing: easing = cubicOut }
) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const width = parseFloat(style.width);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing: easing,
    css: (t) =>
      `overflow: hidden;` +
      `opacity: ${Math.min(t * 20, 1) * opacity};` +
      `width: ${t * width}px;` +
      `padding-top: ${t * padding_top}px;` +
      `padding-bottom: ${t * padding_bottom}px;` +
      `margin-top: ${t * margin_top}px;` +
      `margin-bottom: ${t * margin_bottom}px;` +
      `border-top-width: ${t * border_top_width}px;` +
      `border-bottom-width: ${t * border_bottom_width}px;`,
  };
}

export function fade(
  node,
  { delay = 0, duration = 200, easing: easing = linear }
) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing: easing,
    css: (t) => {
      return `opacity: ${t * o}`;
    },
  };
}

export function fly(
  node,
  {
    delay = 0,
    duration = 400,
    easing: easing = cubicOut,
    x = 0,
    y = 0,
    opacity = 0,
  }
) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing: easing,
    css: (t, u) => `
    transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
    opacity: ${target_opacity - od * u}`,
  };
}

// export function crossfade(_a) {
//   var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
//   const to_receive = new Map();
//   const to_send = new Map();
//   function crossfade(from, node, params) {
//       const { delay = 0, duration = d => Math.sqrt(d) * 30, easing: easing = cubicOut } = internal.assign(internal.assign({}, defaults), params);
//       const to = node.getBoundingClientRect();
//       const dx = from.left - to.left;
//       const dy = from.top - to.top;
//       const dw = from.width / to.width;
//       const dh = from.height / to.height;
//       const d = Math.sqrt(dx * dx + dy * dy);
//       const style = getComputedStyle(node);
//       const transform = style.transform === 'none' ? '' : style.transform;
//       const opacity = +style.opacity;
//       return {
//           delay,
//           duration: internal.is_function(duration) ? duration(d) : duration,
//           easing: easing,
//           css: (t, u) => `
//       opacity: ${t * opacity};
//       transform-origin: top left;
//       transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
//     `
//       };
//   }
