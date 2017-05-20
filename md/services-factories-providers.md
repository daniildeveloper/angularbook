# Services & Factories & Providers

Main purpose of this components is that thay hold some logic that required multiple times in app, are injectable(Dependency Injection).

## Service

- encapsulate specific logic
- expose API to be use by other components

**Examples**: 
- built-in ```$timeout``` service execute function after specifed interval
- ```$http``` used to iteract with rest backends

We ask Angular to inject this services to use they in controllers.

> AngularJs Sevices are always singletons

### Register service

```js
/**
@param helloService - service name
@param function init service
*/
angular.module("module").service("helloService", function() {
    this.sayHello = function() {//define instance method
        console.log("Hello!");
    }
});
```

### Eager load for service
```js
    angular.module("myApp.wishlist").run(function(helloService) {
        helloService.sayHello();
    });
```
Service is loaded lazy. To load after module initializatiuon use ```module().run(service)```.

### Important things about ```service```
- register with ```service()``` function of ```angular.module()```
- angular create service from second argument - function.
- service is singleton
- lazily instant

## Factory

Factory is fast same as ```service``` but configurable and are singletoons to, but configurable. Can dependt from another services and factories.

```js
module("some").factory("helloFactory", function () {
        return {
            sayHello: function (name) {
                console.log("Hello, " + name);
            },
            echo: function (message) {
                console.log(message);
            }
        }
    })
```