const fs = require("fs");
const path = require("path");

const createEmailTemplate = (req, res) => {
  const sections = JSON.parse(req.body.sections);
  const logoFile = req.files["logo"] ? req.files["logo"][0] : null;
  const heroImageFile = req.files["heroImage"]
    ? req.files["heroImage"][0]
    : null;

  const logoUrl = logoFile
    ? `${req.protocol}://${req.get("host")}/uploads/${logoFile.filename}`
    : null;
  const heroImageUrl = heroImageFile
    ? `${req.protocol}://${req.get("host")}/uploads/${heroImageFile.filename}`
    : null;

  sections.forEach((element) => {
    if (element.type === "image") {
      if (element.id === "logo") {
        element.content = logoUrl;
      } else {
        element.content = heroImageUrl;
      }
    }
  });

  // Function to convert styles to inline CSS
  const styleToString = (style) => {
    return Object.entries(style || {})
      .map(
        ([key, value]) =>
          `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`
      ) 
      .join(" ");
  };

  // HTML structure for the email template
  let htmlContent = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
     <style>
         body { font-family: 'Poppins', Arial, sans-serif; margin: 0; padding: 8px; background-color: #f0ebff}
     </style>
 </head>
 <body>`;

  sections.forEach((section) => {
    htmlContent += `<div style="${styleToString({
      padding: section.type !== "divider" ? "8px" : "0",
      textAlign: section.type !== "divider" ? "center" : "initial",
    })}">`;

    // Handle different element types inside sections
    if (section.type === "text") {
      htmlContent += `<p style="${styleToString(section.style)}">${
        section.content
      }</p>`;
    } else if (section.type === "image") {
      htmlContent += `<img src="${
        section.content
      }" alt="Email Section" style="${styleToString(
        section.style
      )}" class="w-full h-auto">`;
    } else if (section.type === "button") {
      htmlContent += `<div style="text-align: center;">
       <a href="${section.href}" style="${styleToString(section.style)}">${
        section.content
      }</a>
     </div>`;
    } else if (section.type === "divider") {
      htmlContent += `<div style="${styleToString(section.style)}"></div>`;
    }

    htmlContent += `</div>`;
  });

  htmlContent += `</body></html>`;

  const filePath = path.join(__dirname, "../generated", "emailTemplate.html");

  // Ensure the directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  // Write the HTML content to the file
  fs.writeFile(filePath, htmlContent, (err) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to generate email template" });
    }

    // Provide the file for download
    res.download(filePath, "emailTemplate.html", (err) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ error: "Failed to send the email template file" });
      }
    });
  });
};

module.exports = {
  createEmailTemplate,
};
