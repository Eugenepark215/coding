var DesktopDirectory = /** @class */ (function () {
  // eslint-disable-next-line
  function DesktopDirectory() {
  }
  DesktopDirectory.prototype.addFile = function (name) {
    // eslint-disable-next-line no-console
    console.log('Adding file: '.concat(name));
  };
  DesktopDirectory.prototype.showPreview = function (name) {
    // eslint-disable-next-line no-console
    console.log('Opening preview of file: '.concat(name));
  };
  return DesktopDirectory;
}());
var Desktop = new DesktopDirectory();
Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
