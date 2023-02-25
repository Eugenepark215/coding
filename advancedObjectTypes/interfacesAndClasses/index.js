'use strict';
class DesktopDirectory {
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
Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
