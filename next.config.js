/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
const path = require('node:path');
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets'), path.join(__dirname, 'components/**/*.scss')],
    },
}

module.exports = withNextIntl(nextConfig);
