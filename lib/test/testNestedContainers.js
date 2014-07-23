/**
 * Test the entire index of the application to show that the workflow and
 * injection all happen correctly.
 **/

var assert = require('assert'),
    intra = require('intravenous');
    
describe('nestedContainers', function() {
    it('testingOneContainer', function() {
        var container = intra.create();
        container.register('test1', {'data': 'testData'});
        container.register('test2', {'data': 'testData2'});
        
        var myClass = function(test1, test2) {
            return {
                test: function() {
                    console.log("test1 = ", test1);
                    console.log("test2 = ", test2);
                }
            }
        };
        myClass.$inject = ["test1", "test2"];
        container.register("myClass", myClass);
        
        var instance = container.get('myClass');
        instance.test();
        
    });
    
    describe('#multipleContainers', function() {
        // it("Should work with non-nested containers", function() {
        //     var container = intra.create();
        //     var container2 = intra.create();
        //     container.register('test1', {'data': 'testData'});
        //     container.register('test2', {'data': 'testData2'});
        //     container2.register('test3', {'data': 'testData3'});
            
        //     var myClass = function(test1, test2) {
        //         return {
        //             test: function() {
        //                 console.log("test1 = ", test1);
        //                 console.log("test2 = ", test2);
        //             }
        //         }
        //     };
            
        //     var myClass2 = function(test3) {
        //         return {
        //             test: function() {
        //                 console.log("Test3 = ", test3);
        //             }
        //         }
        //     }
        //     myClass.$inject = ["test1", "test2"];
        //     myClass2.$inject = ["test3"];
        //     container.register("myClass", myClass);
        //     container2.register("myClass", myClass2);
            
        //     var instance = container.get('myClass');
        //     var instance2 = container2.get('myClass');
        //     instance.test();
        //     instance2.test();
        // });
        
        it("should test nested containers", function() {
            var container = intra.create();
            var container2 = container.create();
            container.register('test1', {'data': 'testData'});
            container.register('test2', {'data': 'testData2'});
            container2.register('test3', {'data': 'testData3'});
            
            var myClass = function(test1, test2) {
                return {
                    test: function() {
                        console.log("test1 = ", test1);
                        console.log("test2 = ", test2);
                    }
                }
            };
            
            var myClass2 = function(test3) {
                return {
                    test: function() {
                        console.log("Test3 = ", test3);
                    }
                }
            }
            myClass.$inject = ["test1", "test2"];
            myClass2.$inject = ["test3"];
            container.register("myClass", myClass);
            container2.register("myClass", myClass2);
            
            var instance = container.get('myClass');
            var instance2 = container2.get('myClass');
            instance.test();
            instance2.test();
        });
        
        it("can handle controller containers better", function() {
            var serviceContainer = intra.create();
            var controllerContainer = serviceContainer.create();

            serviceContainer.register('test1', {'data': 'testData'});
            serviceContainer.register('test2', {'data': 'testData2'});

            var aController = function(test1, test2) {
                return {
                    test: function() {
                        console.log("test1 = ", test1);
                        console.log("test2 = ", test2);
                    }
                }
            };

            aController.$inject = ["test1", "test2"];
            controllerContainer.register('aController', aController);
            
            var thisController = controllerContainer.get('aController');
            console.log("Before dispose, controller = ", aController);
            
            controllerContainer.dispose();
            
            var thisController2 = controllerContainer.get('aController');
            console.log("After dispose, controller = ", aController);
        });        
    });
    
});