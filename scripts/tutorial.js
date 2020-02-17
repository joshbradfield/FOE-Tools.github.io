export function getVideoTag(url, type = "video/mp4") {
  return `<div style="text-align:center"><video width="320" height="410" autoplay loop muted><source src="${url}" type="${type}" /></video></div>`;
}

export function formatTuto(str) {
  return str.replace(/\n/g, "<br />");
}
