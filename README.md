# Zupper's Chat

### Note:

Unfortunately, the backend of the application isn't ready yet, but you can have an idea of how it's supposed to work by running the mock command, explained in the "Commands" section!!

# Configuration:

In order to work properly, first intall globally in your machine the [Expo](https://docs.expo.io/) framework, by running the following command: 

```
~$ npm install --global expo-cli
```

Then, being eiter a mobile device or a mobile simulator, install the [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) app in it.

Afterward, open your application folder in terminal, then type the comand "yarn" in order to install all the needed dependencies:

```
~$ cd zupper-chat/ZupperChat

~/zupper-chat/ZupperChat$ yarn
```

Finally, run one of the commands in the section bellow according to what you want to evaluate, and then scan the QR code that will show up on your terminal, if you're using a device, or copy the link to your simulator:

![terminal](/Images/README/terminal.jpeg)


# Commands:

First, intall globally in your machine the [Expo](https://docs.expo.io/) framework, by running the following command: 

```
~$ npm install --global expo-cli
```

In order to start the application in development mode, simply run "expo start",
since it's defaulted to this enviroment:

```
~/zupper-chat/ZupperChat$ expo start
```

After running the command, 

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

# Contributors:

* [@luisalichfett](https://github.com/luisalichfett)