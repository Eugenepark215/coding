'use strict';
exports.__esModule = true;
var DesktopDirectory = /** @class */ (function () {
  function DesktopDirectory() {
    this.config = {
      default: {
        encoding: 'utf-8',
        permissions: 'drw-rw-rw-'
      }
    };
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
// eslint-disable-next-line no-console
console.log(Desktop.config);
