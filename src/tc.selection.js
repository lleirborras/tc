TC.Selection = function() {
    this._selection = rangy.getSelection();
};

TC.Selection.prototype = {
    range: function(i){
        return this._selection.getRangeAt(i || 0);
    },

    range_count: function(){
        return this._selection.rangeCount();
    },

    node: function(i) {
        var parent_element = this.range(i || 0).commonAncestorContainer,
            element        = null;

        if (parent_element.nodeType == 3)
            parent_element = parent_element.parentNode;

        element = new TC.DOM.Element(parent_element);

        return element;
    },

    insert_node: function(node) {
        var selection = new TC.Selection(),
                range = selection.range();

        if (range)
            selection._insert_node(range, node.get());
    },

    append_node: function(node) {
        var selection = new TC.Selection(),
                range = selection.range();

        if (range) {
            range.setStartAfter(selection.node().get());
            selection.set_single_range(range);
            selection._insert_node(range, node.get());
        }
    },

    _insert_node: function(range, node) {
        range.collapse(false);
        range.insertNode(node);
        range.selectNodeContents(node);
        range.collapse(false);
        this.set_single_range(range);
    },

    set_single_range: function(range) {
        this._selection.setSingleRange(range);
    },

    focus_node: function(){
        var fn = new TC.DOM.Element(this._selection.focusNode)

        return fn;
    }
};
