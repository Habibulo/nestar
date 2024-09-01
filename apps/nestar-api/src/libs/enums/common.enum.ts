import { registerEnumType } from '@nestjs/graphql';

export enum Message {
	SOMETHING_WENT_WRONG = 'Something went wrong!',
	NO_DATA_FOUND = 'No data is found!',
	CREATE_FAILED = 'Create is failed!',
	UPDATE_FAILED = 'Update is failed!',
	REMOVE_FAILED = 'Remove is failed!',
	UPLOAD_FAILED = 'Upload is failed!',
	BAD_REQUEST = 'Bad Request',
	NICK_NOT_FOUND = 'MEMBER NOT FOUND WITH MEMBER NICKNAME',
	USED_NICK = 'Already in use',
	WRONG_PASSWORD = 'Wrong password',
	TOKEN_CREATION_FAILED = 'Token creation error',

	USED_MEMBER_NICK_OR_PHONE = 'Already used member nick or phone!',
	NO_MEMBER_NICK = 'No machtches with that member nick!',
	BLOCKED_USER = 'You have been blocked!',
	NOT_AUTHENTICATED = 'You are not authenticated, please login first!',
	TOKEN_NOT_EXIST = 'Bearer Token is not provided!',
	ONLY_SPECIFIC_ROLES_ALLOWED = 'Allowed only for members with specific roles',
	NOT_ALLOWED_REQUEST = 'Not Allowed Request!',
	PROVIDE_ALLOWED_FORMAT = 'Please provide jpg, ipeg or png images!',
	SELF_SUBSCRIPTION_DENIED = 'Self subscription is denied!',
}
export enum Direction {
	ASC = 1,
	DESC = -1,
}

registerEnumType(Direction, {
	name: 'Direction',
});
