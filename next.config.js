/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    redirects: async() => {
        return [
            {
                source: '/users',
                destination: '/about',
                permanent: false
            },
            {
                source: '/userlist/:userid',
                destination: '/about',
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
