async function getHeros () {
    const request = await fetch ('https://weatherbit-v1-mashape.p.rapidapi.com/current')
    const data = await request.json()

    return console.log(data)
    }
