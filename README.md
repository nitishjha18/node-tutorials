# 🌍 Travel API

A simple Node.js REST API for travel destinations with filtering by continent, country, and accessibility.

## Quick Start

```bash
git clone https://github.com/nitishjha18/travel-api.git
cd travel-api
npm start
```

Server runs at `http://localhost:8000`

---

## Features

- Filter by continent, country, public status
- Simple query & path parameters
- Pure Node.js (no dependencies)
- JSON response format

---

## Project Structure

```
travel-api/
├── Server.js                 # Main server
├── Database/
│   ├── db.js                # Data layer
│   └── data.js              # Destination data
├── Utils/
│   ├── getDataByPathParam.js
│   ├── getDataByQueryParam.js
│   └── sendJsonResponse.js
└── package.json
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api` | All destinations (with filters) |
| GET | `/api/continent/:name` | By continent |
| GET | `/api/country/:name` | By country |

---

## Query Parameters

Use with `/api` endpoint:

```
?continent=Asia
?country=India
?is_open_to_public=true
?limit=10
```

Combine them: `?continent=Asia&country=India&limit=5`

---

## Examples

```bash
# All destinations
curl http://localhost:8000/api

# Asian destinations
curl "http://localhost:8000/api?continent=Asia"

# By path parameter
curl http://localhost:8000/api/country/India

# Limited results
curl "http://localhost:8000/api?limit=5"
```

---

## Response Format

**Success (200 OK):**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1,
      "name": "Taj Mahal",
      "continent": "Asia",
      "country": "India",
      "is_open_to_public": true,
      "description": "White marble mausoleum"
    }
  ]
}
```

**Error (404):**
```json
{
  "error": "not found",
  "message": "The path does not exist"
}
```

---

## JavaScript Fetch Example

```javascript
// Get all
fetch('http://localhost:8000/api')
  .then(res => res.json())
  .then(data => console.log(data));

// With filters
fetch('http://localhost:8000/api?continent=Asia&limit=5')
  .then(res => res.json())
  .then(data => console.log(`Found ${data.count} destinations`));
```

---

## Common Issues

| Problem | Solution |
|---------|----------|
| Port 8000 in use | Change `PORT` in Server.js or kill process: `lsof -i :8000` |
| 404 errors | Check endpoint spelling: `/api`, `/api/continent/Asia`, `/api/country/India` |
| Empty results | Verify continent/country names match data |
| CORS errors | Add headers to Server.js response |

---

## Future Ideas

- [ ] Add POST/PUT/DELETE endpoints
- [ ] Database integration (MongoDB)
- [ ] Authentication
- [ ] API documentation (Swagger)
- [ ] Rate limiting
- [ ] Caching with Redis
- [ ] Cloud deployment

---

## Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add feature"`
4. Push: `git push origin feature/your-feature`
5. Submit pull request

---

## License

ISC

## Author

**Nitish Jha** - [@nitishjha18](https://github.com/nitishjha18)

---

**Need help?** Check [GitHub Issues](https://github.com/nitishjha18/travel-api/issues) or create a new one.
