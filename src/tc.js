var TC = {
    VERSION: "0.0.1",
    _current_user: null,

    version: function() {
        TC.VERSION
    },

    initialize: function(user, opts) {
        _current_user = user;
        return this;
    },

    current_user: function(new_user) {
        if(new_user)
            _current_user = new_user;

        return _current_user;
    },

    start_editing: function(opts) {
        TC.DOM.editables().attr("contentEditable", "true");
        return this;
    },

    stop_editing: function(opts) {
        TC.DOM.editables().removeAttr("contentEditable");
        return this;
    },

    each: function(collection, callback) {
        $.each(collection, callback);
    },

    now: function() {
        return $.now();
    }
};

TC.DOM       || (TC.DOM = {});
TC.Events    || (TC.Events = {});
TC.Changes   || (TC.Changes = {});
TC.Selection || (TC.Selection = {});
TC.User      || (TC.User = {});
