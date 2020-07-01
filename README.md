# Zupper's Chat

# Configuration:

In order to work properly, you need to first open your application folder in terminal, then type the comand "yarn" in order to install all the needed dependencies:

```
~$ cd zupper-chat/ZupperChat

~/zupper-chat/ZupperChat$ yarn
```

# Commands:

In order to start the application in development mode, simply run "expo start",
since it's defaulted to this enviroment:

```
~/zupper-chat/ZupperChat$ expo start
```

If you want to run in mock mode, run the following command:

```
~/zupper-chat/ZupperChat$ yarn mock:api
```

Your network service will run on port 8080.

# Environment:

To properly configure your mock environment, first open the .env archive on the root of your expo project and modify the API_URL address, placing your IP address on the following location:

**.env**
```
NODE_ENV=mock
API_URL=http://YOUR_IP_ADDRESS:8080

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

NODE_ENV=mock
API_URL=http://000.000.0.000:8080
```

Also place the ip address in the host key of the Hapi server on the index archive of your stub folder:

**stub/index.js**
```javascript
//...

const server = Hapi.server({
  host: "YOUR_IP_ADDRESS",
  port: 8080,
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Content-Type"],
    },
  },
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const server = Hapi.server({
  host: "000.000.0.000",
  port: 8080,
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Content-Type"],
    },
  },
});

//...
```

Finally place the ip address in the API_URL key in the extra configuration of the app.config archive:

**app.config.js**
```javascript
//...

    extra: {
      API_URL: "http://YOUR_IP_ADDRESS:8080",
      NODE_ENV: process.env.NODE_ENV,
    },
  },
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//...

    extra: {
      API_URL: "http://000.000.0.000:8080",
      NODE_ENV: process.env.NODE_ENV,
    },
  },
};
```