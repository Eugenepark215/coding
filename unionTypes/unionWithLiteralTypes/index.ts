type Status = 'idle' | 'downloading' | 'complete';
function downloadStatus(status: Status) {
  if (status === 'idle') {
    // eslint-disable-next-line no-console
    console.log('Download');
  } else if (status === 'downloading') {
    // eslint-disable-next-line no-console
    console.log('Downloading...');
  } else if (status === 'complete') {
    // eslint-disable-next-line no-console
    console.log('Your download is complete!');
  }
}
downloadStatus('idle');

export {};
