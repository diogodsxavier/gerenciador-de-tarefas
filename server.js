const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://diogodsxavier:bwQicvRjkJgcMg1T@cluster0.rdfjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));n