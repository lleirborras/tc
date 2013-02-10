TC.DOM = (function(){

    var query = function(pattern){
        var element = new TC.DOM.Element($(pattern));
        return element;
    };

    var editables = function() {
        return TC.DOM.$$("div[data-edit='true']");
    };

    var create_element = function(element, value, attributes) {
        var new_element = new TC.DOM.Element($(document.createElement(element)));

        if(value)
            new_element.inner_html(value);

        if(attributes) {
            TC.each(attributes, function(index, value) {
                new_element.attr(index, value);
            });
        }

        return new_element;
    };

    var create_text_element = function(string) {
        var new_element = new TC.DOM.Element($(document.createTextNode(string)));

        return new_element;
    };

    return {
        $$: query,
        editables: editables,
        create_element: create_element,
        create_text_element: create_text_element
    };
})();
