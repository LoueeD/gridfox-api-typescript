import { GridfoxAPI } from './gridfox';
import './style.css';

const tables: HTMLElement = document.getElementById('tables');
const groups: HTMLElement = document.getElementById('groups');
const permissions: HTMLElement = document.getElementById('permissions');
const records: HTMLElement = document.getElementById('records');

const gridfox = new GridfoxAPI({
  apiKey:
    'resources.KiHHuFhZD1vhn8XcWwriqIhWqR74cFO4htMGWaZEukjatKnO2zfpZjzf5sPvGf9E',
});

gridfox.tables.list().then((res) => {
  tables.innerHTML = JSON.stringify(res.data, undefined, 2);
  res.data.forEach((table) => {
    const el = document.createElement('details');
    const sum = document.createElement('summary');
    const pre = document.createElement('pre');
    sum.innerHTML = 'Tables / ' + table.name;
    pre.innerHTML = 'loading...';
    gridfox.data.searchRecords(table.name, { Paged: false }).then((res) => {
      pre.innerHTML = JSON.stringify(res.data, undefined, 2);
    });
    el.appendChild(sum);
    el.appendChild(pre);
    records.appendChild(el);
  });
});

gridfox.groups.list().then((res) => {
  groups.innerHTML = JSON.stringify(res.data, undefined, 2);
});

gridfox.permissions.list().then((res) => {
  permissions.innerHTML = JSON.stringify(res.data, undefined, 2);
});
