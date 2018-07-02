const express = require('express');
const hbs = require('hbs');


const port = process.env.PORT || 3000;
let app = express();


hbs.registerPartials(
  `${__dirname}/views/partials`
);
hbs.registerHelper('getCurrentYear', ()=> {
  return new Date().getUTCFullYear();
});

hbs.registerHelper('screamIt', (text)=> {
  return text.toUpperCase();
});


app.set('view engine', 'hbs');
app.use(express.static(
  `${__dirname}/public`
));

// app.use((req, res, next)=>{
//   var now = new Date().toString();
//   console.log(`${now}: ${req.method} ${req.url}`);
//   next();
// });

//
// app.use((req, res, next)=>{
//   res.render('maintenance.hbs', {
//     pageTitle:'Maintenance Page',
//     message:'Welcome to this awesome site'
//   });
//
// });


app.get('/', (req, res) =>{
  res.render('home.hbs', {
    pageTitle:'Home Page',
    currentYear: new Date().getUTCFullYear(),
    message:'Welcome to this awesome site'
  });
});

app.get('/about',(req, res) => {
  res.render('about.hbs', {
    pageTitle:'About Page',
    currentYear: new Date().getUTCFullYear()
  });
});

app.get('/projects',(req, res) => {
  res.render('projects.hbs', {
    pageTitle:'Projects'
  });
});


app.get('/bad', (req, res) => {
  res.send({message:'Error putos'});
  
});

app.listen(port, () => {
  console.log('Server is running in 3000 port');
});


