import habilidades from "./_habilidades.js";

const contents = JSON.stringify(habilidades);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
