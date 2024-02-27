// BASE URL CONFIG
const BASE_URL = "http://127.0.0.1:5000";

// SECTOR URL CONFIG
const USER_CRUD     = "account-management";

const KEYWORD_CRUD  = "keyword-management"

const TOKEN_CRUD    = "get-token";

// USERS CONFIG
export const USER_REGISTER  = `${BASE_URL}/${USER_CRUD}/reg`;

export const USER_LOGIN     = `${BASE_URL}/${USER_CRUD}/auth`;

export const GET_KEYWORD    = `${BASE_URL}/${KEYWORD_CRUD}/get`;

export const FIND_KEYWORD   = `${BASE_URL}/${KEYWORD_CRUD}/find`;

export const GET_ACCESS     = `${BASE_URL}/${TOKEN_CRUD}`;



