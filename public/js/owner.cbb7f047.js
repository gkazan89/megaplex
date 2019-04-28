(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["owner"],{"0ed1":function(t,e,i){"use strict";var a=i("b0d5"),s=i.n(a);s.a},"32c1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home col"},[i("div",[i("h1",[t._v("Owner Portal")]),i("ul",{staticClass:"error"},t._l(t.errors,function(e){return i("li",[t._v(t._s(e))])}),0),i("h2",[t._v("Tickets")]),i("p",{staticClass:"above"},[t._v("\n      Filter By Movie: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchFilter,expression:"searchFilter"}],attrs:{type:"text"},domProps:{value:t.searchFilter},on:{input:function(e){e.target.composing||(t.searchFilter=e.target.value)}}})]),i("div",{staticClass:"row"},t._l(t.filterBy(t.tickets,t.searchFilter,"movie"),function(e){return i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"card"},[i("p",[t._v("Name: "+t._s(e.name))]),i("p",[t._v("Email: "+t._s(e.email))]),i("p",[t._v("Movie: "+t._s(e.movie))]),i("p",[t._v("Showtime: "+t._s(e.showtime))]),i("p",[t._v("Theater: "+t._s(e.theater))])])])}),0),i("h3",[t._v("Movies")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"card"},[i("p",[t._v("Add Movie")]),i("p",[t._v("Movie: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("p",[t._v("\n            Runtime (in minutes): "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.runtime,expression:"runtime"}],attrs:{type:"number"},domProps:{value:t.runtime},on:{input:function(e){e.target.composing||(t.runtime=e.target.value)}}})]),i("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addMovie()}}},[t._v("\n            Add Movie\n          ")])])])]),i("div",{staticClass:"row"},t._l(t.movies,function(e){return i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"card"},[i("p",[t._v("Movie: "+t._s(e.title))]),i("p",[t._v("Runtime: "+t._s(e.runtime)+" minutes")]),i("p",[t._v("ID: "+t._s(e.id))])])])}),0),i("h3",[t._v("Theaters")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"card"},[i("p",[t._v("Add Theater")]),i("p",[t._v("Seating Capacity: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.capacity,expression:"capacity"}],attrs:{type:"number"},domProps:{value:t.capacity},on:{input:function(e){e.target.composing||(t.capacity=e.target.value)}}})]),i("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addTheat()}}},[t._v("\n            Add Theater\n          ")])])])]),i("div",{staticClass:"row"},t._l(t.theaters,function(e){return i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"card"},[i("p",[t._v("Theater ID: "+t._s(e.theater_id))]),i("p",[t._v("Capacity: "+t._s(e.capacity))])])])}),0),i("h3",[t._v("Showtimes")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"card"},[i("p",[t._v("Add Showtime")]),i("p",[t._v("Movie_ID: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieID,expression:"movieID"}],attrs:{type:"number"},domProps:{value:t.movieID},on:{input:function(e){e.target.composing||(t.movieID=e.target.value)}}})]),i("p",[t._v("Theater_ID: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.theaterID,expression:"theaterID"}],attrs:{type:"number"},domProps:{value:t.theaterID},on:{input:function(e){e.target.composing||(t.theaterID=e.target.value)}}})]),i("p",[t._v("Time: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"time"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})]),i("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addShow()}}},[t._v("\n            Add Showtime\n          ")])])])]),i("div",{staticClass:"row"},t._l(t.showtimes,function(e){return i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"card"},[i("p",[t._v("Movie: "+t._s(e.title))]),i("p",[t._v("Theater: "+t._s(e.theater_id))]),i("p",[t._v("Time: "+t._s(e.time))])])])}),0)])])},s=[],n=i("a7c6"),o=i.n(n),r=i("bc3a"),c={mixins:[o.a.mixin],data:function(){return{tickets:[],errors:[],searchFilter:"",movies:[],theaters:[],showtimes:[],title:"",runtime:"",capacity:"",movieID:"",theaterID:"",time:""}},created:function(){r.get("/api/tickets").then(function(t){this.tickets=t.data}.bind(this)),r.get("/api/movies").then(function(t){this.movies=t.data}.bind(this)),r.get("/api/theaters").then(function(t){this.theaters=t.data}.bind(this)),r.get("/api/showtimes").then(function(t){this.showtimes=t.data}.bind(this))},methods:{addMovie:function(){var t={name:this.title,runtime:this.runtime};r.post("/api/movies",t).then(function(t){this.movies.push(t.data)}.bind(this)),this.title="",this.runtime=""},addTheat:function(){var t={capacity:this.capacity};r.post("/api/theaters",t).then(function(t){this.theaters.push(t.data)}.bind(this)),this.capacity=""},addShow:function(){var t={movie_id:this.movieID,theater_id:this.theaterID,time:this.time};r.post("/api/showtimes",t).then(function(t){this.showtimes.push(t.data)}.bind(this)),this.movieID="",this.theaterID="",this.time=""}},props:["showtime"],computed:{}},v=c,m=(i("0ed1"),i("2877")),d=Object(m["a"])(v,a,s,!1,null,null,null);e["default"]=d.exports},b0d5:function(t,e,i){}}]);
//# sourceMappingURL=owner.cbb7f047.js.map