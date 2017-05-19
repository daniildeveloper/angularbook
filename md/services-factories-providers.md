# Services & Factories & Providers

Main purpose of this components is that thay hold some logic that required multiple times in app, are injectable(Dependency Injection).

## Service

- encapsulate specific logic
- expose API to be use by other components

**Examples**: 
- built-in ```$timeout``` service execute function after specifed interval
- ```$http``` used to iteract with rest backends

We ask Angualar to inject this services to use they in controllers.

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