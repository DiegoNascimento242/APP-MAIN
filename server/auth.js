// auth.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { findUserByUsername } from './DAO/UserDao.js';
const secret = '1234'; // Use uma chave secreta mais segura em produção

export const generateToken = (user) => {
    return jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
};

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hash) => {
    console.log("Senha fornecida:", password);
    console.log("Hash armazenada:", hash);

    return await bcrypt.compare(password, hash);
};

// Função atualizada para autenticação pelo campo 'user'
// auth.js
export const authenticateUser = async (username, password) => {
    console.log(`Username: ${username}, Password: ${password}`); // Log para depuração
    const user = await findUserByUsername(username);
    if (!user) throw new Error('Usuário não encontrado');
    if (!password || !user.dataValues.password) {
        console.log(`Password: ${password}, User Password: ${user.dataValues.password}`); // Log para depuração
        throw new Error('Senha não fornecida ou usuário sem senha');
    }
    const isPasswordValid = await comparePassword(password.trim(), user.dataValues.password.trim());

    if (!isPasswordValid) throw new Error('Senha inválida');
    return user;
};




