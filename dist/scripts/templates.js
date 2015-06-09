this["JST"] = this["JST"] || {};
this["JST"]["likes"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"contentContainer\">\n	\n<div class=\"like-button-area\">\n<button id=\"target\" class=\"likeButton\" type=\"button\"><span id=\"output\">0</span> Likes</button>\n</div>\n\n</div>";
},"useData":true});
this["JST"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"loading-button-area\">\n<button class=\"loadingButton\">Loading "
    + this.escapeExpression(((helper = (helper = helpers.ifIsLoading || (depth0 != null ? depth0.ifIsLoading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ifIsLoading","hash":{},"data":data}) : helper)))
    + "</button>\n</div>";
},"useData":true});