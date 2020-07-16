const fetch = require('node-fetch')
const fs = require('fs')
// for pushing speakers to staging & prod
//const speakerData = require('../data/prod/speakers.json')

async function uploadCodes(env, password) {
    // set-up the API URL
    let url
    if (env === 'testing') {
        url = 'http://localhost:3333'
    }
    else  {
        url = `https://${ env === 'staging' ? 'staging.' : '' }2020.cascadiajs.com`
    }

    // read the proper file
    let codesData = JSON.parse(fs.readFileSync(`./data/${ env }/codes.json`).toString())

    // log-in
    const params = new URLSearchParams()
    params.append('password', password)
    let login = await fetch(`${url}/login`, {method: 'POST', body: params, redirect: 'manual'})

    // get the session cookie
    let cookie = login.headers.get('set-cookie')

    // upload the speakers
    let codes = await fetch(`${url}/codes`, {
        method: 'POST',
        headers: {cookie, 'Content-Type': 'application/json'},
        body:    JSON.stringify(codesData),
    })
    const result = await codes.json()
    console.log(result)
}

function main() {
    let env = process.argv[2]
    let password = process.argv[3]
    uploadCodes(env, password)
}

main()