
const POKE_API = 'https://catfact.ninja/fact';

exports.handler = async function () {
  const response = await fetch(POKE_API)
  const data = await response.json()

  // console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}