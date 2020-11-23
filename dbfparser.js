const parseDBF = require('parsedbf')
const fsi = require('fs-iconv')
const iconv = require('iconv-lite')
// const iconv = fsi.iconv;
// const fs = fsi.fs;
const fs = require('fs')
const { count } = require('console')
const file = './Расписание 2 неделя.DBF'
// let file = './demofile3.dbf';

/*
var dbfFile = fs.readFileSync(file);
var parsedDBF = parseDBF(dbfFile);
 console.log(parsedDBF);


fs.appendFile('mynewfile1.json', JSON.stringify(parsedDBF), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
 */

const model = {
  GROUP: '��-11',
  DAY: '1',
  LES: '2',
  AUD: '308',
  WEEK: '2',
  SUBG: '',
  POST: '',
  NAME: '��⨬���� �.�.',
  SUBJECT: '�����',
  SUBJ_TYPE: '���.',
  DATE: '7-09-2020',
  CAFEDRA: '���. ���',
  THEME: ''
}

// console.log(parsedDBF[0]);
// console.log(Object.keys(model)[0]);

// console.log(iconv.decode(parsedDBF[0].NAME, "cp866").toString());

fs.readFile(file, null, function read(err, data) {
  if (err) {
    throw err
  }
  // console.log(iconv.decode(parseDBF(data), "ascii"));

  const message = iconv.decode(data, 'cp866').toString().split('  ')
  let i = 0
  let count = 0
  const flag = true
  const mainArr = []
  let obj = {}
  message.forEach((element) => {
    if (element.length !== 0 && flag) {
      if (count == 0) {
      }
      if (i == 5 && element.replace(/ /g, '').length < 3) {
      } else {
        if (count == 0) {
          obj[Object.keys(model)[i]] = element
            .replace(/[A-Z]/g, '')
            .toString()
            .split(' ')[2]
          // console.log(Object.keys(model)[i], ':',element.replace(/[A-Z]/g, '').toString().split(' ')[2]);
        } else {
          obj[Object.keys(model)[i]] = element
          // console.log(Object.keys(model)[i], ':',element)
        }

        i++
        count++
      }
    }

    // if (i > Object.keys(model).length-1){
    if (i > 8) {
      // console.log('-------------------------');
      i = 0
      if (Object.keys(obj).length !== 0) {
        mainArr.push(obj)
      }
      obj = {}
    }
  })
  result = { data: mainArr }
  console.log(mainArr)
  // console.log(message);
  fs.appendFile('test.json', JSON.stringify(result), (err) => {
    if (err) {
      throw err
    }
    console.log('Saved!')
  })
})

/* var dbf = require('dbf-reader');
var fs = require('fs');

var buffer =fs.readFileSync('./Расписание 2 неделя.DBF')
var datatable = dbf.Dbf.read(buffer);
console.log(datatable);
if (datatable) {
    datatable.rows.forEach((row) => {
        datatable.columns.forEach((col) => {
            console.log(row[col.name]);
        });
    });
} */

/*
var Parser = require('node-dbf')
let parser = new Parser('/Расписание 2 неделя.DBF');

parser.on('start', (p) => {
    console.log('dBase file parsing has started');
});

parser.on('header', (h) => {
    console.log('dBase file header has been parsed');
});

parser.on('record', (record) => {
    console.log('Name: ' + record.firstName + ' ' + record.lastName); // Name: John Smith
});

parser.on('end', (p) => {
    console.log('Finished parsing the dBase file');
});

parser.parse();
 */
/* var Parser = require('node-dbf');

var parser = new Parser('/Расписание 2 неделя.DBF');

parser.on('start', function(p) {
    console.log('dBase file parsing has started');
});

parser.on('header', function(h) {
    console.log('dBase file header has been parsed');
});

parser.on('record', function(record) {
    console.log('Name: ' + record.firstName + ' ' + record.lastName); //# Name: John Smith
});

parser.on('end', function(p) {
    console.log('Finished parsing the dBase file');
});

parser.parse(); */
