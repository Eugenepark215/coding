// Write an interface here
interface Directory {
  addFile: (name:string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    // eslint-disable-next-line no-console
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    // eslint-disable-next-line no-console
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
