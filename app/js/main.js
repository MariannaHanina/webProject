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
    template : '#temp-place',

    initialize: function () {
        console.log(this.model)
    },

    render: function () {
        var template = _.template( $(this.template).html() ),
            li = this.$el.append(template( this.model.toJSON() ));

        $('#features .container .row').append(li);

    }
});

var smokeRoom = new Place({
        name: 'SmokeRoom',
        desc: 'Приглашаем вас посетить lounge зону SmokeRoom - самое неформатное место в Сергиевом Посаде!',
        img: 'imgs/smokeroom.jpg'
    }),
    smokeRoomView = new PlaceView({model: smokeRoom}),
        name: 'Shisha Deluxe',
        desc: 'Сергиев Посад! Мы работали, мы старались, мы учились и это свершилось - уникальная кальянная от компании «SHISHA DELUXE»',
        img: 'imgs/shishadelux.jpg'
    ;


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