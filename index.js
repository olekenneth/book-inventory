import init from './app';
import repo from './stock-repo';

let app = init(repo());
app.listen(3000, () => console.log('Listening on port: ', 3000));
