import proyectos from "./_proyectos.js";

const contents = JSON.stringify(
  proyectos.map((proyecto) => {
    return {
      name: proyecto.name,
      href: proyecto.href,
      src: proyecto.src,
      description: proyecto.description,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
