# **CRM Sample App Documentation**

[![CI/CD](https://github.com/melvicgomez/crm-sample-app/actions/workflows/main.yml/badge.svg)](https://github.com/melvicgomez/crm-sample-app/actions/workflows/main.yml)

### **Prerequisite**
* npm - https://nodejs.org/en/download/
* serve - Install serve package globally to your machine `npm install -g serve`

### **Lert's Get Started**
* Clone this repo to your designated directory
  * Clone via SSH - `git@github.com:melvicgomez/crm-sample-app.git`
  * Clone via HTTPS - `git clone https://github.com/melvicgomez/crm-sample-app.git`
* Create a file `.env` in the root directory by copying the `.env.example` file
* In `.env` file, change the environment variables to target your backend
```
DOMAIN=http://crm-app.melvicgomez.com
REACT_APP_API_URL=$DOMAIN/api
```

### **How to start the app**
* After you clone the repo, run the command `npm i` in the root directory
* Once you finished installing all the dependencies, you can run:
  * `npm start` - to run the app in development
  * `npm build ` - to build the app for production, you can serve/run the production build by running the command `serve -s build`
  * `npm test -- --coverage` - to run all test scripts


### **What to expect next?**
* **Add Products** to use the customers' data and link to products
* **Authentication** for data security and we can identify who added the customer data
* **Reports** for analytics of customers coming in from a period of time
* **Google Analytics** track all the sources of traffic (demographics, country and etc)

### **Troubleshooting**
* You can contact me thru connect@melvicgomez.com, if you need assistance on how to setup the app.

### *You are all set now! Happy Coding!*