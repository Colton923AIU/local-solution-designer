import path from "path";
import fs from "fs";
import logger from "../utils/logger/logger";
import { Request, Response } from "express";

const generateUiComponent = (req: Request, res: Response) => {
  const { name } = req.body;
  const componentFolder = path.join(
    __dirname,
    "..",
    "..",
    "ui-lib",
    "components",
    `${name}`
  );
  const componentPath = path.join(componentFolder, `index.tsx`);
  const componentCssPath = path.join(componentFolder, `${name}.module.scss`);

  if (!name) {
    return res.status(400).send("Name is required");
  }

  const componentTemplate = `import * as React from 'react';
import styles from './${name}.module.scss';

const ${name} = () => (
  <template className={styles.${name}Template}>
  </template>
);

export default ${name};`;

  const componentCssTemplate = `.${name}Template {
  display: flex;
};`;

  fs.mkdir(componentFolder, { recursive: true }, (err) => {
    if (err) {
      logger.error(`Error: ${err.message}`);
      return res.status(500).send("Failed to create folder for UI component");
    }

    logger.info(`Folder created: ${componentFolder}`);

    fs.writeFile(componentCssPath, componentCssTemplate, (err) => {
      if (err) {
        logger.error(`Error: ${err.message}`);
        return res.status(500).send("Failed to create SCSS for UI component");
      }
      logger.info(`SCSS module ${name}.module.scss created successfully`);

      fs.writeFile(componentPath, componentTemplate, (err) => {
        if (err) {
          logger.error(`Error: ${err.message}`);
          return res.status(500).send("Failed to create UI component");
        }
        logger.info(`UI component ${name} created successfully`);
        res.send(`UI component ${name} created successfully`);
      });
    });
  });
};

export default generateUiComponent;
