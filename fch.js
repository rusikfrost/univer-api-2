const fetch = require('node-fetch')
const fs = require('fs')
/*
let body1 = {
    "_id": "5e849afc479a551e8273a80c",
    "name": "testbot 2",
    "service_name": "serv1",
    "wialon_host": "https://wialon.exmpl.ru",
    "wialon_token": "6b0dc20ce26aa3b643ff0227c2d12457AA5B1C78B3C3A7C2418CBE3FF93DA4517A7B8E53",
    "creator_id": "5e7cb1af862d8a4a57bdfe90",
    "pause": 1,
    "getOperationLog": true,
    "getRpmLog": true,
    "getVoltageLog": true,
    "getMaxSpeedLog": true,
    "getFuelTarir": true,
    "getFuelDrain": true,
    "timeFrom": 0,
    "timeTo": 0,
    "badSensorResult": "-348201.3876",
    "createdAt": "2020-04-01T13:45:32.652Z",
    "updatedAt": "2020-04-01T13:45:32.652Z"
}
*/
// let body = {'lang': 'it'}

/*
let urlencoded = new URLSearchParams();

let formBody = [];
for (var property in body) {
  let encodedKey = encodeURIComponent(property);
  let encodedValue = encodeURIComponent(body[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

let requestOptions = {
  method: 'PATCH',
  headers: {
    "Authorization": "Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab82cb263ea662405b5924fc7a309840d04fe8ed206111ff5fc48e388840938bcccaddd4adbd44900d4bbbf7090b183825ad74a32cb2e15b4bf0b6e286665f1f012a6602ac3b0adf7965776965d84b692ed0db4185dfdd4bfba6db95fc024cfe264e0d8e28602e3d10c61562767a9fe25d9929ca7cdf0a9e9d6c9b784ee0971f2d0c97ce1897704b4211f66d12a2047e544"
  },
};

fetch(`http://80.78.248.203:3003/users/lang/5e8358c47a37ad16821a419c?${formBody}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

function addServ(arg) {
  console.log('serv', arg[0])
  const params = {
    name: '1',
    creatorID: '5e7cb1af862d8a4a57bdfe90',
    accountID: 'arg[0]._id',
    wialonHost: 'https://wialon.exmpl.ru',
    wialonToken:
      '6b0dc20ce26aa3b643ff0227c2d12457AA5B1C78B3C3A7C2418CBE3FF93DA4517A7B8E53',
    activeFlag: '2'
  }

  console.log('params', params)
  fetch(`http://80.78.248.203:3003/service`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': ' application/json',
      Authorization: `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab82cb263ea662405b5924fc7a309840d04fe8ed206111ff5fc48e388840938bcccaddd4adbd44900d4bbbf7090b183825aee09a28b389938a49444148c60244bdc1277c04a9ef8cb2f768f858ffbfedec614155bbe3efc7a093463d67e85fd7c288cbb40bf02d33f259b6271c3654bfe7d8ab8a8172cfd4e809b4a00f8061913915b49ed3f0634eb1ce3efc65441894049`
    },
    body: JSON.stringify(params)
  })
    .then((response) => response.text())
    .then((result) => addRob(result, arg))
  console.log()
}

function addOrg() {
  console.log('org')
  const params = {
    name: '1',
    ownerID: '5e7cb1af862d8a4a57bdfe90',
    urlAddress: 'https://test.com',
    maxRobotsCount: '12',
    dtCreateUTC: '1234567890'
  }
  fetch(`http://localhost:3000/account`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': ' application/json',
      Authorization: `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab884ec08afddbc229c0d897bd46671d64fdad16a0a1113e616a3f2fa9d0342d9e076a4a8cc7dfd70d35d5a09443d134381e129bf0a5017eba86c15dc72286f8d6519f59c3b2fe086a3925a6bf2092ac4fe062acf01bb3af9a9c193a19fdcd15197b4465ebeefefad47771b25d59ca1d179f33b2415a36e25e4bd852f057d35d9dd2ec278bca85b7b93266c7d133640d955`
    },
    body: JSON.stringify(params)
  })
    .then((response) => response.text())
    .then((result) => addServ(result))
}

function addRob() {
  console.log('rob')
  const params = {
    name: '1',
    creator_id: '5e7cb1af862d8a4a57bdfe90',
    service_name: '23213',
    service_id: 'testServID',
    accountID: 'testOrgID',
    type_id: 4,
    active_flag: 12,
    notif_emails: ['1@mail.ty'],
    wialon_host: 'https://wialon.exmpl.ru',
    wialon_token:
      '6b0dc20ce26aa3b643ff0227c2d12457AA5B1C78B3C3A7C2418CBE3FF93DA4517A7B8E53',
    pause: 1,
    getOperationLog: true,
    getRpmLog: true,
    getVoltageLog: true,
    getMaxSpeedLog: true,
    getFuelTarir: true,
    getFuelDrain: true,
    timeFrom: 0,
    timeTo: 0,
    badSensorResult: '-348201.3876',
    robots_type_id: 1, // 0 -разовый 1 - систематически
    schedule_type_id: 2, // 0 -разовый 1 - систематически
    schedule: [
      {
        start_time: 1587038400,
        circle: 43200
      }
    ]
  }

  fetch(`http://localhost:3003/robots/5e99a2a47c100e10584df211`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      Host: '80.78.248.203:3003',
      Origin: 'http://127.0.0.1',
      'Content-Type': ' application/json',
      Authorization: `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab8a82fc13b58a3d8836fbe4096a2f35f5b6637e3c2c290cff2516497d638c1605ffa9917addfffe87245fb29bc0109c78810f7eff054f6b21671aed0bf6128473a1eec95e12f873b4ff10dc46feb00e7f8dbee92a47298f460decc1b2c2fedc43e0a6d993afe0ee8726441b90439d35494fb8dec28e32cb8e3337473ce8dc96bb39bac9af7a595b6a49450408e71d56950`
      // 'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab884ec08afddbc229c0d897bd46671d64fdad16a0a1113e616a3f2fa9d0342d9e076a4a8cc7dfd70d35d5a09443d134381e129bf0a5017eba86c15dc72286f8d6519f59c3b2fe086a3925a6bf2092ac4fe062acf01bb3af9a9c193a19fdcd15197b4465ebeefefad47771b25d59ca1d179f33b2415a36e25e4bd852f057d35d9dd2ec278bca85b7b93266c7d133640d955`
    },

    body: JSON.stringify(params)
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
  console.log()
}

function addS() {
  console.log('rob')
  const params = {
    prop_name: 'name',
    items_type: 'robots',
    prop_value_mask: '*'
  }

  fetch(
    `http://80.78.248.203:3003/search/byParams`,
    // fetch(`http://localhost:3000/search/byParams`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': ' application/json',
        // 'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab83b6cbe2b21bae86e17eea527563ecb020b7a4e5b241ff1c7d41e658bb510072d3feacf46aa73e12a6e780a63ab4dce9cb899e21d06a83d8013d965e1fc28da21a2b53603ab95bde646bc976984ea25b8b259096eae0db20b1cbcfc010ca23a173bb7a3ddd97122b91aa7073be4dcced872083d3b9710ef562492d853ac1c543e623843ab0c9ada2af72871d2830e3b0e`
        Authorization: `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab83b6cbe2b21bae86e17eea527563ecb02fb72f8611e3fe9fdcaebfe5329732f2ccd8762660bec82d1426c302a3a06113cf75ec541dc4e3c1953f1f61113ed98d66c78f729bd7a0a2fb5e78c091f43805d1e9a83360514a3ba274e27e684755d115702615a97cf8098d75849b138e67eefd05ffa0d8cf3e344d77d53008e952a7e2d1fdce9d4baf5f6abdd9c15675207ed`
      },

      body: JSON.stringify(params)
    }
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
  console.log()
}

function addSh() {
  console.log('rob')
  const params = {
    robot_id: '5e906333ac32237f9bf4563f',
    schedule_type_id: 1, // 0 -разовый 1 - систематически
    schedule: [
      {
        start_time: 1587038400,
        circle: 43200
      }
    ]
  }

  // fetch(`http://80.78.248.203:3003/search/byParams`,
  fetch(`http://localhost:3003/schedule`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': ' application/json',
      // 'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab83b6cbe2b21bae86e17eea527563ecb020b7a4e5b241ff1c7d41e658bb510072d3feacf46aa73e12a6e780a63ab4dce9cb899e21d06a83d8013d965e1fc28da21a2b53603ab95bde646bc976984ea25b8b259096eae0db20b1cbcfc010ca23a173bb7a3ddd97122b91aa7073be4dcced872083d3b9710ef562492d853ac1c543e623843ab0c9ada2af72871d2830e3b0e`
      Authorization: `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab8a82fc13b58a3d8836fbe4096a2f35f5b6637e3c2c290cff2516497d638c1605ffa9917addfffe87245fb29bc0109c78810f7eff054f6b21671aed0bf6128473a1eec95e12f873b4ff10dc46feb00e7f8dbee92a47298f460decc1b2c2fedc43e0a6d993afe0ee8726441b90439d35494fb8dec28e32cb8e3337473ce8dc96bb39bac9af7a595b6a49450408e71d56950`
    },

    body: JSON.stringify(params)
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
  console.log()
}

function addByTurnID() {
  console.log('rob')
  const params = {
    robot_id: '5e906333ac32237f9bf4563f',
    schedule_type_id: 1, // 0 -разовый 1 - систематически
    schedule: [
      {
        start_time: 1587038400,
        circle: 43200
      }
    ]
  }

  // fetch(`http://80.78.248.203:3003/search/byParams`,
  fetch(`http://84.201.151.123:3003/logs/5eaaeedf549c6026a0885836`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': ' application/json',
      // 'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab83b6cbe2b21bae86e17eea527563ecb020b7a4e5b241ff1c7d41e658bb510072d3feacf46aa73e12a6e780a63ab4dce9cb899e21d06a83d8013d965e1fc28da21a2b53603ab95bde646bc976984ea25b8b259096eae0db20b1cbcfc010ca23a173bb7a3ddd97122b91aa7073be4dcced872083d3b9710ef562492d853ac1c543e623843ab0c9ada2af72871d2830e3b0e`
      Authorization: `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab8936a82d28b343e74ccb51c30a3251c52fdb356dbbc4cc4233608f745f96a59584a274bdd141cedc0020536d1dfa88de62f0378fcb12d86b4644c6d3dbf3ad21d4d005be2562a69624e1f401c58b56cbab568f6b149121d8f4e43c56c8c4a5a614ea972898f73cb861fa0f6ce89bf0c99f656f1eb134984e943df5058e372fbcd8d3c3787f01caa1e84dd34f54589319c`
    }

    // body: JSON.stringify(params)
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
  console.log()
}

function resetPassword() {
  console.log('rob')
  const params = {
    id: 'c9d8fdd2-52fb-48bd-8220-3c9adeb39d72',
    password: 368368 // 0 -разовый 1 - систематически
  }

  // fetch(`http://80.78.248.203:3003/search/byParams`,
  fetch(`http://84.201.151.123:3003/reset`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': ' application/json'
      // 'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab83b6cbe2b21bae86e17eea527563ecb020b7a4e5b241ff1c7d41e658bb510072d3feacf46aa73e12a6e780a63ab4dce9cb899e21d06a83d8013d965e1fc28da21a2b53603ab95bde646bc976984ea25b8b259096eae0db20b1cbcfc010ca23a173bb7a3ddd97122b91aa7073be4dcced872083d3b9710ef562492d853ac1c543e623843ab0c9ada2af72871d2830e3b0e`
      // 'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab8936a82d28b343e74ccb51c30a3251c52fdb356dbbc4cc4233608f745f96a59584a274bdd141cedc0020536d1dfa88de62f0378fcb12d86b4644c6d3dbf3ad21d4d005be2562a69624e1f401c58b56cbab568f6b149121d8f4e43c56c8c4a5a614ea972898f73cb861fa0f6ce89bf0c99f656f1eb134984e943df5058e372fbcd8d3c3787f01caa1e84dd34f54589319c`
    },

    body: JSON.stringify(params)
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
  console.log()
}

function getNews() {
  console.log('rob')
  const params = {
    id: 'c9d8fdd2-52fb-48bd-8220-3c9adeb39d72',
    password: 368368 // 0 -разовый 1 - систематически
  }

  // fetch(`http://80.78.248.203:3003/search/byParams`,
  fetch(`http://80.78.248.203:3004/news/all`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': ' application/json',
      Authorization: `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab89508cd7bdfb804ca0f7843adbe070e564abab99c8cc2bbbcb7613feb280d097bae567fe7e482def9f27361c09739cec3fc6ce1eec8ef5046ca900278345ef457d723d71eabdbd22d38bacebaa7079b8df34a274c56f7773a79d25e826af43191a5c5f412fc84f1b4676360de3cad40561919b750bba68d3de90af343febaf6334c2756f3b27dffe4b5090ed7c94b4969`
      // 'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab8936a82d28b343e74ccb51c30a3251c52fdb356dbbc4cc4233608f745f96a59584a274bdd141cedc0020536d1dfa88de62f0378fcb12d86b4644c6d3dbf3ad21d4d005be2562a69624e1f401c58b56cbab568f6b149121d8f4e43c56c8c4a5a614ea972898f73cb861fa0f6ce89bf0c99f656f1eb134984e943df5058e372fbcd8d3c3787f01caa1e84dd34f54589319c`
    }

    // body: JSON.stringify(params)
  })
    .then((response) => response.status)
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
  console.log()
}

function upload_file() {
  // const stream = createReadStream('input.txt');
  // fetch('http://localhost:3000/upload', { method: 'POST', body: JSON.stringify(stream) })
  fetch('http://localhost:3000/upload')
    .then(
      (res) =>
        new Promise((resolve, reject) => {
          const dest = fs.createWriteStream('./input.txt')
          res.body.pipe(dest)
          res.body.on('end', () => resolve('it worked'))
          dest.on('error', reject)
        })
    )
    .then((x) => console.log(x))
    .catch((error) => console.log('error', error))
}

upload_file()

// resetPassword()

// addSh()
// addS()
// getNews()

// addRob();
// addOrg();
// addServ();

/*










let params = {
  "name": "Lena Bot",
  "creator_id": "5e7cb1af862d8a4a57bdfe90",
  "service_name": "23213",
  "service_id": "5e859da9d09b427299ff2c03",
  "type_id": 4,
  "active_flag": 12,
  //"notif_emails":["1@mail.ru", "2@bk.ru"],
  "notif_emails":[],
  //"options": {
    "wialon_host": "https://wialon.exmpl.ru",
    "wialon_token": "6b0dc20ce26aa3b643ff0227c2d12457AA5B1C78B3C3A7C2418CBE3FF93DA4517A7B8E53",
    "pause": 1,
    "getOperationLog": true,
    "getRpmLog": true,
    "getVoltageLog": true,
    "getMaxSpeedLog": true,
    "getFuelTarir": true,
    "getFuelDrain": true,
    "timeFrom": 0,
    "timeTo": 0,
    "badSensorResult": "-348201.3876",
  //}
}

//fetch(`http://localhost:3000/robots`,
fetch(`http://80.78.248.203:3003/robots`,
            {
               method: 'POST',
               headers : {
                  'Accept': 'application/json',
                   'Content-Type':' application/json',
                   'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab82cb263ea662405b5924fc7a309840d04fe8ed206111ff5fc48e388840938bcccaddd4adbd44900d4bbbf7090b183825ad74a32cb2e15b4bf0b6e286665f1f012a6602ac3b0adf7965776965d84b692ed0db4185dfdd4bfba6db95fc024cfe264e0d8e28602e3d10c61562767a9fe25d9929ca7cdf0a9e9d6c9b784ee0971f2d0c97ce1897704b4211f66d12a2047e544`
                   //'Authorization' : `Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab884ec08afddbc229c0d897bd46671d64fdad16a0a1113e616a3f2fa9d0342d9e076a4a8cc7dfd70d35d5a09443d134381e129bf0a5017eba86c15dc72286f8d6519f59c3b2fe086a3925a6bf2092ac4fe062acf01bb3af9a9c193a19fdcd15197b4465ebeefefad47771b25d59ca1d179f33b2415a36e25e4bd852f057d35d9dd2ec278bca85b7b93266c7d133640d955`
               },

               body: JSON.stringify(params)

           }).then(response => response.text())
             .then(result => console.log(result))
             console.log();





*/

/*
var urlencoded = new URLSearchParams();
const body = urlencoded.append('lang' , 'lt');

fetch('http://localhost:3000/users/lang/5e8358c47a37ad16821a419c', {
        method: 'patch',
        //body:    JSON.stringify(body),
        headers: { "Authorization": "Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab82cb263ea662405b5924fc7a309840d04fe8ed206111ff5fc48e388840938bcccaddd4adbd44900d4bbbf7090b183825ad74a32cb2e15b4bf0b6e286665f1f012a6602ac3b0adf7965776965d84b692ed0db4185dfdd4bfba6db95fc024cfe264e0d8e28602e3d10c61562767a9fe25d9929ca7cdf0a9e9d6c9b784ee0971f2d0c97ce1897704b4211f66d12a2047e544" },
        body: body
    })
    .then(res => res.json())
    .then(json => console.log(json));

*/
// let myHeaders = new Headers1();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
/*
let urlencoded = new URLSearchParams();
urlencoded.append('lang' , 'lt');

let requestOptions = {
  method: 'PATCH',
  headers: {
    "Authorization": "Bearer 0e4d596a1d6ec5461fb7b48c1efe535702f6c69534a4c7e1ed96b02d08e1937cec211747b5d350bf5ae43a2dcfc11ab82cb263ea662405b5924fc7a309840d04fe8ed206111ff5fc48e388840938bcccaddd4adbd44900d4bbbf7090b183825ad74a32cb2e15b4bf0b6e286665f1f012a6602ac3b0adf7965776965d84b692ed0db4185dfdd4bfba6db95fc024cfe264e0d8e28602e3d10c61562767a9fe25d9929ca7cdf0a9e9d6c9b784ee0971f2d0c97ce1897704b4211f66d12a2047e544"
  },
  body: urlencoded,
  //redirect: 'follow'
};

fetch("http://80.78.248.203:3003/users/lang/5e8358c47a37ad16821a419c", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/
