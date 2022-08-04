# feathers-chat

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feathers-chat
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Hook Notes

Use a hook when
- The functionality can be used in more than one place (e.g. validation, permissions etc.)
- It is not a core responsibility of the service and the service can work without it (e.g. sending an email after a user has been created)

Extend a service when
-The functionality is only needed in this one place
-The service could not function without it

Create your own (custom) service when
-Multiple services are combined together (e.g. reports)
-The service does something other than talk to a database (e.g. another API, sensors etc.)
