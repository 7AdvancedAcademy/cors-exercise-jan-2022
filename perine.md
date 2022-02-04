# CORS exercise responses

## 1 - Installation steps

- Make a git clone from https://github.com/7AdvancedAcademy/cors-exercise
- Move to the folder containing cloned repository using cd cors-exercise
- cp .env.example .env (because our application load configuration from .env file)
- npm i
- npm run dev


## 2 - Use of CORS (Cross-Origin Resource Sharing)

The configuration of CORS in express application consists to allow third party to make request to this server without be blocked by CORS policy. To do this, we just have to set header response of our express application before load routing.
Necessary parameters to use to configure CORs are :
- "Access-Control-Allow-Origin": "*" (here we allow all request made by any third party)
- "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization" (here we allow all request headers provided by any third party and are included in this string)
- "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE" (here we allow all request methods by any third party when request is made)

In the code provided in server.js, we can see how to configure CORS manually (Line 7 to line 21).


## 3 - Configuration of our frontend application