'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class DesktopDirectory {
  constructor() {
    this.config = {
      default: {
        encoding: 'utf-8',
        permissions: 'drw-rw-rw-'
      }
    };
  }

  addFile(name) {
    // eslint-disable-next-line no-console
    console.log(`Adding file: ${name}`);
  }

  showPreview(name) {
    // eslint-disable-next-line no-console
    console.log(`Opening preview of file: ${name}`);
  }
}
const Desktop = new DesktopDirectory();
// eslint-disable-next-line no-console
console.log(Desktop.config);
