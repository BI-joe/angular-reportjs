angular.module('reportjs', []);

angular.module('reportjs').directive('reportJs', function() {

    return {
        restrict: 'EA',
        link: function(scope, element, attrs) {
            var data, layout;

            function render (data, layout) {
                if (angular.isObject(data) && angular.isObject(layout)) {
                    element.empty();
                    var renderer =new reportjs.Renderer();
                    renderer.renderTo(element, {
                        data: data,
                        layout: layout
                    });
                }
            }

            scope.$watch(attrs.reportData, function(value) {
                data = value;
                render(data, layout);
            }, true);

            scope.$watch(attrs.layout, function(value) {
                layout = value;
                render(data, layout);
            }, true);
        }
    };

});
