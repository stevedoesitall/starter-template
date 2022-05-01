import fs from "node:fs";

const esbuildHTML = {
  name: "esbuild-html",
  setup(build) {
    build.onStart(() => {
      fs.rmSync("./build", {
        recursive: true,
        force: true
      });
      
      // Build the public directory
      fs.mkdirSync("../client/build/");
      fs.mkdirSync("../client/build/public/");
      fs.copyFileSync(
        "../client/public/index.html",
        "../client/build/public/index.html"
      );
    });
  }
};

export default esbuildHTML;