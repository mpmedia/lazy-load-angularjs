define(['../../shared/lazyload/stateDependencyResolverFor', 'modules/showcase/ShowCaseModule.config','../../shared/lazyload/makeModuleLazyLoadable'], function(stateDependencyResolverFor, stateConfig, makeModuleLazyLoadable) {

    var mod = angular.module('showcase', ['ngRoute', 'ui.router', 'ajoslin.promise-tracker', 'ngSanitize']);

    makeModuleLazyLoadable('showcase');

    mod.config([ '$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
    
    $stateProvider
        .state('showcase', {	
            url: "/showcase",
            templateUrl: "modules/showcase/views/showcase.tpl.html",
            resolve:  stateDependencyResolverFor(stateConfig.showcase)
        })
    }]);
    return mod;
    
});