export enum HttpCode {
OK = 200,
CREATED = 201,
NOT_MODIFIED = 304,
BAD_REQUESI = 400,
UNAUTHORIZED = 401,
FORBIDDEN = 403,
NOT_FOUND = 403,
INTERNAL_SERVER_ERROR = 500,

}

export enum Message {
    SOMETHING_WENT_WRONG =" Something went wrong!",
    NO_DATA_FOUND = "No data is found!",
    CREATE_FAILED = "Create is failed",
    UPDATE_FAILED = "Update is failed",
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message= statusMessage;
    }
}

export default Errors;