var MyApp = angular.module('MyApp', []);

MyApp.controller('AppController', function ($http, $scope, imageService) {

    $scope.articles = [];
    $scope.numberart =12;
    $scope.filt;
    $scope.adding = { visible: false };
    $scope.sortparam = 'published_date';
    $scope.sortReverse = true;
    $http.get('https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/30.json?api-key=bbb874dea812408089eac976c2cc34c1')
        .success(function (result) {
            $scope.articles = result.results;
        });

    $scope.Addarticle = function (titlee, abstracte, url, sectione) {
        $scope.articles.push({
            url: url,
            count_type: "EMAILED",
            column: "",
            section: sectione,
            byline: "BY Chisel",
            title: titlee,
            abstract: abstracte,
            published_date: new Date().toDateString(),
            source: "My house)",
            des_facet: ["BOOKS AND LITERATURE"],
            org_facet: "",
            per_facet: "",
            geo_facet: "",
            media: imageService.media
        });
    };
    $scope.images = function (article) {
        for (var i = 0; i < 3; i++) {
            if (article.media[0]["media-metadata"][i].width == 210){
                return article.media[0]["media-metadata"][i].url;
            }
        }
    }

});