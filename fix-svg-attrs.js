const fs = require("fs");
const path = require("path");

const svgDir = "C:\\Projects\\React\\theye\\src\\icons\\svg";  
 
const convertAttrs = (content) => {
  return content
    .replace(/fill-opacity/g, "fillOpacity")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-opacity/g, "strokeOpacity")
    .replace(/stop-color/g, "stopColor")
    .replace(/stop-opacity/g, "stopOpacity")
    .replace(/clip-path/g, "clipPath")
    .replace(/clip-rule/g, "clipRule")
    .replace(/fill-rule/g, "fillRule")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin");

};

fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error("Ошибка чтения папки:", err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(".tsx")) {
      const filePath = path.join(svgDir, file);
      let content = fs.readFileSync(filePath, "utf8");
      const newContent = convertAttrs(content);
      fs.writeFileSync(filePath, newContent, "utf8");
      console.log(`Исправлен: ${file}`);
    }
  });

  console.log("Все SVG обработаны!");
});
