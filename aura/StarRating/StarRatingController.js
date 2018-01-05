/**
 * Created by Sonal_Chaudhary on 1/5/2018.
 */
({
    afterScriptsLoaded : function(component, event, helper) {
        var domEl = component.find("ratingArea").getElement();
        var currentRating = component.get('v.value');
        var readOnly = component.get('v.readonly');
        var maxRating = 5;
        var callback = function(rating) {
            component.set('v.value',rating);
        }
        component.ratingObj = rating(domEl,currentRating,maxRating,callback,readOnly);
    },

    onValueChange: function(component,event,helper) {
        if (component.ratingObj) {
            var value = component.get('v.value');
            component.ratingObj.setRating(value,false);
        }
    }
})