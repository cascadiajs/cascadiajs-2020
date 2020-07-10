/* eslint-disable no-undef */
(async function() {
    const params = new URLSearchParams()
    params.append('query', '{accountsByPlaceID(placeID:"PLl3qny94g6o25jqgqdxmy1kzpe7dx0v"){name,nickname,image}}')
    const response = await fetch('https://fizbuz.com/graphql', {
        method: 'POST',
        body: params
    })
    const attendeeData = await response.json()
    const section = attendeeData.data.accountsByPlaceID
        .map(a => `<div><a href="https://fizbuz.com/u/${a.nickname}" target="_new"><img src="${a.image}" alt="${a.name}"/></a></div>`)
        .join("")
    document.getElementById('attendees-pics').innerHTML = section
})()