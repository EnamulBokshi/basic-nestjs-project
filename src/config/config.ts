const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const jwtConfig = {
    secret: JWT_SECRET,
    expiration: '1d', // Token expiration time
}