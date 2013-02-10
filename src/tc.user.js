TC.User = function(id, name) {
    this._id = id;
    this._name = name;
};

TC.User.prototype = {
    id: function() {
        return this._id;
    },

    name: function() {
        return this._name;
    }
};
