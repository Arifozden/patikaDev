import * as fs from 'node:fs';


fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('DOSYA OLUŞTURULDU.');
});


/*
fs.readFile('employees.json', 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('DOSYA OKUNDU.');
});
*/

/*
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 5000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('YENİ VERİ EKLENDİ');
})
*/

/*
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log('DOSYA SİLİNDİ');
})
*/
