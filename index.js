import init from './app';
import repo from './stock-repo';

let app = init(repo());
app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port: ', process.env.PORT || 3000);
    console.log('ENVs:', process.env);
});
