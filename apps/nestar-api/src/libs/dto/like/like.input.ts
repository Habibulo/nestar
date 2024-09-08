import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';
import { LikeGroup } from '../../enums/like.enum';

@InputType()
export class LikeInput {
	@IsNotEmpty()
	@Field(() => String)
		//kim like bosyapti
	memberId: ObjectId;

	@IsNotEmpty()
	@Field(() => String)
		//aynan qaysi targetni like qilyapti
	likeRefId: ObjectId;

	@IsNotEmpty()
	@Field(() => LikeGroup)
		//qaysi grupdagi targetni like bosyapti
	likeGroup: LikeGroup;
}