var tc = TC.initialize(new TC.User(1, "Lleir"));

tc.start_editing();

tc.DOM.$$("body").on("change", "#users", function(e){
    var self = tc.DOM.$$(this);

    tc.current_user(new tc.User(self.value(), self.find("option[value='"+self.value()+"']").text()));
})
