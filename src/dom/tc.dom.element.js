TC.DOM.Element = function(element) {
    this._element = $(element);
};

TC.DOM.Element.prototype = {
    get: function(i) {
        return this._element.get(i || 0);
    },

    find: function(selector) {
        return this._element.find(selector);
    },

    parent: function(selector) {
        return this._element.parent(selector);
    },

    data: function(name, value) {
        if(value)
            this._element.data(name, value);

        return this._element.data(name);
    },

    attr: function(name, value) {
        if(value)
            this._element.attr(name, value);

        return this._element.attr(name);
    },

    size: function() {
        return this._element.size();
    },

    value: function(value) {
        if(value)
            this._element.val(value);

        return this._element.val();
    },

    text: function() {
        return this._element.text();
    },

    remove: function(selector) {
        return this._element.remove(selector);
    },

    replace_with: function(element) {
        this._element.replaceWith(element);
    },

    parent: function(selector) {
        var element = new TC.DOM.Element(this._element.parent(selector).get(0));

        return element
    },

    parents: function(selector) {
        var element = new TC.DOM.Element(this._element.parents(selector));

        return element
    },

    children: function(selector) {
        var element = new TC.DOM.Element(this._element.children(selector));

        return element
    },

    next_sibling: function(selector) {
        var element = new TC.DOM.Element(this._element.nextAll(selector).get(0));

        return element;
    },

    prev_sibling: function(selector) {
        var element = new TC.DOM.Element(this._element.prevAll(selector).get(0));

        return element;
    },

    next_siblings: function(selector) {
        var element = new TC.DOM.Element(this._element.nextAll(selector));

        return element;
    },

    prev_siblings: function(selector) {
        var element = new TC.DOM.Element(this._element.prevAll(selector));

        return element;
    },

    next_siblings_until: function(selector, filter) {
        var element = new TC.DOM.Element(this._element.nextUntil(selector, filter));

        return element;
    },

    prev_siblings_until: function(selector, filter) {
        var element = new TC.DOM.Element(this._element.prevUntil(selector, filter));

        return element;
    },

    siblings: function(selector) {
        var element = new TC.DOM.Element(this._element.siblings(selector));

        return element;
    },

    inner_html: function(value) {
        if(value)
            this._element[0].innerHTML = value;

        return this._element[0].innerHTML;
    },

    on: function(events, selector, data, handler) {
        this._element.on(events, selector, data, handler);
    },

    off: function(events , selector, handler) {
        this._element.off(events, selector, handler);
    },

    is: function(what) {
        return this._element.is(what);
    },

    append: function(element) {
        this._element.append(element);
    }

}
