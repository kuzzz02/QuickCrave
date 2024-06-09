# Pre-configuration before starting project

## Environments
- React-Native
- yarn
- Android Studio (sdk 34)
- Springboot
- MYSQL
- Docker (an option for packaging back-end codes)

## Front-End File Structure
```
|- android
    |- app
|- ios
|- assests
|- src
|   |- common
|   |- components
|   |- middleware
|   |- services
|   |- pages
|   |- App.js
|   |- http.js
|- index.js
|- package.json
|- yarn.lock
|- .gitignore

```

- `android`: android project directory
- `app`: compile and build config
- `ios`: ios project directory
- `assests`: fonts requirement
- `src`: source code
- `common`: static resource
- `components`: components
- `middleware`: middleware
- `services`: interfaces request
- `pages`: views
- `App.js`: root component
- `http.js`: axios root component
- `index.js`: project root component
- `package.json`: dependency config
- `yarn.lock`: dependency --version manager
- `.gitignore`: git ignore unnecessary files

## Start Front-end app
- Access main folder
```
cd client or cd vendor
```

- Package manager
```
npm install -g yarn
yarn
```

- start project
```
yarn android
```


---
## Back-End File Structure
```
|- src
|   |- main
|       |- java
|           |- config
|           |- model
|           |- mapper
|           |- service
|           |- controller
|           |- middleware
|           |- utility
|           |- QuickCraveBackEndApplication
|       |- resources
|           |- mapper
|           |- sql
|           |- static
|           |- application.properties
|- .gitignore
|- compose.yaml
|- Pom.xml

```

- `src`: source code
- `main`: main development
- `config`: config, mainly databaseConfig
- `model`: database tables model
- `mapper`: mapping model control to mapper.xml
- `service`: smallest unit to control a model
- `controller`: forward requests from front-end to service
- `middleware`: middleware, mainly AliPayController
- `utility`: utility, mainly Response widget used in Controllers
- `resources`: static resources
- `sql`: sql files
- `static`: images
- `QuickCraveBackEndApplication`: main application
- `application.properties`: root config of main application
- `.gitignore`: git ignore unnecessary files
- `compose.yaml`: MYSQL settings integrated with Docker
- `Pom.xml`: Dependency config and management


## Start Back-End 

- create database
```
create database qcdb;
create user 'qc'@'%' identified by 'qc123456';
grant all on qcdb.* to 'qc'@'%';
```

- initialize database
```
mysql -u qc -p
```

- data directory
```
sql files  -> QuickCrave-BackEnd/src/main/resources/sql
static images  -> QuickCrave-BackEnd/src/main/resources/static
```

- initialize tables
```
source *.sql
```

- start project
```
mvn package
java -jar QuickCrave-BackEnd-1.0.0.jar
```
- if any dependency problems occurred
```
mvn dependency:resolve
```

## Cloud server address
- https://8.130.37.157:12581/


# Developer Manual

## Core functionality

Our core design aims to provide handy,smooth and quick take-away function to users.

### Client


## Database Design

Database disignning follows rule of **Try best to abstract and handle every possible property in models**


- `user`,`vendor`,`delivery`: three models all extend a base model
- `goods`: goods model
- `orders`: orders model  

## Interface Design

Interfaces designning follows rule of **model -> mapper -> service -> controller**  
You can use `Postman` or other tools to test interfaces if needed.


- Common Controllers
    1. selectAll: `/selectAll`
    2. selectByName: `/selectByName`  
       * @param {String} name
    3. selectById: `/selectById`  
       * @param {Long} id
    4. deleteAll: `/deleteAll`
    5. delete: `/delete`  
       * @param {Long} id
    6. updateXXX: `/update`  
       * @param {Long} id
       * @param {String} XXX  (update functions are for every single property, so please change XXX if needed)

- `user`,`vendor`,`delivery`: similiar models introduce similiar methods  
  interface address: `/user`,`/vendor`,`/delivery`  
    1. insert: `/insert`  
        params:name,password
    2. login: `/login`
    3. singup: `/signup` (both of these should post a json body, not params)

- `goods`
  interface address: `/goods`
    1. insert: `/insert`
       * @param {String} name
       * @param {String} description
       * @param {String} image
       * @param {String} number
       * @param {String} price
       * @param {String} discount
       * @param {Long} vendor_id
- `orders`
  interface address: `/orders`
    1. insert: `/insert`
       * @param {String} orders_id
       * @param {String} goods_id
       * @param {long} user_id
       * @param {Long} vendor_id
       * @param {Long} delivery_id
       * @param {String} state
       * @param {String} date
       * @param {String} address
       * @param {String} phone
       * @param {String} payment
       * @param {String} total
- `image`
  interfaces address: `/image`
    1. getVendorimage: `/vendor`
    2. getGoodsimage: `/goods`
    3. getUserimage: `/user`
    4. getDeliveryimage: `/delivery`
       * @param {String} imageName (same param for all controllers)
- `fileupload`
  interfaces address: `/files`
    1. uploadVendorimage: `/vendor`
    2. uploadGoodsimage: `/goods`
    3. uploadUserimage: `/user`
    4. uploadDeliveryimage: `/delivery`
       * @param {file} file (same param for all controllers)