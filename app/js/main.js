var Place = Backbone.Model.extend({
    defaults: {
        desc: 'Нет описания',
        img: 'imgs/default.jpg',
        price: 1000
    },

    validate: function (attrs, options) {
        if (attrs.price < 0)
            return 'Стоимость не может быть отрицательной.';
    },

    getDesc: function () {
        return this.get('desc');    
    }
});

var PlaceView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-md-6 col-sm-6 col-xs-12 featurebox',
    template: _.template( $('#temp-place').html() ),

    initialize: function () {
        console.log(this.model)
    },

    render: function () {
        /*var img = $('<img/>', {
                src: this.model.get('img'), 
                class: "img-responsive"
            }),
            imgCont = $('<div/>', {
                class: "col-md-5 place-image"
            }).append(img),

            titleLink = $('<a/>', {
                href: "/",
                text: this.model.get('name')
            }),
            title = $('<h3/>').append(titleLink),

            desc = $('<p/>', {
                text: this.model.get('desc')
            }),
            cont = $('<div/>', {
                class: "col-md-7"
            }).append(title, desc);

        this.$el.append(imgCont, cont);*/
        /*var li = this.$el.append(this.template( this.model.toJSON() ));
        $('#features .container .row').append(li);*/

        console.log($('#temp-place').html());
    }
});

var smokeRoom = new Place({
        name: 'SmokeRoom',
        desc: 'Приглашаем вас посетить lounge зону SmokeRoom - самое неформатное место в Сергиевом Посаде!',
        img: 'imgs/smokeroom.jpg'
    }),
    smokeRoomView = new PlaceView({model: smokeRoom});


/*var Place = function (config) {
    this.name = config.name;
    this.desc = config.desc;
    this.img = config.img;
};

Place.prototype.getDesc = function () {
    return this.desc;
};

var smokeRoom = new Place( {
    name: 'SmokeRoom',
    desc: 'Приглашаем вас посетить lounge зону SmokeRoom - самое неформатное место в Сергиевом Посаде!',
    img: 'imgs/smokeroom.jpg'
} );

*/