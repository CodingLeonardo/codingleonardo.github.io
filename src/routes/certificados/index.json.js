import certificados from "./_certificados.js";

const contents = JSON.stringify(
  certificados.map((certificado) => {
    return {
      name: certificado.name,
      src: certificado.src,
      categories: certificado.categories,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
