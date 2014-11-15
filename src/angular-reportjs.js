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

            scope.$watchGroup([attrs.reportData, attrs.layout], function(values) {
                data = values[0];
                layout = values[1];
                render(data, layout);
            }, true);
        }
    };

});
