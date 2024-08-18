import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import MemberSchema from '../../schemas/Member.model';

@Module({
	//MemberSchema - bu object
	//Schema - class
	//'Member'-schema modeli xosil bolyapti
	imports: [MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }])],
	providers: [MemberResolver, MemberService],
})
export class MemberModule {}