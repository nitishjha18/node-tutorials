import http from 'node:http'
import { getDataFromDB } from './db.js'
import { dryer } from './dryer.js'

const server = http.createServer(async (req, res) => {
    
    const destinations = await getDataFromDB()

    if(req.url === "/api" && req.method === "GET") {    
        dryer(res, 200, destinations)
    } else if(req.url.startsWith("/api/continent") && req.method === "GET"){
        const continent = req.url.split('/').pop()
        const filterData = destinations.filter((destination) => {
            return destination.continent.toLocaleLowerCase() === continent.toLocaleLowerCase()
        }) 
        dryer(res, 200, filterData)
    }else if(req.url.startsWith("/api/country") && req.method === "GET"){
        const country = req.url.split('/').pop()
        const filterData = destinations.filter((destination) => {
            return destination.country.toLocaleLowerCase() === country.toLocaleLowerCase()
        }) 
        dryer(res, 200, filterData)
    } else {
        dryer(res, 404, ({
            error: "not found", 
            message: "The path does not exist"
        })
        )
    }
})

const PORT = 8000

server.listen(PORT, console.log(`Open the server created by you: http://localhost:${PORT}`))

// 22:13:37