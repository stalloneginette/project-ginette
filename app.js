app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'coffee');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyPaser.urlencoded({ extended: true}));
app.use(express.static(path.join(_dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/contacts', contacts);
app.use('/groups', groups);
