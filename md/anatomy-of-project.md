# Anatomy of project

1. Model - data shown to all users. POJO.
2. View - users see when visit the page
3. Controller - apps bussines logic
4. Scope - context holds data models and functions. Controller sets these models and views to scope.
5. Directives - built in html.
6. Expressions - represented by {{}}. Usefull for accessing scope models and functions.
7. Template - html with additional markup.

## Whats happen by angularjs launch?

1. app bootstraps with ```ng-app``` attribute(directive)
2. ```ng-init```init data-models
3. ```ng-model``` bind data-models


## Architechture patterns
### MVVM 
For build declarative UIs. ViewModel is pure representation of business data. 

### MVC
1. *Controller* - handles input. Calls the code, bussiness rules and share data with view using ```$scope```. 
2. *Model* - represents data drives UI.
3. *View* - dispaly data from business logic using ```$scope```.

```$scope``` is glue , way *controller* and *view* are not aware from each other.