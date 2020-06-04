import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
    'dompurify': '2.0.11',
}, 'my:dompurify');
