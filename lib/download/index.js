"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.download = void 0;
function download(url, name = '', query = '') {
    const link = document.createElement('a');
    link.style.display = 'none';
    if (query) {
        link.href = `${url}?${query}`;
    }
    if (name) {
        link.setAttribute('download', name);
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
exports.download = download;
function downloadFile(data, name, query = '') {
    if ('msSaveOrOpenBlob' in navigator) {
        let blob = new Blob([data], { type: 'text/plain' });
        let url = window.navigator.msSaveOrOpenBlob(blob, name);
        let link = document.createElement('a');
        link.href = `${String(url)}?${query}`;
        link.target = '_blank';
        document.body.appendChild(link);
    }
    else {
        let url = window.URL.createObjectURL(new Blob([data], { type: 'application/octet-stream' }));
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = `${url}?${query}`;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
exports.downloadFile = downloadFile;
